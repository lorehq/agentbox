---
name: spawn-agent
description: Spawn a cloud agent VM from the agentbox-worker template with task, repo, and bundle configuration
user-invocable: false
---
# Spawn Agent

Dispatch a task to a cloud agent VM.

## Steps
1. Formulate a clear task description with acceptance criteria.
2. Identify which bundles the VM agent needs (from the project's .lore/config.json + any extras).
3. Clone VM from template 903 (agentbox-worker-full) via Proxmox API or SSH.
4. Configure cloud-init: set hostname, inject SSH keys.
5. Start the VM, wait for DHCP IP assignment.
6. SSH into the VM and:
   - Clone the target repo
   - Run `lore init` and `lore bundle enable agentbox-worker`
   - Install and enable any project-specific bundles
   - Run `lore generate` to project config
   - Initialize the comms file with the task description
   - Start the coding CLI (claude, opencode, etc.) with the task prompt
7. Note the VM IP and start polling.

## Bundle Provisioning
The VM needs the `agentbox-worker` bundle plus any project-specific bundles. Read the project's `.lore/config.json` for declared bundles. Use `extra_bundles` for anything not in the project config.

## Cloud-Init Env Vars
Inject these via cloud-init or SSH:
- `ANTHROPIC_API_KEY` or `OPENAI_API_KEY` — LLM API key (from vault, never hardcoded)
- `PVE_API_URL` — Proxmox API endpoint
- `PVE_API_TOKEN` — Proxmox API token for self-snapshot
- `PVE_VMID` — The VM's own ID (so it can snapshot itself)
- `PVE_NODE` — Proxmox node name
