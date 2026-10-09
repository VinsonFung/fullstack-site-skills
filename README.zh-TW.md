# Fullstack Site Skills

[简体中文](README.zh-CN.md) · **繁體中文** · [English](README.md)

八個可跨 Agent 使用的技能，涵蓋內容網站的開發與維護：從需求、響應式介面，到可靠的編輯器、媒體歸屬、發布流程，以及根據本站資料回答的 AI。它們提煉自開發個人部落格的實務經驗，涉及公開前台、內容管理後台和互動管理後台。

這些技能關注可以實際驗證的結果：儲存的內容不會遺失，讀取副本保持一致，資源引用持續有效，發布結果在真正的公開網站上得到核驗。每個技能都可以獨立安裝。使用時會配合你的框架、託管平台和設計；「程式碼儲存庫＋資料庫＋物件儲存」只是一種架構範例，並非使用前提。

## 選擇技能

| 技能 | 適用情境 |
| --- | --- |
| [fullstack-workflow](skills/fullstack-workflow/SKILL.md) | 開發網站的一個階段，或實作跨前台、後台、API 和儲存的功能。 |
| [fullstack-ui-review](skills/fullstack-ui-review/SKILL.md) | 檢查真實使用者流程、響應式狀態、主題、彈出視窗，以及拖曳和動畫問題。 |
| [fullstack-editor-reliability](skills/fullstack-editor-reliability/SKILL.md) | 檢查視覺編輯與 Markdown 往返轉換、可復原的工具列操作、表格、圖片和儲存衝突。 |
| [fullstack-content-sync](skills/fullstack-content-sync/SKILL.md) | 管理權威內容來源、整代原子切換的讀取副本、衍生索引和媒體引用。 |
| [fullstack-release](skills/fullstack-release/SKILL.md) | 發布經過檢查的確切變更，處理提交結果未知的情況，匹配部署版本並核驗公開網站。 |
| [fullstack-ai-safety](skills/fullstack-ai-safety/SKILL.md) | 開發根據資料回答的聊天與影像助手，處理服務商邊界、配額、預算和中斷。 |
| [fullstack-security-review](skills/fullstack-security-review/SKILL.md) | 檢查明確的 Web 信任邊界、內容呈現、上傳，以及不包含憑證的發布產物。 |
| [fullstack-maintenance](skills/fullstack-maintenance/SKILL.md) | 根據引用關係清理檔案、限定範圍復原、演練備份還原，以及維護操作指南。 |

較大的任務可以從 `fullstack-workflow` 開始。遇到具體問題時，也可以只安裝對應的技能。單一技能可以獨立運作，無須安裝建議搭配的其他技能。

## 本機安裝

下載並解壓縮本資料夾，或在擁有者發布後複製儲存庫。要使用附帶的工具，請安裝 Node.js 20 或更新版本，並在本資料夾中開啟終端機。工具沒有 npm 相依套件，也不需要執行 `npm install`。技能本身是 Markdown 檔案；手動安裝不需要 Node.js，除非你明確執行某個輔助指令碼。

### 先預覽，再複製

```sh
node scripts/install.mjs --list
node scripts/install.mjs --agent codex --scope user
node scripts/install.mjs --agent codex --scope user --apply
```

第一條命令列出八個技能，第二條預覽完整的安裝計畫。只有加上 `--apply` 才會寫入檔案。要安裝部分技能，或同時安裝到多個 Agent：

```sh
node scripts/install.mjs --agent codex,claude-code,cursor --scope user --skill fullstack-workflow,fullstack-release --apply
```

安裝到中國編碼 Agent 時，可以先預覽同一技能在多個原生用戶端中的安裝，再執行複製：

```sh
node scripts/install.mjs --agent deepseek-harness,kimi-code,qwen-code,codebuddy,qoder,trae-cn,trae-cli --scope user --skill fullstack-workflow
node scripts/install.mjs --agent deepseek-harness,kimi-code,qwen-code,codebuddy,qoder,trae-cn,trae-cli --scope user --skill fullstack-workflow --apply
```

要安裝到專案中，請從你的網站專案終端機執行下載的指令碼，並將指令碼路徑替換為它的實際位置：

```sh
node /path/to/fullstack-site-skills/scripts/install.mjs --agent codex --scope project --project .
node /path/to/fullstack-site-skills/scripts/install.mjs --agent codex --scope project --project . --apply
```

