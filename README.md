# Vinxi Vanilla-JS Skeleton

- [Vinxi](https://vinxi.vercel.app)
- [Tailwind](https://tailwindcss.com)
- [uhtml](https://github.com/WebReflection/uhtml)

### VS Code

##### Plugin

- Prettier - Code formatter
- Tailwind CSS Intellisense
- lit-html

##### Setting (JSON)

```json
"tailwindCSS.experimental.classRegex":
    [["cn\\(([^)]*)\\)", "[\"'`]([^\"'`]*?)[\"'`]"]]
```

## Development

<!-- Copy `.env` file from `/deploy/overlays/dev` to the `root project` -->

Install dependencies:

```sh
npm install
```

Run project:

```sh
npm run dev
```

This starts your app in development mode, rebuilding assets on file changes.

## Deployment

First, build your app for production:

```sh
npm run build
```

Check `.output` folder to see build result
Then run the app in production mode:

```sh
npm start
#or
node .output/server/index.mjs
```

Now you'll need to pick a host to deploy it to.
