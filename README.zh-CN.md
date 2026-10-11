# Fullstack Site Skills

**简体中文** · [繁體中文](README.zh-TW.md) · [English](README.md)

## 这是什么？

Fullstack Site Skills 2.0.0 是一套给 **AI 编程助手使用的全栈网站开发工作指南**，只有三个可独立安装的入口：前台开发、可选的设计风格、后台开发（包含管理界面）。把需要的技能安装到你正在使用的 Agent 中，再提出具体任务并说明要用哪个技能。

可以把 Skill 理解成给 AI 的工作手册：告诉它先检查什么、如何修改、哪些已有内容需要保护，以及用什么证据确认结果有效。每个技能都是独立文件夹，入口是 `SKILL.md`，并附有需要的参考资料或工具。

它适合个人博客、作品集、相册网站等项目：既有访客看到的页面，也有内容编辑和用户互动功能。它不是网站模板、在线服务，也不是新的 AI 模型；安装后不会自动生成或发布网站。使用时不限定前端框架、云平台或模型服务商。

## 每个 Skill 做什么？

按你想完成的事情选择。安装后，可以把表中的例子直接作为任务交给 Agent。

| 技能 | 帮助 Agent 完成什么 | 使用例子 |
| --- | --- | --- |
| [fullstack-frontend-development](skills/fullstack-frontend-development/SKILL.md)（前台开发） | 开发和检查访客使用的页面：阅读、导航、搜索、相册、评论等交互，兼顾手机布局、无障碍、性能和客户端安全。 | “修复手机文章菜单和相册浏览，检查键盘操作、被打断的动画和图片加载缓慢的问题。” |
| [fullstack-design-style](skills/fullstack-design-style/SKILL.md)（设计风格） | 应用摄影主导、编辑式排版、蓝灰色液态玻璃视觉风格，统一构图、浅色／深色主题、字体、透明控件和克制的动效。 | “按这套风格改版摄影首页，让文章在两种主题下都清晰易读。” |
| [fullstack-backend-development](skills/fullstack-backend-development/SKILL.md)（后台开发） | 开发管理界面和编辑器，以及接口、数据、身份验证、媒体、内容同步、发布、备份和服务端 AI 安全措施。 | “修复编辑器图片操作和保存冲突，确认已发布内容同步到搜索和相册，草稿不会泄露。” |

### 三个技能怎样分工？

`fullstack-frontend-development` 负责公开的访客体验，让阅读、搜索、相册和互动在网站现有风格下正常工作。`fullstack-backend-development` 负责作者和管理员的工作流程，包含能看到的管理页面、编辑器，以及背后的接口和数据。这里的“后台开发”包含后台 UI 和编辑可靠性，并不只指服务端代码。功能同时涉及前台与后台时，要一起约定接口和内容版本。

只有想按这套具体方向创建或改版外观时，才使用 `fullstack-design-style`。它让照片承担主要构图，以蓝灰色贯穿浅色和深色主题：浅色采用暖纸色背景、柔和白色玻璃，深色采用有层次的藏蓝；标题有辨识度，正文适合长篇阅读。导航、按钮和部分面板使用透明材质、细微高光与适量阴影，阅读和编辑区域保持安静清晰；动效从触发控件的位置展开，并适配手机和“减少动态效果”偏好。

设计技能决定视觉表现；前台和后台开发负责对应页面的实际操作、数据保护与权限约束。功能修复或审查会保留现有视觉风格，除非你明确要求改版。设计技能是可选且独立的方向，不依赖 Hallmark；提供的是风格指南，不附带原网站的品牌标识、照片或正文。

### 只用一个，还是组合使用？

- 范围明确时单独使用：公开搜索或手机导航用前台开发，视觉改版用设计风格，编辑器、上传接口或备份流程用后台开发。
- 新增相册等跨层功能可组合前台与后台：后台管理编辑、媒体和发布，前台向访客展示已发布内容。需要这套视觉方向时，再加入设计风格。
- 发布、安全检查或维护时，只在你已授权的操作范围内使用对应指导。设计或审查任务本身不会自动授权部署或删除；只要求审查时返回问题清单。

每个技能都能独立安装，自带所需参考资料，不强制安装另外两个。安全、内容同步、发布、维护等专业指导保留在内部参考资料中，遇到相关任务时按需读取；它们不是额外的可见技能，也不要求每项任务通读全部资料。安装全部三个技能，不代表每项任务都要调用全部技能。

这套指南提供可重复使用的工作方法，不保证 AI 生成的代码一定正确。Agent 仍需要合适的工具、项目访问权限和你的授权；重要修改仍然需要人工复核。

### 从第 1 版升级

2.0.0 将原来的九个入口合并为这三个。[迁移指南](docs/MIGRATION.md)说明了职责对应关系和新的调用方式。安装器不会自动删除 Agent 中已安装的旧技能文件夹；请先检查自己的修改，再有选择地停用或移除旧入口，避免新旧指导重复出现。

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
node scripts/install.mjs --agent deepseek-harness,kimi-code,qwen-code,workbuddy --scope user --skill fullstack-frontend-development --apply
```

如果只想让当前项目使用，在目标项目的终端执行以下命令，并把脚本路径换成实际位置。目标项目文件夹必须已经存在：

```sh
node /path/to/fullstack-site-skills/scripts/install.mjs --agent workbuddy --scope project --project .
node /path/to/fullstack-site-skills/scripts/install.mjs --agent workbuddy --scope project --project . --apply
```

Windows 中，脚本路径含空格时要加引号。安装器会拒绝包含 `..` 的目标路径、符号链接或目录联接，以及内容不同的已有技能文件夹；内容完全相同的会跳过。它不请求网络、不改变 Agent 权限，也不会覆盖别人的技能。写入失败可能留下部分新文件，重试前请将不完整的文件夹移到别处。

### 第三步：确认识别，然后提出任务

必要时重新加载 Agent 或新建会话。确认它能识别你安装的技能，然后描述具体任务，例如：

```text
使用 fullstack-frontend-development 修复博客的手机菜单和文章搜索。
检查键盘与触屏操作。本轮只改本地文件，不部署。

使用 fullstack-design-style 改版我的摄影首页。
再用 fullstack-frontend-development 检查手机布局、对比度和键盘操作。

使用 fullstack-backend-development 修复编辑器图片不能移动、不能删除的问题。
检查保存后重新打开、图片描述和其他格式仍然正常。

使用 fullstack-backend-development 发布我已经授权的修改。
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
