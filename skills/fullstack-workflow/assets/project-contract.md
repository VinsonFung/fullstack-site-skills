# Project contract

Replace the bracketed fields with facts from the target project. Keep only sections useful to the requested change.

- Outcome: [What the user should be able to complete.]
- Scope and existing authorization: [Local, staging, public release, migration or review.]
- Entry points and run commands: [Commands confirmed in this repository.]
- Existing work to preserve: [Relevant dirty files and prior decisions.]

| Data | Canonical owner | Read copies | Who may change it? | When public? |
| --- | --- | --- | --- | --- |
| [Record class] | [Repository, database or another declared owner] | [Cache/index/none] | [Role] | [Explicit publication condition] |

| Consumer | Input version | Update trigger | Failure behavior |
| --- | --- | --- | --- |
| [Frontend/admin/search/media/AI] | [Stable revision or generation] | [Trigger] | [Keep last good state or show unverified] |

- Acceptance journeys: [Observable actions and expected outcomes.]
- Relevant recovery checks: [Failure, conflict, retry, interruption or rollback.]
- Unresolved material decisions: [Only decisions that affect the outcome.]
- Completion evidence: [Implemented, verified, deployed and public checks separately.]
