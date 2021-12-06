Linter configuration for my work.

- Based on eslint-config-airbnb.

## Install

```sh
yarn add -D \
    git+https://github.com/gct256/eslint-config.git \
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
```
