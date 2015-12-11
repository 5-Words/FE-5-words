import angualar from 'angular';

import '../app-core/index';

import 'angular-cookies';

import ProfileSideController from './controllers/profile.side.controller';

import ProfileController from './controllers/profile.controller';

import PhotosController from './controllers/photo.controller';
import FriendsController from './controllers/friends.controller';
import PhotosAddController from './controllers/photos.add.controller';

import ProfileService from './services/profile.service';

import fileUpload from './directives/file.upload.directive';

angular
  .module('app.profile', ['app.core', 'ngCookies'])
  .controller('ProfileController', ProfileController)
  .controller('ProfileSideController', ProfileSideController)
  .controller('PhotosController', PhotosController)
  .controller('FriendsController', FriendsController)
  .controller('PhotosAddController', PhotosAddController)

  .service('ProfileService', ProfileService)

  .directive('fileUpload', fileUpload)

;