在 Windows PowerShell 中，如果指令碼的實際路徑包含空格，請為路徑加上引號；Node 支援正斜線路徑。專案層級安裝要求目標目錄已經存在。安裝器拒絕包含 `..` 的明確目標路徑，也拒絕任何經過符號連結或目錄接合點的來源路徑、目標路徑；請使用直接、正規的路徑。安裝器會複製整個技能資料夾，略過內容逐位元組相同的安裝，並拒絕內容不同的既有目標。它不發出網路請求，也不修改用戶端設定或權限。寫入失敗時，新建的目標目錄中可能留下部分檔案；重試前請將這個不完整的技能資料夾移到別處。

### 手動安裝與原生目錄

將 `skills/` 中所需的技能資料夾複製到下表對應的目錄。若技能包含 `references/`、`assets/`、`scripts/` 和 `agents/`，請一併複製，不能只複製 `SKILL.md`。`~` 表示你的使用者家目錄；專案目錄以網站根目錄為基準。

| Agent（附帶安裝器 ID） | 專案目錄 | 使用者目錄 | 明確使用方式 |
| --- | --- | --- | --- |
| Codex（`codex`） | `.agents/skills/` | `~/.agents/skills/` | `$fullstack-workflow` |
| Claude Code（`claude-code`） | `.claude/skills/` | `~/.claude/skills/` | `/fullstack-workflow` |
| Cursor（`cursor`） | `.cursor/skills/` | `~/.cursor/skills/` | `/fullstack-workflow` |
| GitHub Copilot（`github-copilot`） | `.github/skills/` | `~/.copilot/skills/` | 在支援此功能的 CLI／VS Code 介面中使用 `/fullstack-workflow`。 |
| Gemini CLI（`gemini-cli`） | `.gemini/skills/` | `~/.gemini/skills/` | 請 Agent 使用指定名稱的技能；用 `/skills list` 檢查技能是否已被發現。 |
| OpenCode（`opencode`） | `.opencode/skills/` | `~/.config/opencode/skills/` | 請 Agent 使用指定名稱的技能。 |
| DeepSeek Harness（`deepseek-harness`） | `.dsh/skills/` | `~/.dsh/skills/` | `/fullstack-workflow`，或請 Agent 使用指定名稱的技能。 |
| Kimi Code CLI，目前 Node.js 版（`kimi-code`） | `.kimi-code/skills/` | `~/.kimi-code/skills/` | `/skill:fullstack-workflow` |
| Kimi CLI，舊 Python/uv 版（`kimi-cli`） | `.kimi/skills/` | `~/.kimi/skills/` | `/skill:fullstack-workflow` |
| Qwen Code（`qwen-code`） | `.qwen/skills/` | `~/.qwen/skills/` | `/fullstack-workflow`；`/skills` 開啟技能面板。 |
| CodeBuddy Code CLI（`codebuddy`） | `.codebuddy/skills/` | `~/.codebuddy/skills/` | `/fullstack-workflow` |
| Qoder CLI／IDE（`qoder`） | `.qoder/skills/` | `~/.qoder/skills/` | `/fullstack-workflow`；CLI 用 `/skills reload` 重新整理，IDE 重新啟動後從 `/` 清單選擇。 |
| TRAE 中國版 IDE／TraeCode（`trae-cn`） | `.trae/skills/` | `~/.trae-cn/skills/` | 請 Agent 使用指定名稱的技能。 |
| TRAE CLI（`trae-cli`） | `.traecli/skills/` | `~/.traecli/skills/` | 請 Agent 使用指定名稱的技能；用 `/skills` 檢查探索結果，修改後重新啟動。 |

DeepSeek Harness 是獨立的編碼 Agent 用戶端。這個安裝目標不會把技能安裝進 DeepSeek 網頁聊天或模型 API；要讓 DeepSeek 模型使用本機技能，需要支援 Agent Skills 的宿主。詳見 [DeepSeek 使用指南](docs/DEEPSEEK.md)。

附帶安裝器使用表中的預設目錄，不讀取 `DSH_HOME` 或 `KIMI_CODE_HOME` 覆寫設定。如果這兩個用戶端使用了自訂資料根目錄，請手動將技能資料夾複製到該根目錄的 `skills/` 下，或選擇專案層級安裝。目前 Node.js 版 Kimi 使用 `kimi-code`，舊 Python/uv 版使用 `kimi-cli`；`trae-cn` 對應中國版 IDE，`trae-cli` 使用另一組目錄。

