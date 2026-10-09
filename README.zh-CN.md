# Fullstack Site Skills

**简体中文** · [繁體中文](README.zh-TW.md) · [English](README.md)

八个可跨 Agent 使用的技能，覆盖内容网站的开发和维护：从需求、响应式界面，到可靠的编辑器、媒体归属、发布流程和基于本站资料回答的 AI。它们提炼自开发个人博客的实践，涉及公开前台、内容管理后台和互动管理后台。

这些技能关注可以实际验证的结果：保存的内容不会丢失，读取副本保持一致，资源引用持续有效，发布结果在真正的公开网站上得到核验。每个技能都可以独立安装。使用时会适配你的框架、托管平台和设计；“代码仓库＋数据库＋对象存储”只是一种架构示例，并非使用前提。

## 选择技能

| 技能 | 适用场景 |
| --- | --- |
| [fullstack-workflow](skills/fullstack-workflow/SKILL.md) | 开发网站的一个阶段，或实施跨前台、后台、API 和存储的功能。 |
| [fullstack-ui-review](skills/fullstack-ui-review/SKILL.md) | 检查真实用户流程、响应式状态、主题、弹窗，以及拖动和动画问题。 |
| [fullstack-editor-reliability](skills/fullstack-editor-reliability/SKILL.md) | 检查可视编辑与 Markdown 往返转换、可撤销的工具栏操作、表格、图片和保存冲突。 |
| [fullstack-content-sync](skills/fullstack-content-sync/SKILL.md) | 管理权威内容来源、整代原子切换的读取副本、派生索引和媒体引用。 |
| [fullstack-release](skills/fullstack-release/SKILL.md) | 发布经过检查的确切更改，处理提交结果未知的情况，匹配部署版本并核验公开网站。 |
| [fullstack-ai-safety](skills/fullstack-ai-safety/SKILL.md) | 开发基于资料回答的聊天与影像助手，处理服务商边界、配额、预算和中断。 |
| [fullstack-security-review](skills/fullstack-security-review/SKILL.md) | 检查明确的 Web 信任边界、内容渲染、上传，以及不包含凭据的发布产物。 |
| [fullstack-maintenance](skills/fullstack-maintenance/SKILL.md) | 根据引用关系清理文件、限定范围撤销、演练备份恢复，以及维护操作指南。 |

较大的任务可以从 `fullstack-workflow` 开始。遇到具体问题时，也可以只安装对应的技能。单个技能可以独立工作，无须安装建议搭配的其他技能。

## 本地安装

下载并解压本文件夹，或在所有者发布后克隆仓库。要使用附带的工具，请安装 Node.js 20 或更高版本，并在本文件夹中打开终端。工具没有 npm 依赖，也不需要执行 `npm install`。技能本身是 Markdown 文件；手动安装不需要 Node.js，除非你明确运行某个辅助脚本。

### 先预览，再复制

```sh
node scripts/install.mjs --list
node scripts/install.mjs --agent codex --scope user
node scripts/install.mjs --agent codex --scope user --apply
```

第一条命令列出八个技能，第二条预览完整的安装计划。只有加上 `--apply` 才会写入文件。要安装部分技能，或同时安装到多个 Agent：

```sh
node scripts/install.mjs --agent codex,claude-code,cursor --scope user --skill fullstack-workflow,fullstack-release --apply
```

安装到国内编码 Agent 时，可以先预览同一技能在多个原生客户端中的安装，再执行复制：

```sh
node scripts/install.mjs --agent deepseek-harness,kimi-code,qwen-code,codebuddy,qoder,trae-cn,trae-cli --scope user --skill fullstack-workflow
node scripts/install.mjs --agent deepseek-harness,kimi-code,qwen-code,codebuddy,qoder,trae-cn,trae-cli --scope user --skill fullstack-workflow --apply
```

要安装到项目中，请从你的网站项目终端运行下载的脚本，并将脚本路径替换为它的实际位置：

```sh
node /path/to/fullstack-site-skills/scripts/install.mjs --agent codex --scope project --project .
node /path/to/fullstack-site-skills/scripts/install.mjs --agent codex --scope project --project . --apply
```

