import angualar from 'angular';

import '../app-core/index';

import DashController from './controllers/dash.controller';

import RegisterController from './controllers/register.controller';


import WordService from './services/word.service';


angular
  .module('app.words', ['app.core'])

  .controller('DashController', DashController)
  .controller('RegisterController', RegisterController)

  .service('WordService', WordService)


;