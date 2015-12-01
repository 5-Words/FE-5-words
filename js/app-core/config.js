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
          controller: 'DashSideController as vm',
          templateUrl: 'templates/app-words/dash.side.tpl.html'
        },
        content: {
          controller: 'GoldenController as vm',
          templateUrl: 'templates/app-words/golden.tpl.html'
        },
        footer: {
          template: '<small>I am a footer</small>'
        }
      }
    }) 
    .state('root.travel', {
      url: '/travel',
      views: {
        sidebar: {
          controller: 'DashSideController as vm',
          templateUrl: 'templates/app-words/dash.side.tpl.html'
        },
        content: {
          controller: 'GoldenController as vm',
          templateUrl: 'templates/app-words/travel.tpl.html'
        },
        footer: {
          template: '<small>I am a footer</small>'
        }
      }
    })
    .state('root.tech', {
      url: '/tech',
      views: {
        sidebar: {
          controller: 'DashSideController as vm',
          templateUrl: 'templates/app-words/dash.side.tpl.html'
        },
        content: {
          controller: 'TechController as vm',
          templateUrl: 'templates/app-words/tech.tpl.html'
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