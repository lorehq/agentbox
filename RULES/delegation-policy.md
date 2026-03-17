---
name: delegation-policy
description: When to delegate tasks to cloud agents vs handle locally
---
# Delegation Policy

## Delegate When
- The task involves UI changes that should be visually verified.
- Multiple independent tasks can run in parallel.
- The task is well-defined with clear acceptance criteria.
- The codebase has a working dev server or build system.

## Handle Locally When
- The task is a quick one-line fix.
- You need interactive back-and-forth with the operator.
- The change is to infrastructure, CI/CD, or deployment config.
- The codebase has no automated build or dev server.

## Always Ask Before Delegating
- Tasks touching security-sensitive code.
- Tasks requiring access to external services or APIs.
- Tasks with ambiguous requirements — clarify first, then delegate.
