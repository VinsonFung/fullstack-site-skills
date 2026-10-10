# Fullstack Site Skills

**简体中文** · [繁體中文](README.zh-TW.md) · [English](README.md)

## 这是什么？

这是一套给 **AI 编程助手使用的全栈网站开发工作指南**，包含八个可独立安装的技能。安装到你正在使用的 Agent 中，就能让 AI 在规划、开发、检查和发布网站时，按相应指南开展工作。

可以把 Skill 理解成一本实用操作手册：告诉 AI 应该先检查什么、哪些已有内容不能随意覆盖，以及如何确认修改真的有效。它不是网站模板、在线服务，也不是新的 AI 模型；安装后不会自动替你生成或发布网站。

它尤其适合个人博客、作品集、相册网站等项目：既有访客看到的页面，也有内容编辑和用户互动功能。使用时不限定前端框架、云平台或模型服务商。

## 它解决什么问题？

- **改好一个页面，另一个页面却坏了。** 把前台、后台、接口和存储的数据一起检查。
- **编辑时看着正常，保存后却变了。** 验证格式、表格、图片和保存后重新打开，不只看初始界面。
- **新内容只出现在一处。** 检查搜索、日历、地图等依赖同一份内容的板块是否同步。
- **发布提示成功，网站却还是旧版。** 区分保存草稿、提交代码、部署，以及正式网站的实际结果。
- **清理文件时误删仍在使用的照片。** 先检查草稿、已发布内容、回收站和备份里的引用。
- **手机布局、主题切换或动画不好用。** 真正点击、输入、拖动，并检查动画中途被打断的情况。
- **AI 功能或公开文件泄露数据。** 检查权限、上传、密钥和模型使用范围。

这套指南提供可重复使用的工作方法，不保证 AI 生成的代码一定正确。Agent 仍需要合适的工具、项目访问权限和你的授权；重要修改仍然需要人工复核。

## 选哪个技能？

| 技能 | 什么时候用 |
| --- | --- |
| [fullstack-workflow](skills/fullstack-workflow/SKILL.md) | 规划一个版本，或协调前台、后台、接口和存储一起修改。 |
| [fullstack-ui-review](skills/fullstack-ui-review/SKILL.md) | 检查布局、深浅主题、手机端、弹窗和动效反馈。 |
| [fullstack-editor-reliability](skills/fullstack-editor-reliability/SKILL.md) | 修复排版、表格、图片描述、图片操作和保存后重新打开的问题。 |
| [fullstack-content-sync](skills/fullstack-content-sync/SKILL.md) | 保持内容来源、读取副本、相关展示和媒体引用一致。 |
| [fullstack-release](skills/fullstack-release/SKILL.md) | 检查具体更改、提交代码、跟进部署，并核验正式网站。 |
| [fullstack-ai-safety](skills/fullstack-ai-safety/SKILL.md) | 开发基于本站资料的聊天或影像助手，明确数据、次数和费用限制。 |
| [fullstack-security-review](skills/fullstack-security-review/SKILL.md) | 检查实际的网站风险，以及公开前要审查的文件。 |
| [fullstack-maintenance](skills/fullstack-maintenance/SKILL.md) | 安全清理文件、撤销限定范围的修改，并验证备份能否恢复。 |

较大的任务可以先用 `fullstack-workflow`；遇到具体问题，也可以只安装对应技能。每个技能自带所需参考资料，不强制安装其他技能。

## 三步安装与使用

### 第一步：下载完整的技能包

