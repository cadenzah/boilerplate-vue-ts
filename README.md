# Vue.js with Typescript Project Boilerplate

## Index
- [Library used](#library-used)
- [Directory Structure](#directory-structure)
- [Preparation](#preparation)
- [How to use](#how-to-use)
- [Update Logs](#update-logs)
- [Appendix](#appendix)

<a name="library-used"></a>
## Library used
- Vue.js v2.6
- Vuex
- Vue Router
- Sass
- Jest /w vue-test-utils
- Webpack & Babel
- Storybook v6
- TypeScript

<a name="directory-structure"></a>
## Directory Structure

```md
/
|- .storybook     : Configuration files for Storybook
|- configs/       : Configuration files for compile, build
  |- env/         : Environment variables (User-defined `.env` file goes here)
|- src/
  |- components/  : Re-usable Vue component codes
  |- directives/  : Custom directives for elements
  |- mixins/      : Re-usable Vue logics
  |- pages/       : Page codes which composes a single view
  |- router/      : Vue Router logics
  |- store/       : Vuex store logics
  |- index.html   : Base HTML file
  |- main.js      : Vue entry code
  |- App.vue      : Root Vue component
|- tests/         : Custom unit tests
```

<a name="preparation"></a>
## Preparation

1. Run npm install to provide required npm modules
2. Go to `/config/env` and make .env file for your project

### | `.env`
You can inject your custom environment variables in your project.

The `.env` file should be located in `/config/env` directory.

The project will inject `{ __NOT_USED__: undefined }` environment variable as `process.env` object if you don't generate `.env` file, which means `.env` file is not a mandatory part of your project.

> **CAUTION:** You can access your predefined `.env`'s values **only by accessing `process.env`, only in build-time**. `process.env` is not available in run-time.

<a name="how-to-use"></a>
## How to use

### | How to build
1. Run `npm run build`
2. Use a build output from `/build` directory

### | How to run webpack-dev-server
1. Run `npm run dev`
2. Visit `http://localhost:3000` (Automatically opens)

### | How to run test
1. Run `npm run test:watch`
2. If you need code coverage report, run `npm run test:coverage`

<a name="update-logs"></a>
## Update Logs

### | v1.0.0
- Initial simple ready-to-use version

### | v1.0.1
- added Sass, Storybook support

<a name="appendix"></a>
## Appendix
TBD
