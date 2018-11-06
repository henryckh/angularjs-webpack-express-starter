# angularjs-webpack-express-starter

`This repo is under maintenance`

A Starter for AngularJS using Webpack, Express and ES6

This repo only support AngularJS (angular 1.x)  and Webpack 2.x

* Simple and clean
* Light webpack configuration
* ES6 support with babel
* Express server 
* Easy to adopt

## Installation

```bash 
# clone repo
$ git clone https://github.com/henryckh/angularjs-webpack-express-starter.git my-app
$ cd my-app

# install dependencies
$ npm install

# start server
$ npm start
```

Open the website [http://localhost:3000](http://localhost:3000) in your browser

## How to use 
Use the following command to generate new bundle.js 
```bash
$ webpack
```
All style from **app.css** and **agularjs** will put all into **bundle.js**

## Development 
You could use 'nodemon server.js' to listen on file change,
```bash
$ nodemon server.js
```
followed by 'webpack for file change.
```bash
$ webapck
```
Support for webpack-dev-server in future if needed

# Error handle 
If your Node.js version is too old, try to install [node n](https://github.com/tj/n)
 
# License 
[MIT](/LICENSE)
