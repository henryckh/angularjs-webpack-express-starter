// import angularjs from node_modules
import angular from 'angular';

// import css from styles/app.css
import '../styles/app.css';


// controller using es6
class AppCtrl {
  constructor() {
    this.repo_name = 'angular-webpack-express-starter';
  }
}

var appView = function app() {
  return {
    templateUrl: 'app/app.html',
    controller: 'AppCtrl',
    controllerAs: 'app'
  }
};

var app = angular.module("app", []);
app.directive("mainView", appView);
app.controller('AppCtrl', AppCtrl);