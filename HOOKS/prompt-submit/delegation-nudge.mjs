#!/usr/bin/env node
// Nudge the operator when a task looks like a good candidate for cloud agent delegation
// This is a non-blocking nudge — it just prints a suggestion

import { readFileSync } from 'fs';

const input = JSON.parse(readFileSync('/dev/stdin', 'utf8'));
const prompt = input.prompt || '';
const lowerPrompt = prompt.toLowerCase();

// Keywords that suggest delegation would help
const delegationSignals = [
  'add.*feature',
  'implement.*page',
  'build.*component',
  'fix.*ui',
  'update.*layout',
  'refactor.*module',
  'dark.*mode',
  'responsive',
  'visual.*change',
  'screenshot',
  'demo',
];

const matches = delegationSignals.filter(pattern => new RegExp(pattern, 'i').test(prompt));

if (matches.length >= 2) {
  console.error('[AgentBox] This task might benefit from a cloud agent VM — visual verification, isolated environment, and demo video recording. Use the spawn-agent skill if you want to delegate.');
}

// Never block — this is just a suggestion
process.exit(0);
