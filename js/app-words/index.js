import angualar from 'angular';

import '../app-core/index';

import 'angular-cookies';

import DashSideController from './controllers/dash.side.controller';
import GoldenController from './controllers/golden.controller';

import RegisterController from './controllers/register.controller';


import WordService from './services/word.service';


angular
  .module('app.words', ['app.core', 'ngCookies'])

  .controller('GoldenController', GoldenController)
  .controller('RegisterController', RegisterController)
  .controller('DashSideController', DashSideController)

  .service('WordService', WordService)


;