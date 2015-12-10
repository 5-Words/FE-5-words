import angular from 'angular';
import _ from 'underscore';


import './app-core/index';
import './app-layout/index';
import './app-words/index';
import './app-profile/index';




angular
  .module('app', ['app.core', 'app.layout', 'app.words', 'app.profile'])

;
