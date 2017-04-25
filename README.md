# vue-one

The One Project based on vue.js.

Thanks for [Api](https://github.com/jokermonn/-Api/blob/master/ONEv3.5.0~.md).

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run all tests
npm test
```

## Technology stack
* `vue` + `vuex` + `vue-router`  vue based project
* `iview` UI library
* `vue-lazyload` help us lazyload images
* `vuex-router-sync` mutations of router setting in store
* `vue-resource`
* `http-proxy-middleware` + `express` dev environment we use `webpack-dev-server` and `http-proxy-middleware`, and online we use `express` and `http-proxy-middleware`
* `axios` ajax library

## Directory
```
├── README.md
├── build  the configuration file from vue-cli
│   ├── build.js
│   ├── check-versions.js
│   ├── dev-client.js
│   ├── dev-server.js
│   ├── utils.js
│   ├── webpack.base.conf.js
│   ├── webpack.dev.conf.js
│   └── webpack.prod.conf.js
├── config  webpack config file from vue-cli
│   ├── dev.env.js
│   ├── index.js
│   └── prod.env.js
├── index.html
├── server  use express http-proxy-middleware to resolve cross domain problem
│   └── index.js
├── package.json
├── src
│   ├── App.vue
│   ├── main.js
│   ├── util.js
│   ├── currency.js
│   ├── assets/  images about this project
│   ├── components/
│   ├── router/
│   │   ├── index.js
│   │   └── Home/ we can access '/' to see the HomePage container.
│   ├── store
│   │   ├── index.js
│   │   ├── actions.js
│   │   ├── state.js
│   │   ├── mutations-types.js
│   │   └── mutations.js
├── test
└── static
```
## Support
Thanks for you support,being glad for your star, pr, follow and issue.
## LICENSE
[MIT](./LICENSE)