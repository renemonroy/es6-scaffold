# es6-scaffold
A scaffolding project for single page web applications where ES6 is used extensively. It relies in the use of io.js, Koa, Co, React and Webpack with babel-loader.

> Work in progress.

## Overview

![IO.js React Webpack Node.js](https://raw.githubusercontent.com/wiki/renemonroy/es6-scaffold/images/logos.png)

By the time, [io.js](https://iojs.org) has ES6 features available by default without the use of --harmony flag as Node. I'm using io.js until both get merged together.

[Koa](koajs.com) its a web framework that leverages generators to eliminate the callback craziness while [Co](https://github.com/tj/co) eases the generators flow control relying on Promises.

[React](https://facebook.github.io/react/) supports ES6 classes since its version 0.13.0. We can use almost all ES6 features using [Webpack](http://webpack.github.io/) compiling with [Babel](https://babeljs.io/) loader ([babel-loader](https://github.com/babel/babel-loader)).

Routing is handled with [Page](https://visionmedia.github.io/page.js/) instead of the common react-router. I'm planning to create a front router that satisfies my syntax needs in the comming weeks.

## Architecture

First of all, [npm](https://www.npmjs.com/) is used as a task runner with `npm run` scripts. It control processes with [PM2](https://github.com/Unitech/pm2) (A future update will show logs and different monitoring visualizers in different [tmux](http://tmux.sourceforge.net/) panes).

That is, if you want to start the project you would execute `npm start`. This will use `NODE_ENV=development` in both servers by default.

**Both servers?**

This scaffold runs 2 servers:
* A **regular web server** for all common things. (Port 8080)
* An **assets server** by using Webpack. (Port 8081)

> Webpack takes modules with dependencies and generates static assets representing those modules.

The regular server proxies requests for static assets `/assets` to the assets server, which is a node server that uses the Webpack api.

It renders views using [EJS](https://github.com/tj/ejs) template engines. The app asumes that all views will be loaded on demand so it previews the main layout and updates it when ready. The lazy loading of files is done by using [bundle-loader](https://github.com/webpack/bundle-loader).

> Isomorphic is not introduced until I do performance tests with React on backend (mainly because is synchronous). Also the fact to use 'bundle-loader' for lazy pages adds complexity for the backend rendering.

No CSS pre-processor is used extensively yet to open the idea of using inline styles ([react-style](https://github.com/js-next/react-style)) like some Facebook, Flipboard and other web apps do.

## Installation

You need io.js, node.js and PM2 installed first. Go to each project pages to know more about how to do it.

Now, just fork the project, clone the repo in a desired folder and in project's root run:

``` shell
  npm run set-up
```

This will install node modules on both servers: **assets-server** and **main-server**. Just change the package files in each server if you want the latest versions of each module.

You want to start the project by executing `npm start`, which will run the servers locally.
