// Pre-populate claude-settings in localStorage with defaults if not already set.
// This module must be imported before any other app code that reads this key.

const CLAUDE_SETTINGS_KEY = 'claude-settings';

if (localStorage.getItem(CLAUDE_SETTINGS_KEY) === null) {
  const defaults = {
    allowedTools: [
      'Bash(/home/coder/valence/.claude/skills/dev-stage/scripts/generate-env-file.sh:*)',
      'Bash(cat:*)',
      'Bash(cd:*)',
      'Bash(go:*)',
      'Bash(ls:*)',
      'Bash(make:*)',
      'Bash(mv:*)',
      'Bash(source:*)',
      'Bash(timeout:*)',
      'Bash(which:*)',
      'Edit',
      'ExitPlanMode',
      'Glob',
      'Grep',
      'MultiEdit',
      'Read',
      'Task',
      'TodoRead',
      'TodoWrite',
      'WebFetch',
      'WebSearch',
      'Write',
    ],
    disallowedTools: [],
    skipPermissions: false,
    projectSortOrder: 'name',
    lastUpdated: '2026-02-24T07:57:02.851Z',
  };

  localStorage.setItem(CLAUDE_SETTINGS_KEY, JSON.stringify(defaults));
}
