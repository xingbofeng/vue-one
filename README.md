# vue-one

The One Project based on vue.js.

Thanks for [Api](https://github.com/jokermonn/-Api/blob/master/ONEv3.5.0~.md).

## Build Setup

``` bash
# install dependencies
yarn install

# serve with hot reload at localhost:8080
yarn run dev

# start the server at localhost:3001
yarn run serve

# stop the server
yarn run stop

# build for production with minification
yarn run build

# build for production and view the bundle analyzer report
yarn run build --report

# run unit tests
yarn run unit

# run all tests
yarn test
```

## Technology stack
* `vue` + `vuex` + `vue-router`  vue based project
* `iview` UI library
* `vue-lazyload` help us lazyload images
* `vuex-router-sync` mutations of router setting in store
* `vue-resource`
* `http-proxy-middleware` + `express` dev environment we use `webpack-dev-server` and `http-proxy-middleware`, and online we use `express` and `http-proxy-middleware`
* `axios` ajax library
* `yarn` package manager.
* `superagent` + `cheerio` write a spider to get the data.

## Directory
```
├── README.md
├── build  It is the configuration file from vue-cli.
│   ├── build.js
│   ├── check-versions.js
│   ├── dev-client.js
│   ├── dev-server.js
│   ├── utils.js
│   ├── webpack.base.conf.js
│   ├── webpack.dev.conf.js
│   └── webpack.prod.conf.js
├── config  It is webpack config file from vue-cli.
│   ├── dev.env.js
│   ├── index.js
│   └── prod.env.js
├── index.html
├── server  use express http-proxy-middleware to resolve cross domain problem.
│   └── index.js
├── package.json
├── src
│   ├── App.vue
│   ├── main.js
│   ├── util.js
│   ├── currency.js
│   ├── assets/  It is images and static about this project.
│   ├── components/
│   │   ├── Common/ public components
│   │   │     ├── TopHeader.vue
│   │   │     ├── Error.vue
│   │   │     ├── Loading.vue
│   │   │     └── ...
│   │   └── ... Other components
│   │    
│   ├── router/
│   │   ├── Home/ It is the entry of this project, matched the path '/'.
│   │   │     ├── index.js
│   │   │     └── Home.vue It is the container component of Home.
│   │   │
│   │   ├── One/ It is the page about images, matched the path '/one' and '/one/:oneId'.
│   │   │     ├── index.js
│   │   │     ├── One.vue It is the container component of One, which is the entry of images.
│   │   │     └── OneInfos.vue It is the details of one image.
│   │   │
│   │   ├── Essay/ It is the page about article, matched the path '/essay' and '/essay/:essayId'.
│   │   │     ├── index.js
│   │   │     ├── Essay.vue It is the container component of Essay, which is the entry of essaies.
│   │   │     └── Essayinfos.vue It is the details of article or essay.
│   │   │
│   │   ├── Music/ It is the page about music, matched the path '/music' and '/music/:musicId'.
│   │   │     ├── index.js
│   │   │     ├── Music.vue It is the container component of Music, which is the entry of musics.
│   │   │     └── MusicInfos.vue It is the details of one music.
│   │   │
│   │   ├── Movie/ It is the page about movie, matched the path '/movie' and '/movie/:movieId'.
│   │   │     ├── index.js
│   │   │     ├── Movie.vue It is the container component of Movie, which is the entry of movies.
│   │   │     └── MovieInfos.vue It is the details of one movie.
│   │   └── About/ It is some details about this project, matched the path '/about'.
│   │         ├── index.js
│   │         └── About.vue It is the container component of About.
│   │
│   ├── store
│   │   ├── index.js
│   │   ├── actions.js
│   │   ├── getters.js
│   │   ├── state.js
│   │   ├── mutations-types.js
│   │   └── mutations.js
├── test
└── static
```
## [What did I learnt in this project?](./LEARN.md)
## Support
Thanks for you support,being glad for your star, pr, follow and issue.
## LICENSE
[MIT](./LICENSE)