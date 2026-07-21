# John Kilpatrick

[`kilpatrick.co.uk`](//kilpatrick.co.uk) is an [astro](//astro.build/) website for [John Kilpatrick](//github.com/rjkilpatrick).

## Installation

Install guide for astro [here](//docs.astro.build/en/install/auto/).

With `npm` installed:

```sh
git clone https://github.com/rjkilpatrick/kilpatrick.co.uk
npm install
npm run dev
```

## Scripts

| Script                 | Purpose                                              |
| ---------------------- | ---------------------------------------------------- |
| `npm run dev`          | Start the local dev server                           |
| `npm run build`        | Build the static site to `dist/`                     |
| `npm run preview`      | Preview the production build locally                 |
| `npm run typecheck`    | Run Astro's TypeScript checker                       |
| `npm run lint`         | Run ESLint and Stylelint                             |
| `npm run lint:fix`     | Run ESLint and Stylelint, applying automatic fixes   |
| `npm run format`       | Format the repo with Prettier                        |
| `npm run format:check` | Check formatting without writing changes             |
| `npm run check`        | Run `format:check`, `lint`, and `typecheck` together |

## Code quality

This repo uses [ESLint](//eslint.org/), [Stylelint](//stylelint.io/), and [Prettier](//prettier.io/) to keep the codebase consistent, and [prek](//github.com/j178/prek) (a fast, drop-in [pre-commit](//pre-commit.com/) replacement) to run those checks automatically before each commit.

Install prek once per machine (see the [prek README](//github.com/j178/prek#installation) for other install methods), then wire it up for this repo:

```sh
prek install
```

After that, `git commit` will run formatting, linting, and type-checking on the files you're changing. The same checks run in CI on every push and pull request.

## Licensing

The website source is licensed under the [MIT license](./LICENSE), and the content is licensed under [CC-BY 4.0](//creativecommons.org/licenses/by/4.0/).

This means for example if you want to redistribute a post, or any site related images they contain, you can share and adapt it for any purpose, as long as it's [attributed correctly](//wiki.creativecommons.org/wiki/Best_practices_for_attribution).
E.g. **TODO: PROVIDE EXAMPLE**.
If you want to use any of the site source, for example using the css in your own project, use the file with the license text added in a comment at the top.
