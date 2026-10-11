# Use the skills with DeepSeek

DeepSeek Harness is an Agent that can load local skills. The DeepSeek model API and the ordinary website chat are different products: copying a folder cannot install executable tools into those interfaces. You can also run these skills in another compatible Agent using DeepSeek as its model provider.

## Native Agent: DeepSeek Harness

Install and configure the Agent using [DeepSeek's official repository](https://github.com/deepseek-ai/deepseek-harness). Then, from this skills package directory:

```sh
node scripts/install.mjs --agent deepseek-harness --scope user
node scripts/install.mjs --agent deepseek-harness --scope user --apply
```

The default native directories are `.dsh/skills/` in a project and `~/.dsh/skills/` for a user. Start a new session if necessary, confirm that `fullstack-frontend-development` is available, then invoke `/fullstack-frontend-development` or ask the Agent to use it by name. Choose `fullstack-backend-development` for administration and service tasks, or `fullstack-design-style` for the optional visual direction.

For a customized Harness, check that the skill registry, local filesystem provider and model-facing skill tool are enabled. The installer only copies folders; it does not enable plugins or modify Agent configuration. If `DSH_HOME` or the provider's `dshHome` changes your skills root, manually copy the complete skill directories into that configured root instead of using the default user mapping. Official references: [filesystem roots](https://github.com/deepseek-ai/deepseek-harness/blob/master/packages/skill/skill-filesystem/README.md) and [invocation tool](https://github.com/deepseek-ai/deepseek-harness/blob/master/packages/skill/tool-skill/README.md).

## Alternative host: OpenCode with a DeepSeek model

1. Install a supported OpenCode version using its official guide.
2. In OpenCode, use `/connect` to choose DeepSeek and enter your own credential in that client's private credential interface. Use `/models` to select an available model.
3. Install this package into the **host's** directory:

```sh
node scripts/install.mjs --agent opencode --scope user
node scripts/install.mjs --agent opencode --scope user --apply
```

4. Start or reload the session, confirm discovery, and request the relevant current entry, such as `fullstack-frontend-development`, by name.

This model setup is documented by [DeepSeek](https://api-docs.deepseek.com/quick_start/agent_integrations/opencode/) and [OpenCode](https://opencode.ai/v2/docs/providers). DeepSeek also publishes an optional [Codex integration guide](https://api-docs.deepseek.com/quick_start/agent_integrations/codex/); skill installation still targets `codex`, not a model-specific directory. Product/version support should be checked before changing a working client setup.

Installing these skills makes no model request and needs no API key. Never add provider keys, private client settings or chat history to this repository. Model requests may transmit project information to the chosen provider; review the consuming project's rules and provider terms first. The bundle does not configure models, track usage, control billing or guarantee a model's tool-following performance.