到 [Releases](https://github.com/VinsonFung/fullstack-site-skills/releases) 下载 ZIP，或克隆[本仓库](https://github.com/VinsonFung/fullstack-site-skills)。解压后，在 `fullstack-site-skills` 文件夹里打开终端。

附带安装器需要 Node.js 20 或以上版本，建议使用仍在维护的 LTS 版本。没有 npm 依赖，无须运行 `npm install`。如果只手动复制技能文件夹，则不需要 Node.js，除非要运行某个辅助脚本。

### 第二步：先预览，再执行安装

安装到 Codex：

```sh
node scripts/install.mjs --agent codex --scope user
node scripts/install.mjs --agent codex --scope user --apply
```

安装到 WorkBuddy：

```sh
node scripts/install.mjs --agent workbuddy --scope user
node scripts/install.mjs --agent workbuddy --scope user --apply
```

第一条只显示准备复制到哪里，带 `--apply` 的命令才会复制文件。只安装一个技能，或同时安装到多个 Agent：

```sh
node scripts/install.mjs --agent deepseek-harness,kimi-code,qwen-code,workbuddy --scope user --skill fullstack-workflow --apply
```

如果只想让当前项目使用，在目标项目的终端执行以下命令，并把脚本路径换成实际位置。目标项目文件夹必须已经存在：

```sh
node /path/to/fullstack-site-skills/scripts/install.mjs --agent workbuddy --scope project --project .
node /path/to/fullstack-site-skills/scripts/install.mjs --agent workbuddy --scope project --project . --apply
```

Windows 中，脚本路径含空格时要加引号。安装器会拒绝包含 `..` 的目标路径、符号链接或目录联接，以及内容不同的已有技能文件夹；内容完全相同的会跳过。它不请求网络、不改变 Agent 权限，也不会覆盖别人的技能。写入失败可能留下部分新文件，重试前请将不完整的文件夹移到别处。

### 第三步：确认识别，然后提出任务

必要时重新加载 Agent 或新建会话。确认它能识别 `fullstack-workflow`，然后描述具体任务，例如：

```text
使用 fullstack-workflow 规划我的博客下一版。
本轮只改本地文件，不部署。

使用 fullstack-editor-reliability 修复正文图片不能移动、不能删除的问题。
检查保存后重新打开、图片描述和其他格式仍然正常。

使用 fullstack-release 发布我已经授权的修改。
核验正式网站后，再确认发布完成。
```

可以使用你习惯的语言。各客户端直接调用技能的方式有所不同，详见[兼容性指南](docs/COMPATIBILITY.md)。

## 支持哪些 Agent？

安装器提供 14 个默认安装目标，包含不同产品版本：

| Agent／版本 | 安装器 ID |
| --- | --- |
| Codex | `codex` |
| Claude Code | `claude-code` |
| Cursor | `cursor` |
| GitHub Copilot | `github-copilot` |
| Gemini CLI | `gemini-cli` |
| OpenCode | `opencode` |
| DeepSeek Harness | `deepseek-harness` |
| Kimi Code CLI (Node) | `kimi-code` |
| Kimi CLI (legacy Python) | `kimi-cli` |
| Qwen Code | `qwen-code` |
| WorkBuddy | `workbuddy` |
| Qoder CLI / IDE | `qoder` |
| TRAE mainland IDE | `trae-cn` |
| TRAE CLI | `trae-cli` |

WorkBuddy 官方文档中的代码项目兼容目录仍是 `.codebuddy/skills/` 和 `~/.codebuddy/skills/`。旧命令 `--agent codebuddy` 继续作为别名使用，不会让已有命令失效。[WorkBuddy 安装说明](docs/WORKBUDDY.md)介绍了文件复制与技能市场导入的区别。

手动安装时，复制整个 `skills/<名称>/` 文件夹，包括参考资料、脚本、素材、元数据和许可证，而不是只复制 `SKILL.md`。[兼容性指南](docs/COMPATIBILITY.md)列有安装目录、调用方式和官方依据。

安装器只使用默认目录，不读取 `DSH_HOME`、`KIMI_CODE_HOME` 或客户端自定义设置；自定义目录请手动复制。尚未在每款实际客户端中完成端到端验证。DeepSeek Harness 能加载本地技能，但 DeepSeek 普通网页聊天／API 不能单靠复制文件夹来安装，详见 [DeepSeek 使用方式](docs/DEEPSEEK.md)。

可选的 [Vercel Skills CLI](https://github.com/vercel-labs/skills) 是另一套安装工具：

```sh
npx skills add https://github.com/VinsonFung/fullstack-site-skills --list
```

该方式会下载并执行第三方工具；它的 Agent ID 和安装行为不一定与本包相同，也不在本包的测试范围内。

## 检查、隐私与许可

在本包目录中执行：

```sh
node scripts/validate.mjs
node --test
node scripts/check-links.mjs
```

验证器检查必需文件、技能信息、本地引用和可疑内容。测试使用隔离项目和模拟用户目录。链接检查器检查本地目标和公开 HTTPS 链接；第三方网页之后可能迁移，或在部分网络中不可访问。具体范围与限制见[验证记录](docs/VALIDATION.md)。

安装不需要模型密钥，不发送遥测。包内是可复用的指南和本地工具，不包含原网站的正文、用户、照片或私有配置。Agent 实际使用模型时，仍遵循它自身的配置和服务商条款；本包不会调用模型或绕过权限。

采用 MIT 许可证，保留[许可声明](LICENSE)后可使用、修改和分享。其他说明：[贡献指南](CONTRIBUTING.md)、[安全问题报告](SECURITY.md)、[来源说明](docs/PROVENANCE.md)、[GitHub 上传指南](docs/PUBLISH.zh-CN.md)。
