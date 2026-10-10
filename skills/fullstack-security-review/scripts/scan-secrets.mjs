#!/usr/bin/env node
import {lstat,readFile,readdir,realpath} from 'node:fs/promises';
import path from 'node:path';
import {pathToFileURL} from 'node:url';

const skippedDirs=new Set(['.git','node_modules','.venv','venv','.cache','.pnpm-store']);
const textExtensions=new Set(['.md','.mjs','.js','.cjs','.ts','.tsx','.jsx','.html','.css','.json','.yaml','.yml','.toml','.txt','.ini','.conf','.sh','.ps1','.bat','.sql','.py','.xml','.svg']);
const rules=[
 ['private-key-material',/-{5}BEGIN (?:RSA |EC |OPENSSH )?PRIVATE KEY-{5}/gu],
 ['provider-key-candidate',/\bsk-[A-Za-z0-9_-]{24,}\b/gu],
 ['github-token-candidate',/\b(?:gh[pousr]_[A-Za-z0-9]{30,}|github_pat_[A-Za-z0-9_]{40,})\b/gu],
 ['aws-access-key-candidate',/\b(?:AKIA|ASIA)[A-Z0-9]{16}\b/gu],
 ['bearer-value-candidate',/\bBearer\s+[A-Za-z0-9._~-]{32,}/gu],
];

export async function scan(rootInput){
 const root=await realpath(path.resolve(rootInput));
 if(!(await lstat(root)).isDirectory())throw new Error('Root must be a directory');
 const report={scope:'selected current text files; no Git history or remote service scan',filesRead:0,findings:[],uninspected:[]};
 async function walk(dir){
  for(const entry of await readdir(dir,{withFileTypes:true})){
   const file=path.join(dir,entry.name),relative=path.relative(root,file).split(path.sep).join('/'),st=await lstat(file);
   if(st.isSymbolicLink()){report.uninspected.push({file:relative,reason:'symbolic-link'});continue}
   if(st.isDirectory()){if(!skippedDirs.has(entry.name))await walk(file);continue}
   if(!st.isFile())continue;
   if(/(?:^\.env(?:\.|$)|\.(?:pem|key|p12|pfx|sqlite|sqlite3|db)$)/iu.test(entry.name)){
    report.findings.push({file:relative,line:0,rule:'sensitive-container-review-required'});continue;
   }
   if(!textExtensions.has(path.extname(file).toLowerCase())&&entry.name!=='LICENSE'){
    report.uninspected.push({file:relative,reason:'non-selected-format'});continue;
   }
   if(st.size>4*1024*1024){report.uninspected.push({file:relative,reason:'over-read-limit'});continue}
   const content=await readFile(file,'utf8');report.filesRead++;
   for(const [rule,pattern] of rules){pattern.lastIndex=0;for(const match of content.matchAll(pattern)){
    const line=content.slice(0,match.index).split('\n').length;
    if(!report.findings.some(f=>f.file===relative&&f.line===line&&f.rule===rule))report.findings.push({file:relative,line,rule});
   }}
  }
 }
 await walk(root);return report;
}

async function main(){
 const args=process.argv.slice(2);
 if(args.length!==2||args[0]!=='--root')throw new Error('Usage: node scripts/scan-secrets.mjs --root <explicit-project-directory>');
 const report=await scan(args[1]);console.log(JSON.stringify(report,null,2));
 process.exitCode=report.findings.length?2:0;
}
if(process.argv[1]&&import.meta.url===pathToFileURL(path.resolve(process.argv[1])).href)main().catch(()=>{console.error('Scan failed: check the explicit directory, permissions and supported files. No matching value was printed.');process.exitCode=1});
