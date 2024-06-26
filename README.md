# Issue with `useContextProvider` in monorepo setup.

### Describe the bug

Hi everyone!

I have a monorepo setup where i'm importing some Qwik components. All of them work as expected except for two, which interferes with the rest of the logic of the component they are called.

When I import my component from `@ooakt/ui/show-more` inside a component that has some state, the show-more component works but the rest of the state/logic doesn't.

I tracked the error down to the `useContextProvider` in the show-more component. If I remove that line, the rest of the component where the show more is used works as expected.

### Reproduction

- https://stackblitz.com/~/github.com/fprl/monorepo-reproduction
- https://github.com/fprl/monorepo-reproduction

### Steps to reproduce

1. cd apps/app 
2. npm run build
3. npm run serve
4. read instructions in the page.

PS: Don't test in dev mode, it works there!

### System Info

```shell
System:
    OS: macOS 14.5
    CPU: (8) arm64 Apple M1
    Memory: 1.65 GB / 16.00 GB
    Shell: 5.9 - /bin/zsh
  Binaries:
    Node: 22.0.0 - ~/.nvm/versions/node/v22.0.0/bin/node
    Yarn: 3.6.3 - /usr/local/bin/yarn
    npm: 10.5.1 - ~/.nvm/versions/node/v22.0.0/bin/npm
    pnpm: 8.12.1 - /usr/local/bin/pnpm
  Browsers:
    Chrome: 125.0.6422.142
    Safari: 17.5
```