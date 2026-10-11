import test from 'node:test';
import assert from 'node:assert/strict';
import {mkdtemp,readFile,mkdir,writeFile,rm,realpath} from 'node:fs/promises';
import path from 'node:path';import os from 'node:os';
import {scan} from '../skills/fullstack-backend-development/scripts/scan-secrets.mjs';

async function root(t){const dir=await mkdtemp(path.join(await realpath(os.tmpdir()),'fullstack-scanner-test-'));t.after(async()=>{if(!path.basename(dir).startsWith('fullstack-scanner-test-'))throw new Error('Unsafe fixture cleanup');await rm(dir,{recursive:true,force:true})});return dir}
test('scanner returns only locations and rules for a candidate value',async t=>{
 const dir=await root(t),candidate=['s','k','-',...Array(30).fill('a')].join('');
 await writeFile(path.join(dir,'sample.js'),'const key = "'+candidate+'";\n');
 const result=await scan(dir);assert.equal(result.findings.length,1);assert.equal(result.findings[0].rule,'provider-key-candidate');
 assert.ok(!JSON.stringify(result).includes(candidate));assert.equal(result.findings[0].line,1);
});
test('scanner flags a sensitive container by filename without loading it',async t=>{
 const dir=await root(t);await writeFile(path.join(dir,'.env'),'not a real credential');
 const result=await scan(dir);assert.equal(result.filesRead,0);assert.equal(result.findings[0].rule,'sensitive-container-review-required');
 assert.ok(!JSON.stringify(result).includes('not a real credential'));
});
test('scanner explains uninspected binary files and leaves sources unchanged',async t=>{
 const dir=await root(t),original=Buffer.from([0,1,2,3]);await writeFile(path.join(dir,'asset.bin'),original);await mkdir(path.join(dir,'node_modules'));await writeFile(path.join(dir,'node_modules','ignored.js'),'untouched');
 const result=await scan(dir);assert.equal(result.findings.length,0);assert.equal(result.filesRead,0);assert.equal(result.uninspected[0].reason,'non-selected-format');
 assert.deepEqual(await readFile(path.join(dir,'asset.bin')),original);
});
