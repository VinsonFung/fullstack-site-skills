# Provenance and reference policy

This package distills a personal site's full-stack development experience into original, reusable instructions and locally written helper code. It does not include the site's application code, photographs, content database, domain configuration, private account configuration, credentials or private operational records. The public repository URL and copyright nickname are intentionally included for distribution and attribution.

## Format and packaging references

- [Agent Skills specification](https://agentskills.io/specification): frontmatter, self-contained folders and progressive disclosure.
- [Agent Skills creation guide](https://agentskills.io/skill-creation): discovery and activation model.
- [Anthropic's public skill repository](https://github.com/anthropics/skills): studied its self-contained `skills/` organization and product-specific README structure.
- [Vercel's Skills CLI](https://github.com/vercel-labs/skills): studied local/repository discovery, installation scope and agent selection. It remains optional external tooling, not a bundled dependency.

Those repositories were consulted for structure and interoperability. Their skill bodies, scripts and artwork were not copied. Their licenses do not automatically license all materials in their repositories alike; this package's MIT license covers the original files here.

## Official compatibility sources

Client-specific documentation and paths are recorded in [COMPATIBILITY.md](COMPATIBILITY.md), checked on 2026-10-09, with WorkBuddy naming and compatibility checked again on 2026-10-10. Future client changes should be confirmed against those official sources before changing the installer.

## Optional architecture and security follow-up

- [Cloudflare D1](https://developers.cloudflare.com/d1/) and [R2](https://developers.cloudflare.com/r2/): possible database and object-storage adapters, not mandatory hosting choices.
- [Cloudflare Access authorization](https://developers.cloudflare.com/cloudflare-one/access-controls/applications/http-apps/authorization-cookie/): provider-specific identity guidance when a project uses that gateway.
- [OWASP XSS prevention](https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html), [file uploads](https://cheatsheetseries.owasp.org/cheatsheets/File_Upload_Cheat_Sheet.html), and [SSRF prevention](https://cheatsheetseries.owasp.org/cheatsheets/Server_Side_Request_Forgery_Prevention_Cheat_Sheet.html): authoritative follow-up for corresponding trust boundaries.

## Portable versus project-specific decisions

Portable lessons include immutable content generations, expected-version checks, unknown-outcome recovery, reference-protected media, scoped undo and bounded AI accounting. Glass materials, animated carousels, navigation names, fixed quotas, image formats, providers and frontend/backend directory choices remain decisions for the consuming project.

The skills preserve the user's actual authority and chosen architecture. They are practical guidance with stated validation limits, not a certification, framework distribution or guarantee of defect-free implementation.
