---
name: cost-awareness
description: Token and compute budget limits for cloud agents
---
# Cost Awareness

Cloud agents consume significant resources:
- Each VM uses ~2GB RAM + 2 vCPUs.
- Computer-use API calls are token-intensive (screenshots are large).
- A typical task may use 50-200k tokens.

## Limits
- Maximum 3 concurrent agent VMs (default, operator can override).
- Warn the operator if a single task exceeds 100k tokens.
- Prefer Sonnet for straightforward tasks, reserve Opus for complex ones.
- Tear down VMs promptly after task completion — do not leave them running.
