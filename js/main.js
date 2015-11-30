import angular from 'angular';

import './app-core/index';
import './app-layout/index';
import './app-words/index';




angular
  .module('app', ['app.core', 'app.layout', 'app.words'])

;