安裝後，必要時重新開啟或重新載入 Agent 工作階段。使用前，先檢查已安裝技能清單，或請 Agent 確認它辨識到了所需技能。這 14 個安裝目標（包含不同產品版本）的目錄和呼叫方式已於 2026-10-09 對照官方文件檢查，但實際用戶端尚未進行端到端執行驗證。詳見[相容性與官方連結](docs/COMPATIBILITY.md)，其中也介紹了共用目錄支援和舊版用戶端注意事項。

### 可選的第三方安裝工具

獨立的 [Vercel Skills CLI](https://github.com/vercel-labs/skills) 也能發現標準的 `skills/<name>/SKILL.md` 目錄結構：

```sh
npx skills add . --list
npx skills add . --skill fullstack-workflow --agent codex --global --copy
```

請在本技能套件資料夾中執行這些命令。這種可選方式會下載並執行第三方工具，並遵循該工具的安裝行為；它未包含在本技能套件中，也不在本技能套件的測試範圍內。表中的 Agent ID 屬於本技能套件的 `scripts/install.mjs`；第三方工具有自己的用戶端支援範圍和 ID，使用其他目標前請檢查它的目前說明。發布到 GitHub 後，可以用你的儲存庫 URL 替換 `.`。

## 使用流程

告訴 Agent 你的目標和任務範圍。它應先檢查現有專案，只閱讀相關參考資料，並遵守你已明確的決定。例如：

```text
使用 fullstack-workflow 規劃我的內容網站下一版。
本輪只在本機工作。只解釋會影響資料或發布的選擇。

使用 fullstack-editor-reliability 修復無法刪除的表格。
驗證輸入、圖片說明以及儲存後重新開啟仍然正常。

使用 fullstack-content-sync 診斷新相簿為何沒有出現在地圖中。
追蹤所有使用衍生資料的模組，並保留現有草稿。

使用 fullstack-release 發布已經獲得授權的變更。
區分儲存庫提交、部署和公開網站核驗。
```

Agent 也可能自動發現適用技能。如果多個已安裝技能的能力相近，明確說出名稱更有幫助。技能提供的是工作指引；Agent 仍需要適當的瀏覽器、終端機或雲端工具，以及使用者對任務的授權。工具名稱、框架、模型服務商、視覺風格和數值限制由目標專案決定。

## 驗證與參與貢獻

```sh
node scripts/validate.mjs
node --test
```

驗證器會檢查本技能套件可攜的純量 frontmatter、資料夾名稱、本機連結、自包含的參考資料、必要檔案和可疑材料，不會印出符合條件的金鑰值。測試使用暫存專案和模擬的使用者家目錄。安全技能還附帶唯讀專案掃描器，其限制在該技能中有說明。

請參閱[驗證紀錄](docs/VALIDATION.md)、[貢獻指南](CONTRIBUTING.md)和[安全問題回報](SECURITY.md)。安裝本技能套件不需要呼叫模型、傳送遙測、提供憑證或部署正式環境。

## 目錄、來源與授權

```text
fullstack-site-skills/
  README.md / README.zh-CN.md / README.zh-TW.md
  LICENSE
  docs/              相容性、來源與驗證紀錄
  scripts/           本機安裝器與技能套件驗證器
  tests/             隔離環境中的行為檢查
  skills/
    fullstack-workflow/
      SKILL.md
      agents/openai.yaml
      references/
      assets/
    ... 另外七個自包含的技能
```

`agents/openai.yaml` 是可選的 Codex 介面中繼資料，其他 Agent 可以忽略。技能套件未宣告 `allowed-tools` 權限授予或外部工具相依項目。內容和程式碼均為原創，按 [Agent Skills 格式](https://agentskills.io/specification)組織。[來源說明](docs/PROVENANCE.md)記錄了官方文件和公開的封裝參考；本技能套件不重新散布第三方技能正文或網站素材。

採用 MIT 授權條款。保留[授權聲明](LICENSE)後，你可以使用、修改和重新散布本技能套件。發布時，將本資料夾作為你自己的 GitHub 儲存庫根目錄上傳；只保留本資料夾內的內容，不要上傳周圍的網站專案。具體步驟見[簡體中文 GitHub 上傳指南](docs/PUBLISH.zh-CN.md)。npm 的 `private` 欄位用於防止意外發布到 npm，並不會將 GitHub 儲存庫設為私密。
