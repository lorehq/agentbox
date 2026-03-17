You have access to cloud agent VMs via the AgentBox MCP tools.

## When to Delegate
- UI changes that need visual verification
- Multi-step features that benefit from end-to-end testing
- Parallelizable work (multiple independent features)
- Tasks where video proof of functionality is valuable

## How to Delegate
1. Use the AgentBox MCP tools to spawn a worker VM.
2. Provide: repo URL, branch, task description, acceptance criteria.
3. Monitor progress via the status endpoint.
4. Review the PR and demo video when the agent reports completion.

## Constraints
- Never run more than 3 concurrent agents without operator approval.
- Always review agent PRs before merging — never auto-merge.
- Agent VMs are ephemeral — do not rely on state between tasks.
