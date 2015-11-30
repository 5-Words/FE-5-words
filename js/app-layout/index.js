import angular from 'angular';

import HomeController from './controllers/home.controller';

import HomeService from './services/home.service';


angular
  .module('app.layout', [])

  .controller('HomeController', HomeController)

  .service('HomeService', HomeService)

;