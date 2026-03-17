---
name: monitor-agents
description: Check status, logs, and VNC access for running cloud agents
user-invocable: false
---
# Monitor Agents

Check on running cloud agents.

## Steps
1. Call the AgentBox MCP `list` tool to see all active agents.
2. For a specific agent, call `status` with the agent ID.
3. Status values: `provisioning`, `onboarding`, `working`, `submitting`, `completed`, `failed`, `timed_out`.
4. If an agent is stuck, check its logs via the `logs` tool.
5. The VNC URL allows direct visual access to the agent's desktop.
