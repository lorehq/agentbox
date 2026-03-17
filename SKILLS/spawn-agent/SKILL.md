---
name: spawn-agent
description: Formulate a task and spawn a cloud agent VM to execute it
user-invocable: false
---
# Spawn Agent

Dispatch a task to a cloud agent VM.

## Steps
1. Formulate a clear task description with acceptance criteria.
2. Identify which bundles the VM agent needs (from the project's .lore/config.json + any extras).
3. Call the AgentBox MCP `spawn` tool with:
   - `repo`: the git clone URL
   - `branch`: the base branch to work from
   - `task`: the task description
   - `extra_bundles`: any additional bundles needed beyond what the project declares
4. Note the returned agent ID and VNC URL.
5. Report to the operator: "Spawned agent <id> for task: <description>. VNC: <url>"

## Bundle Provisioning
The orchestrator reads the project's `.lore/config.json` for declared bundles, installs them on the VM alongside `agentbox-worker`, and runs `lore generate` before starting the agent. Use `extra_bundles` for anything not already in the project config.
