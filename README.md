# Answers

I understand that these questions may be more focused on a very basic project where you have to separate more functions or classes to control closures and that they do not generate side effects, the project that has generated has the implementation of a library with many more configurations, Then they are more controlled, they will also answer the questions in the current context, but if you need to go more depth on this topic I have no problem that we make a live coding to review these questions.

1. Where in the code is there a closure? Justify

As I will not declare variables or functions at the $ root level of the application and when using VUE 3 composition, the scopes of the component level are maintained at the component level, thus having unwanted global variables that generate side effects.

2. Could you point out any function side-effects? Are they expected? Can they be avoided?

The functions that are responsible for obtaining the information do not completely control the Response Structure that they can return and this can generate some SIDE-EFFECT, it can be tested by sending different parameters to obtain the errors and control them.
A cache instance is added to avoid inecense requests, I am pending to implement the promise cancel to cancel the previous or slope request if the component is disassembled or updated.

# Vue 3 + TypeScript + Vite

Using node v17.1.0 (npm v8.1.2)

### init development server

`yarn run dev`

### build proyect

`yarn run build`

This proyect use:

    Build Tool of Front-End offered a quick and efficient development experience thanks to its development server that provides instant compilation and a fast hot recharge.

    VUE 3: Progressive framework to build user interfaces that offers significant improvements in the performance and ergonomics of the API.

    Composition API: New way of defining the logic in Vue 3 that allows a modular and scalable organization of application logic.

    TypeScript: programming language that extends Javascript by adding a static type system to detect errors of type of compilation.

    Axios: HTTP customer based on promises to consume APIs from a front-end application.

    ESLINT: Code analysis tool to detect and prevent errors in the source code and guarantee the consistency and quality of the code in a developer equipment.

    Prettier: Code formatting tool to maintain a style consisting of the source code and automate the formatting of the code in a developer equipment.

    Husky: tool to configure git hooks (Hooks) that are automatically executed in certain events, as before making an ADS, to guarantee compliance with rules in a developer team.

    Relative imports: way of importing modules in the source code using a relative route instead of an absolute route to make the code more portable and easy to maintain.

    SCSS: CSS preprocessor that allows you to use variables, functions and mixers to generate CSS code and reduce the amount of repetitive code in an application and make the most maintainable CSS code.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Type Support For `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
   1. Run `Extensions: Show Built-in Extensions` from VSCode's command palette
   2. Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.
