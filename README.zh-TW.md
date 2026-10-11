# Fullstack Site Skills

**繁體中文** · [简体中文](README.zh-CN.md) · [English](README.md)

## 這是什麼？

這是一套給 **AI 程式開發助手使用的全端網站開發工作指南**，包含九個可獨立安裝的技能，涵蓋規劃、視覺設計、互動檢查、編輯器、內容同步、發布、AI 功能、安全和維護。安裝到你正在使用的 Agent，再提出具體任務並說明要用哪個技能。

可以把 Skill 理解成給 AI 的工作手冊：告訴它先檢查什麼、如何修改、哪些既有內容需要保護，以及用什麼證據確認結果有效。每個技能都是獨立資料夾，入口是 `SKILL.md`，並附有所需的參考資料或工具。

它適合個人部落格、作品集、相簿網站等專案：既有訪客看到的頁面，也有內容編輯和使用者互動功能。它不是網站範本、線上服務，也不是新的 AI 模型；安裝後不會自動產生或發布網站。使用時不限定前端框架、雲端平台或模型服務商。

## 每個 Skill 做什麼？

按你想完成的事情選擇。安裝後，可以把表中的例子直接作為任務交給 Agent。

| 技能 | 幫助 Agent 完成什麼 | 使用例子 |
| --- | --- | --- |
| [fullstack-workflow](skills/fullstack-workflow/SKILL.md) | 把網站目標變成前台、後台、API 和儲存相互配合的計畫與實作，並說明如何驗收。 | 「給部落格增加相簿，先梳理編輯、儲存和公開展示怎樣連起來。」 |
| [fullstack-liquid-glass-design](skills/fullstack-liquid-glass-design/SKILL.md) | 建立以攝影和內容閱讀為主的視覺風格，用透明玻璃導覽列、按鈕和面板，統一主題、字體與動效。 | 「把攝影作品集做成這種液態玻璃風格，文章要易讀，手機上也要好用。」 |
| [fullstack-ui-review](skills/fullstack-ui-review/SKILL.md) | 檢查既有介面是否讀得清、找得到、操作得了，涵蓋主題、彈出視窗、拖曳、焦點和被打斷的動畫；只要求審查時回傳問題清單。 | 「審查手機選單和主題切換，先報告能重現的問題，不修改。」 |
| [fullstack-editor-reliability](skills/fullstack-editor-reliability/SKILL.md) | 保護作者在排版、表格、圖片操作、模式切換、儲存和重新開啟過程中的內容，並處理儲存衝突。 | 「修復圖片不能移動、不能刪除的問題，確認重新開啟後說明和格式仍在。」 |
| [fullstack-content-sync](skills/fullstack-content-sync/SKILL.md) | 明確哪份內容才是權威來源，讓相關展示使用同一版本，更新時保留草稿和共用媒體。 | 「文章發布了，但搜尋和日曆沒有更新，追查並修復同步問題。」 |
| [fullstack-release](skills/fullstack-release/SKILL.md) | 把已授權、已檢查的修改提交和部署，再確認正式網站顯示預期版本。 | 「發布這次已授權的修改，並確認正式網站已經更新。」 |
| [fullstack-ai-safety](skills/fullstack-ai-safety/SKILL.md) | 開發基於本站內容的聊天或影像助手，使用已發布資料，在伺服器端保管金鑰，並限制媒體存取、使用量和費用。 | 「增加只使用已發布文章的網站助手，保護草稿，並設定費用上限。」 |
| [fullstack-security-review](skills/fullstack-security-review/SKILL.md) | 檢查權限、API、上傳和內容呈現中實際可觸及的風險，審查發布檔案裡的金鑰與私有資料。 | 「上線前審查上傳 API 和管理員權限。」 |
| [fullstack-maintenance](skills/fullstack-maintenance/SKILL.md) | 清理前追蹤檔案引用，準備限定範圍的撤銷和備份還原，確認哪些資源仍在使用。 | 「列出未使用媒體及其引用，準備能夠還原的清理方案。」 |

### 視覺設計與 UI 審查有什麼區別？

想依照這套具體方向建立或改版網站外觀時，用 `fullstack-liquid-glass-design`。它讓照片承擔主要構圖：淺色主題採用暖紙色背景、柔和白色玻璃與克制的藍色點綴，深色主題採用有層次的藏藍；標題有辨識度，正文適合長篇閱讀。導覽列、按鈕和部分面板使用透明材質、細微高光與適量陰影，閱讀和編輯區域保持安靜清晰；動效從觸發控制項的位置展開，並適配手機和「減少動態效果」偏好。

想檢查既有介面或修復具體操作時，用 `fullstack-ui-review`。它關注文字能否看清、彈出視窗是否對齊、鍵盤與觸控螢幕能否操作、動畫中途打斷是否正常，並尊重網站已經選定的視覺風格，不要求採用玻璃效果。

兩者可以組合：先用 `fullstack-liquid-glass-design` 建立外觀，再用 `fullstack-ui-review` 檢查實際使用過程。設計技能是可選且獨立的方向，不依賴 Hallmark，也不會把這套外觀強加給另外八個技能。安裝全部九個技能，不代表每項任務都要呼叫全部技能。

### 只用一個，還是組合使用？

- 問題明確且範圍較小時，單獨使用對應技能。例如正文圖片操作出錯，通常先用 `fullstack-editor-reliability`。
- 功能跨越多個層面時，先用 `fullstack-workflow`，再加上相關技能。例如新增相簿可能需要視覺設計、內容同步和 UI 審查。
- 發布或維護時，只在你已授權的操作範圍內呼叫相關技能。設計或審查任務本身不會自動授權部署或刪除。

每個技能自帶所需參考資料，不強制安裝其他技能。這套指南提供可重複使用的工作方法，不保證 AI 產生的程式碼一定正確。Agent 仍需要合適的工具、專案存取權限和你的授權；重要修改仍然需要人工複核。

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

使用 fullstack-liquid-glass-design 改版我的攝影首頁。
再用 fullstack-ui-review 檢查手機版面、對比度和鍵盤操作。

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
