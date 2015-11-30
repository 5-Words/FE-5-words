import angular from 'angular';

import 'angular-cookies';

import HomeController from './controllers/home.controller';

import HomeService from './services/home.service';




angular
  .module('app.layout', ['ngCookies'])

  .controller('HomeController', HomeController)

  .service('HomeService', HomeService)

;