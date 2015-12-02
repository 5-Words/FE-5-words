import angualar from 'angular';

import '../app-core/index';

import 'angular-cookies';

//Controllers
import DashSideController from './controllers/dash.side.controller';
//View Controllers
import GoldenController from './controllers/golden.controller';
import TravelController from './controllers/travel.controller';
import TechController from './controllers/tech.controller';
import SportsController from './controllers/sports.controller';
import FoodieController from './controllers/foodie.controller';
import BooksController from './controllers/books.controller';
import AddController from './controllers/add.controller';
import EditController from './controllers/edit.controller';




import RegisterController from './controllers/register.controller';


import WordService from './services/word.service';


angular
  .module('app.words', ['app.core', 'ngCookies'])

  .controller('GoldenController', GoldenController)
  .controller('TravelController', TravelController)
  .controller('TechController', TechController)
  .controller('SportsController', SportsController)
  .controller('FoodieController', FoodieController)
  .controller('BooksController', BooksController)
  .controller('AddController', AddController)
  .controller('EditController', EditController)




  .controller('RegisterController', RegisterController)
  .controller('DashSideController', DashSideController)

  .service('WordService', WordService)


;