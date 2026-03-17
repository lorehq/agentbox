---
name: review-agent-work
description: Review a PR and demo artifacts created by a cloud agent
user-invocable: false
---
# Review Agent Work

When a cloud agent completes its task, review the output.

## Steps
1. Check agent status via MCP — confirm it completed (not timed out or failed).
2. Open the PR link. Watch the demo video.
3. Review the diff for code quality, correctness, and unintended changes.
4. Check if tests were run and passed.
5. Report findings to the operator with a recommendation: merge, revise, or reject.
