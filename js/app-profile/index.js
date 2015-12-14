import angualar from 'angular';

import '../app-core/index';

import 'angular-cookies';

//Controllers
//Profile
import ProfileSideController from './controllers/profile.side.controller';

import ProfileController from './controllers/profile.controller';

import ProfileEditController from './controllers/profile.edit.controller'

//Photo
import PhotosController from './controllers/photo.controller';

import PhotosAddController from './controllers/photos.add.controller';

//Friends
import FriendsController from './controllers/friends.controller';

import FriendsAddController from './controllers/friends.add.controller';


//Services
import ProfileService from './services/profile.service';


//Directives
import fileUpload from './directives/file.upload.directive';

import avatarUpload from './directives/avatar.upload.directive';

angular
  .module('app.profile', ['app.core', 'ngCookies'])
  //Profile
  .controller('ProfileController', ProfileController)
  .controller('ProfileEditController', ProfileEditController)

  .controller('ProfileSideController', ProfileSideController)

  //Photos
  .controller('PhotosController', PhotosController)
  .controller('PhotosAddController', PhotosAddController)
  //Friends
  .controller('FriendsController', FriendsController)
  .controller('FriendsAddController', FriendsAddController)
  
  //Services
  .service('ProfileService', ProfileService)

  //Directives
  .directive('fileUpload', fileUpload)
  .directive('avatarUpload', avatarUpload)

;