在 Windows PowerShell 中，如果脚本的实际路径含有空格，请给路径加引号；Node 支持正斜杠路径。项目级安装要求目标目录已经存在。安装器拒绝包含 `..` 的显式目标路径，也拒绝任何经过符号链接或目录联接的源路径、目标路径；请使用直接、规范的路径。安装器会复制整个技能文件夹，跳过内容逐字节相同的安装，并拒绝内容不同的已有目标。它不请求网络，也不修改客户端配置或权限。写入失败时，新建的目标目录中可能留下部分文件；重试前请将这个不完整的技能文件夹移到别处。

### 手动安装与原生目录

将 `skills/` 中所需的技能文件夹复制到下表对应的目录。若技能包含 `references/`、`assets/`、`scripts/` 和 `agents/`，请一并复制，不能只复制 `SKILL.md`。`~` 表示你的用户主目录；项目目录以网站根目录为基准。

| Agent（附带安装器 ID） | 项目目录 | 用户目录 | 显式使用方式 |
| --- | --- | --- | --- |
| Codex（`codex`） | `.agents/skills/` | `~/.agents/skills/` | `$fullstack-workflow` |
| Claude Code（`claude-code`） | `.claude/skills/` | `~/.claude/skills/` | `/fullstack-workflow` |
| Cursor（`cursor`） | `.cursor/skills/` | `~/.cursor/skills/` | `/fullstack-workflow` |
| GitHub Copilot（`github-copilot`） | `.github/skills/` | `~/.copilot/skills/` | 在支持此功能的 CLI／VS Code 界面中使用 `/fullstack-workflow`。 |
| Gemini CLI（`gemini-cli`） | `.gemini/skills/` | `~/.gemini/skills/` | 请 Agent 使用指定名称的技能；用 `/skills list` 检查技能是否已被发现。 |
| OpenCode（`opencode`） | `.opencode/skills/` | `~/.config/opencode/skills/` | 请 Agent 使用指定名称的技能。 |
| DeepSeek Harness（`deepseek-harness`） | `.dsh/skills/` | `~/.dsh/skills/` | `/fullstack-workflow`，或请 Agent 使用指定名称的技能。 |
| Kimi Code CLI，当前 Node.js 版（`kimi-code`） | `.kimi-code/skills/` | `~/.kimi-code/skills/` | `/skill:fullstack-workflow` |
| Kimi CLI，旧 Python/uv 版（`kimi-cli`） | `.kimi/skills/` | `~/.kimi/skills/` | `/skill:fullstack-workflow` |
| Qwen Code（`qwen-code`） | `.qwen/skills/` | `~/.qwen/skills/` | `/fullstack-workflow`；`/skills` 打开技能面板。 |
| CodeBuddy Code CLI（`codebuddy`） | `.codebuddy/skills/` | `~/.codebuddy/skills/` | `/fullstack-workflow` |
| Qoder CLI／IDE（`qoder`） | `.qoder/skills/` | `~/.qoder/skills/` | `/fullstack-workflow`；CLI 用 `/skills reload` 刷新，IDE 重启后从 `/` 列表选择。 |
| TRAE 国内 IDE／TraeCode（`trae-cn`） | `.trae/skills/` | `~/.trae-cn/skills/` | 请 Agent 使用指定名称的技能。 |
| TRAE CLI（`trae-cli`） | `.traecli/skills/` | `~/.traecli/skills/` | 请 Agent 使用指定名称的技能；用 `/skills` 检查发现情况，修改后重启。 |

DeepSeek Harness 是独立的编码 Agent 客户端。这个安装目标不会把技能安装进 DeepSeek 网页聊天或模型 API；要让 DeepSeek 模型使用本地技能，需要支持 Agent Skills 的宿主。详见 [DeepSeek 使用指南](docs/DEEPSEEK.md)。

附带安装器使用表中的默认目录，不读取 `DSH_HOME` 或 `KIMI_CODE_HOME` 覆盖设置。如果这两个客户端使用了自定义数据根目录，请手动将技能文件夹复制到该根目录的 `skills/` 下，或选择项目级安装。当前 Node.js 版 Kimi 使用 `kimi-code`，旧 Python/uv 版使用 `kimi-cli`；`trae-cn` 对应国内 IDE，`trae-cli` 使用另一组目录。

