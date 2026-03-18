---
name: monitor-agents
description: Poll VM agent status via SSH, handle questions, escalate to operator
user-invocable: false
---
# Monitor Agents

Poll the VM agent's comms file via SSH to track progress and handle questions.

## Polling Loop

Every 30 seconds:
```bash
ssh agent@<vm-ip> cat /tmp/agentbox-comms.json
```

## Status Handling

| Status | Action |
|--------|--------|
| `working` | Log progress, continue polling |
| `question` | Read the question, decide: answer directly or escalate to operator |
| `completed` | Stop polling, fetch PR URL, proceed to review |
| `failed` | Stop polling, report failure details to operator |

## Answering Questions

When status is "question":
1. Read the `question` field — understand what the VM agent needs.
2. If you can answer: write the answer via SSH.
3. If you need the operator: present the question to the operator and wait for input.
4. Write the answer back:

```bash
ssh agent@<vm-ip> 'python3 -c "
import json
with open(\"/tmp/agentbox-comms.json\") as f: d = json.load(f)
d[\"answer\"] = \"YOUR_ANSWER_HERE\"
d[\"answered_at\"] = \"ISO_TIMESTAMP\"
with open(\"/tmp/agentbox-comms.json\", \"w\") as f: json.dump(d, f)
"'
```

## Progress Reporting

Periodically report to the operator:
- Current phase (ONBOARD/IMPLEMENT/VERIFY/RECORD/SUBMIT)
- Iteration count
- Error count
- Last log entry
