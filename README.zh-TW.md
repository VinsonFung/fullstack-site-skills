# Fullstack Site Skills

**繁體中文** · [简体中文](README.zh-CN.md) · [English](README.md)

## 這是什麼？

這是一套給 **AI 程式開發助手使用的全端網站開發工作指南**，包含八個可獨立安裝的技能。安裝到你正在使用的 Agent，就能讓 AI 在規劃、開發、檢查和發布網站時，依照相應指南開展工作。

可以把 Skill 理解成一本實用操作手冊：告訴 AI 應該先檢查什麼、哪些既有內容不能隨意覆蓋，以及如何確認修改真的有效。它不是網站範本、線上服務，也不是新的 AI 模型；安裝後不會自動替你產生或發布網站。

它尤其適合個人部落格、作品集、相簿網站等專案：既有訪客看到的頁面，也有內容編輯和使用者互動功能。使用時不限定前端框架、雲端平台或模型服務商。

## 它解決什麼問題？

- **改好一個頁面，另一個頁面卻壞了。** 把前台、後台、介面和儲存的資料一起檢查。
- **編輯時看著正常，儲存後卻變了。** 驗證格式、表格、圖片和儲存後重新開啟，不只看初始介面。
- **新內容只出現在一處。** 檢查搜尋、日曆、地圖等依賴同一份內容的區塊是否同步。
- **發布提示成功，網站卻還是舊版。** 區分儲存草稿、提交程式碼、部署，以及正式網站的實際結果。
- **清理檔案時誤刪仍在使用的照片。** 先檢查草稿、已發布內容、回收筒和備份裡的引用。
- **手機版面、主題切換或動畫不好用。** 真正點擊、輸入、拖動，並檢查動畫中途被打斷的情況。
- **AI 功能或公開檔案洩漏資料。** 檢查權限、上傳、金鑰和模型使用範圍。

這套指南提供可重複使用的工作方法，不保證 AI 產生的程式碼一定正確。Agent 仍需要合適的工具、專案存取權限和你的授權；重要修改仍然需要人工複核。

## 選哪個技能？

| 技能 | 什麼時候用 |
| --- | --- |
| [fullstack-workflow](skills/fullstack-workflow/SKILL.md) | 規劃一個版本，或協調前台、後台、介面和儲存一起修改。 |
| [fullstack-ui-review](skills/fullstack-ui-review/SKILL.md) | 檢查版面、深淺主題、手機端、彈出視窗和動效回饋。 |
| [fullstack-editor-reliability](skills/fullstack-editor-reliability/SKILL.md) | 修復排版、表格、圖片說明、圖片操作和儲存後重新開啟的問題。 |
| [fullstack-content-sync](skills/fullstack-content-sync/SKILL.md) | 保持內容來源、讀取副本、相關展示和媒體引用一致。 |
| [fullstack-release](skills/fullstack-release/SKILL.md) | 檢查具體變更、提交程式碼、追蹤部署，並核驗正式網站。 |
| [fullstack-ai-safety](skills/fullstack-ai-safety/SKILL.md) | 開發基於本站資料的聊天或影像助手，明確資料、次數和費用限制。 |
| [fullstack-security-review](skills/fullstack-security-review/SKILL.md) | 檢查實際的網站風險，以及公開前要審查的檔案。 |
| [fullstack-maintenance](skills/fullstack-maintenance/SKILL.md) | 安全清理檔案、撤銷限定範圍的修改，並驗證備份能否還原。 |

較大的任務可以先用 `fullstack-workflow`；遇到具體問題，也可以只安裝對應技能。每個技能自帶所需參考資料，不強制安裝其他技能。

## 三步安裝與使用

### 第一步：下載完整的技能包

