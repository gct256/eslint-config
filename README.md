Linter configuration for my work.

- @gct256/eslint-config based on:
  - eslint-config-airbnb-base
- @gct256/eslint-config/react based on:
  - eslint-config-airbnb
- @gct256/eslint-config/alternate based on:
  - eslint:recommended
  - import:recommended |
- @gct256/eslint-config/alternate-react based on:
  - eslint:recommended
  - import:recommended
  - react/recommended
  - react-hooks/recommended
  - jsx-a11y/recommended

## Install

```sh
pnpm i -D \
    git+https://github.com/gct256/eslint-config.git#v1.1.4 \
    @typescript-eslint/eslint-plugin \
    @typescript-eslint/parser \
    eslint \
    eslint-config-airbnb \
    eslint-config-prettier \
    eslint-plugin-import \
    eslint-plugin-react \
    eslint-plugin-react-hooks \
    eslint-plugin-jsx-a11y \
    prettier \
    typescript
```

## Usage

```
# .eslintrc.yml
extends:
  - '@gct256/eslint-config'
  - '@gct256/eslint-config/react'
  - '@gct256/eslint-config/alternate'
  - '@gct256/eslint-config/alternate-react'
```
