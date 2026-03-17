#!/usr/bin/env node
// TODO: MCP server exposing tools: spawn, status, list, logs, destroy
// Initially wraps SSH commands to the test VM.
// Later becomes HTTP client to the standalone orchestrator service.
// Tools:
//   spawn({ repo, branch, task, extra_bundles }) → { agent_id, vnc_url }
//   status({ agent_id }) → { state, progress, pr_url }
//   list() → [{ agent_id, state, task }]
//   logs({ agent_id, lines }) → string
//   destroy({ agent_id }) → { success }
console.error("agentbox-api MCP server — not yet implemented");
process.exit(1);