安装后，必要时重新打开或重新加载 Agent 会话。使用前，先检查已安装技能列表，或请 Agent 确认它识别到了所需技能。这 14 个安装目标（包含不同产品版本）的目录和调用方式已于 2026-10-09 对照官方文档检查，但实际客户端尚未进行端到端运行验证。详见[兼容性与官方链接](docs/COMPATIBILITY.md)，其中也介绍了共享目录支持和旧版客户端注意事项。

### 可选的第三方安装工具

独立的 [Vercel Skills CLI](https://github.com/vercel-labs/skills) 也能发现标准的 `skills/<name>/SKILL.md` 目录结构：

```sh
npx skills add . --list
npx skills add . --skill fullstack-workflow --agent codex --global --copy
```

请在本技能包文件夹中运行这些命令。这种可选方式会下载并执行第三方工具，并遵循该工具的安装行为；它未包含在本技能包中，也不在本技能包的测试范围内。表中的 Agent ID 属于本技能包的 `scripts/install.mjs`；第三方工具有自己的客户端支持范围和 ID，使用其他目标前请检查它的当前帮助。发布到 GitHub 后，可以用你的仓库 URL 替换 `.`。

## 使用流程

告诉 Agent 你的目标和任务范围。它应先检查现有项目，只阅读相关参考资料，并遵守你已明确的决定。例如：

```text
使用 fullstack-workflow 规划我的内容网站下一版。
本轮只在本地工作。只解释会影响数据或发布的选择。

使用 fullstack-editor-reliability 修复无法删除的表格。
验证输入、图片描述以及保存后重新打开仍然正常。

使用 fullstack-content-sync 诊断新相册为何没有出现在地图中。
追踪所有使用派生数据的模块，并保留现有草稿。

使用 fullstack-release 发布已经获得授权的更改。
区分仓库提交、部署和公开网站核验。
```

Agent 也可能自动发现适用技能。如果多个已安装技能的能力相近，明确说出名称更有帮助。技能提供的是工作指引；Agent 仍需要适当的浏览器、终端或云端工具，以及用户对任务的授权。工具名称、框架、模型服务商、视觉风格和数值限制由目标项目决定。

## 验证与参与贡献

```sh
node scripts/validate.mjs
node --test
```

验证器会检查本技能包可移植的标量 frontmatter、文件夹名称、本地链接、自包含的参考资料、必需文件和可疑材料，不会打印匹配到的密钥值。测试使用临时项目和模拟的用户主目录。安全技能还附带只读项目扫描器，其限制在该技能中有说明。

请参阅[验证记录](docs/VALIDATION.md)、[贡献指南](CONTRIBUTING.md)和[安全问题报告](SECURITY.md)。安装本技能包不需要调用模型、发送遥测、提供凭据或部署生产环境。

## 目录、来源与许可

```text
fullstack-site-skills/
  README.md / README.zh-CN.md / README.zh-TW.md
  LICENSE
  docs/              兼容性、来源与验证记录
  scripts/           本地安装器与技能包验证器
  tests/             隔离环境中的行为检查
  skills/
    fullstack-workflow/
      SKILL.md
      agents/openai.yaml
      references/
      assets/
    ... 另外七个自包含的技能
```

`agents/openai.yaml` 是可选的 Codex 界面元数据，其他 Agent 可以忽略。技能包未声明 `allowed-tools` 权限授予或外部工具依赖。内容和代码均为原创，按 [Agent Skills 格式](https://agentskills.io/specification)组织。[来源说明](docs/PROVENANCE.md)记录了官方文档和公开的打包参考；本技能包不重新分发第三方技能正文或网站素材。

采用 MIT 许可证。保留[许可声明](LICENSE)后，你可以使用、修改和重新分发本技能包。发布时，将本文件夹作为你自己的 GitHub 仓库根目录上传；只保留本文件夹内的内容，不要上传外围的网站项目。具体步骤见 [GitHub 上传指南](docs/PUBLISH.zh-CN.md)。npm 的 `private` 字段用于防止意外发布到 npm，并不会将 GitHub 仓库设为私密。