到 [Releases](https://github.com/VinsonFung/fullstack-site-skills/releases) 下載 ZIP，或複製[本儲存庫](https://github.com/VinsonFung/fullstack-site-skills)。解壓縮後，在 `fullstack-site-skills` 資料夾裡開啟終端機。

附帶安裝器需要 Node.js 20 或以上版本，建議使用仍在維護的 LTS 版本。沒有 npm 相依套件，無須執行 `npm install`。如果只手動複製技能資料夾，則不需要 Node.js，除非要執行某個輔助指令碼。

### 第二步：先預覽，再執行安裝

安裝到 Codex：

```sh
node scripts/install.mjs --agent codex --scope user
node scripts/install.mjs --agent codex --scope user --apply
```

安裝到 WorkBuddy：

```sh
node scripts/install.mjs --agent workbuddy --scope user
node scripts/install.mjs --agent workbuddy --scope user --apply
```

第一條只顯示準備複製到哪裡，帶 `--apply` 的命令才會複製檔案。只安裝一個技能，或同時安裝到多個 Agent：

```sh
node scripts/install.mjs --agent deepseek-harness,kimi-code,qwen-code,workbuddy --scope user --skill fullstack-workflow --apply
```

如果只想讓目前專案使用，在目標專案的終端機執行以下命令，並把指令碼路徑換成實際位置。目標專案資料夾必須已經存在：

```sh
node /path/to/fullstack-site-skills/scripts/install.mjs --agent workbuddy --scope project --project .
node /path/to/fullstack-site-skills/scripts/install.mjs --agent workbuddy --scope project --project . --apply
```

Windows 中，指令碼路徑含空格時要加引號。安裝器會拒絕包含 `..` 的目標路徑、符號連結或目錄接合點，以及內容不同的既有技能資料夾；內容完全相同的會略過。它不發出網路請求、不改變 Agent 權限，也不會覆蓋別人的技能。寫入失敗可能留下部分新檔案，重試前請將不完整的資料夾移到別處。

### 第三步：確認辨識，然後提出任務

必要時重新載入 Agent 或新建工作階段。確認它能辨識 `fullstack-workflow`，然後描述具體任務，例如：

```text
使用 fullstack-workflow 規劃我的部落格下一版。
本輪只改本機檔案，不部署。

使用 fullstack-editor-reliability 修復正文圖片不能移動、不能刪除的問題。
檢查儲存後重新開啟、圖片說明和其他格式仍然正常。

使用 fullstack-release 發布我已經授權的修改。
核驗正式網站後，再確認發布完成。
```

可以使用你習慣的語言。各用戶端直接呼叫技能的方式有所不同，詳見[相容性指南](docs/COMPATIBILITY.md)。

## 支援哪些 Agent？

安裝器提供 14 個預設安裝目標，包含不同產品版本：

| Agent／版本 | 安裝器 ID |
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

WorkBuddy 官方文件中的程式專案相容目錄仍是 `.codebuddy/skills/` 和 `~/.codebuddy/skills/`。舊命令 `--agent codebuddy` 繼續作為別名使用，不會讓既有命令失效。[WorkBuddy 安裝說明](docs/WORKBUDDY.md)介紹了檔案複製與技能市場匯入的區別。

手動安裝時，複製整個 `skills/<名稱>/` 資料夾，包括參考資料、指令碼、素材、介面資訊和授權文件，而不是只複製 `SKILL.md`。[相容性指南](docs/COMPATIBILITY.md)列有安裝目錄、呼叫方式和官方依據。

安裝器只使用預設目錄，不讀取 `DSH_HOME`、`KIMI_CODE_HOME` 或用戶端自訂設定；自訂目錄請手動複製。尚未在每款實際用戶端中完成端到端驗證。DeepSeek Harness 能載入本機技能，但 DeepSeek 一般網頁聊天／API 不能單靠複製資料夾來安裝，詳見 [DeepSeek 使用方式](docs/DEEPSEEK.md)。

可選的 [Vercel Skills CLI](https://github.com/vercel-labs/skills) 是另一套安裝工具：

```sh
npx skills add https://github.com/VinsonFung/fullstack-site-skills --list
```

該方式會下載並執行第三方工具；它的 Agent ID 和安裝行為不一定與本包相同，也不在本包的測試範圍內。

## 檢查、隱私與授權

在本包目錄中執行：

```sh
node scripts/validate.mjs
node --test
node scripts/check-links.mjs
```

驗證器檢查必需檔案、技能資訊、本機引用和可疑內容。測試使用隔離專案和模擬使用者目錄。連結檢查器檢查本機目標和公開 HTTPS 連結；第三方網頁之後可能遷移，或在部分網路中無法存取。具體範圍與限制見[驗證紀錄](docs/VALIDATION.md)。

安裝不需要模型金鑰，不傳送遙測。包內是可重用的指南和本機工具，不包含原網站的正文、使用者、照片或私有設定。Agent 實際使用模型時，仍遵循它自身的設定和服務商條款；本包不會呼叫模型或繞過權限。

採用 MIT 授權，保留[授權聲明](LICENSE)後可使用、修改和分享。其他說明：[貢獻指南](CONTRIBUTING.md)、[安全問題回報](SECURITY.md)、[來源說明](docs/PROVENANCE.md)、[GitHub 上傳指南（簡體中文）](docs/PUBLISH.zh-CN.md)。
