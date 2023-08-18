Linter configuration for my work.

- @gct256/eslint-config based on:
  - eslint:recommended
  - import:recommended
- @gct256/eslint-config/react based on:
  - eslint:recommended
  - import:recommended
  - react/recommended
  - react-hooks/recommended
  - jsx-a11y/recommended
  - react-refresh

## Install

```sh
pnpm i -D \
    git+https://github.com/gct256/eslint-config.git#v2.0.0 \
    @typescript-eslint/eslint-plugin \
    @typescript-eslint/parser \
    eslint \
    eslint-config-prettier \
    eslint-plugin-import \
    eslint-plugin-react \
    eslint-plugin-react-hooks \
    eslint-plugin-jsx-a11y \
    eslint-plugin-react-refresh \
    prettier \
    typescript
```

## Usage

```
# .eslintrc.yml
extends:
  - '@gct256/eslint-config'
  - '@gct256/eslint-config/react'
```
