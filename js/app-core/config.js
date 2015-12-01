let config = function($urlRouterProvider, $stateProvider) {
  
  $urlRouterProvider.otherwise('/')

  $stateProvider
    .state('root', {
      abstract: true,
      templateUrl: 'templates/app-layout/layout.tpl.html'
    })
    .state('root.home', {
      url: '/',
      controller: 'HomeController as vm',
      templateUrl: 'templates/app-layout/home.tpl.html'
    })
    .state('root.golden', {
      url: '/golden',
      views: {
        sidebar: {
          template: '<p>I am a sidebar</p>'
        },
        content: {
          template: '<p>I am a content</p>'
        },
        footer: {
          template: '<small>I am a footer</small>'
        }
      }
      
    })
    .state('root.register', {
      url: '/register',
      controller: 'RegisterController as vm',
      templateUrl: 'templates/app-words/register.tpl.html'
    })
  

};

config.$inject = ['$urlRouterProvider', '$stateProvider'];

export default config;