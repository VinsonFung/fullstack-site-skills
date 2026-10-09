# Contributing

Changes should improve a concrete user journey or an evidenced failure. Keep one skill focused and independently installable; move conditional detail into a directly linked reference rather than adding generic advice to every entry point.

Before proposing a change:

- Describe the request it should handle and the observable behavior it improves.
- Keep names and descriptions discriminating so isolated work does not load the entire bundle.
- Preserve users' scope and existing authorization. Do not add universal approval prompts, tool grants, forced frameworks, providers or visual styles.
- Add tests for meaningful script behavior. For a changed skill, try a realistic request with minimal fixtures and report what the agent did.
- Keep the three README translations synchronized for capabilities, commands and caveats.
- Use fictitious examples. Never contribute credentials, user records, private paths, database exports or screenshots of private admin data.

Run from the package root:

```sh
node scripts/validate.mjs
node --test
```

The local validator intentionally checks this bundle's simple scalar frontmatter. For a changed format or more complex metadata, also use the relevant official format validator. The validation record should separate structural checks, installer tests, behavioral skill trials and actual client discovery tests.

Installation-directory changes need a supporting official documentation link and a mapping test. Keep temporary test roots isolated. A security-pattern scan can generate false positives; report rule/location only and review without exposing matched values.

Contributions are licensed under the package's MIT license. Third-party material requires its own clear permission and attribution; pointing to an official guide is preferable to copying one into a skill.
