# Turborepo starter with npm

This is an official starter Turborepo.

## What's inside?

This Turborepo uses [npm](https://www.npmjs.com/) as a packages manager. It includes the following packages/apps:

### Apps and Packages

- `docs`: a [Next.js](https://nextjs.org/) app
- `web`: another [Next.js](https://nextjs.org/) app
- `eleventy-app`: an [Eleventy](https://www.11ty.dev/) site
- `static-demo`: a static site
- `ui`: a stub React component library shared by both `web` and `docs` applications
- `eslint-config-custom`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`)
- `tsconfig`: `tsconfig.json`s used throughout the monorepo

Each package/app is [TypeScript](https://www.typescriptlang.org/).

### Utilities

This Turborepo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting

## Setup

```sh
cd turborepo-npm-demo
npm install
```

### Build

To build all apps and packages, run the following command:

```
npm run build
```

To build only a specific app(Eg:- 'web'), run the following command:

```
npm run build -- --filter web
```

Build directory path for the above would be:
```
./apps/web/.next
```

### Develop

To develop all apps and packages, run the following command:

```
npm run dev
```


### Edge Functions

We have hosted an edge function by adding the `functions/[proxy].edge.js file at the root. To understand different use cases of edge function visit [Launch Edge Function](https://www.contentstack.com/docs/developers/launch/edge-functions)