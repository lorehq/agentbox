---
name: comms-polling
description: SSH-based polling protocol for reading VM agent status and writing answers
user-invocable: false
---
# Comms Polling

Poll the VM agent's communication file via SSH.

## Protocol

The comms file lives at `/tmp/agentbox-comms.json` on the VM.

### Read status
```bash
ssh agent@<vm-ip> cat /tmp/agentbox-comms.json
```

### Write answer to a question
```bash
ssh agent@<vm-ip> 'python3 -c "
import json, datetime
with open(\"/tmp/agentbox-comms.json\") as f: d = json.load(f)
d[\"answer\"] = \"<answer-text>\"
d[\"answered_at\"] = datetime.datetime.utcnow().isoformat() + \"Z\"
with open(\"/tmp/agentbox-comms.json\", \"w\") as f: json.dump(d, f, indent=2)
"'
```

### Destroy VM when done
After reviewing the PR, tear down the VM:
```bash
ssh root@<pve-node> qm destroy <vmid>
```

## Polling Interval
- Default: 30 seconds
- When status is "question": poll answer confirmation every 10 seconds
- When status is "completed" or "failed": stop polling
