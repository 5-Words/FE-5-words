let config = function($urlRouterProvider, $stateProvider) {
  
  $urlRouterProvider.otherwise('/')

  $stateProvider
    .state('root', {
      abstract: true,
      controller: 'HomeController as vm',
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
          controller: 'TravelController as vm',
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
    .state('root.sports', {
      url: '/sports',
      views: {
        sidebar: {
          controller: 'DashSideController as vm',
          templateUrl: 'templates/app-words/dash.side.tpl.html'
        },
        content: {
          controller: 'SportsController as vm',
          templateUrl: 'templates/app-words/sports.tpl.html'
        },
        footer: {
          template: '<small>I am a footer</small>'
        }
      }  
    })
    .state('root.foodie', {
      url: '/foodie',
      views: {
        sidebar: {
          controller: 'DashSideController as vm',
          templateUrl: 'templates/app-words/dash.side.tpl.html'
        },
        content: {
          controller: 'FoodieController as vm',
          templateUrl: 'templates/app-words/foodie.tpl.html'
        },
        footer: {
          template: '<small>I am a footer</small>'
        }
      }  
    })
      .state('root.books', {
      url: '/books',
      views: {
        sidebar: {
          controller: 'DashSideController as vm',
          templateUrl: 'templates/app-words/dash.side.tpl.html'
        },
        content: {
          controller: 'BooksController as vm',
          templateUrl: 'templates/app-words/books.tpl.html'
        },
        footer: {
          template: '<small>I am a footer</small>'
        }
      }  
    })
    .state('root.music', {
      url: '/music',
      views: {
        sidebar: {
          controller: 'DashSideController as vm',
          templateUrl: 'templates/app-words/dash.side.tpl.html'
        },
        content: {
          controller: 'MusicController as vm',
          templateUrl: 'templates/app-words/music.tpl.html'
        },
        footer: {
          template: '<small>I am a footer</small>'
        }
      }  
    })  
    .state('root.film', {
      url: '/film',
      views: {
        sidebar: {
          controller: 'DashSideController as vm',
          templateUrl: 'templates/app-words/dash.side.tpl.html'
        },
        content: {
          controller: 'FilmController as vm',
          templateUrl: 'templates/app-words/film.tpl.html'
        },
        footer: {
          template: '<small>I am a footer</small>'
        }
      }  
    }) 
    .state('root.pets', {
      url: '/pets',
      views: {
        sidebar: {
          controller: 'DashSideController as vm',
          templateUrl: 'templates/app-words/dash.side.tpl.html'
        },
        content: {
          controller: 'PetsController as vm',
          templateUrl: 'templates/app-words/pets.tpl.html'
        },
        footer: {
          template: '<small>I am a footer</small>'
        }
      }  
    }) 
    .state('root.cars', {
      url: '/cars',
      views: {
        sidebar: {
          controller: 'DashSideController as vm',
          templateUrl: 'templates/app-words/dash.side.tpl.html'
        },
        content: {
          controller: 'CarsController as vm',
          templateUrl: 'templates/app-words/cars.tpl.html'
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
    .state('root.edit', {
      url: '/edit/:category',
      controller: 'EditController as vm',
      templateUrl: 'templates/app-words/edit.tpl.html'
    })
    .state('root.add', {
      url: '/add/:category',
      controller: 'AddController as vm',
      templateUrl: 'templates/app-words/add.tpl.html'
    })

     .state('root.profile', {
      url: '/profile',
      views: {
        sidebar: {
          controller: 'ProfileSideController as vm',
          templateUrl: 'templates/app-profile/profile.side.tpl.html'
        },
        content: {
          controller: 'ProfileController as vm',
          templateUrl: 'templates/app-profile/profile.main.tpl.html'
        },
        footer: {
          template: '<small>I am a footer</small>'
        }
      }  
    })

     .state('root.photos', {
      url: '/photos',
      views: {
        sidebar: {
          controller: 'ProfileSideController as vm',
          templateUrl: 'templates/app-profile/profile.side.tpl.html'
        },
        content: {
          controller: 'PhotosController as vm',
          templateUrl: 'templates/app-profile/photos.tpl.html'
        },
        footer: {
          template: '<small>I am a footer</small>'
        }
      } 
    }) 

    .state('root.photosAdd', {
      url: '/photos/add',
      views: {
        sidebar: {
          controller: 'ProfileSideController as vm',
          templateUrl: 'templates/app-profile/profile.side.tpl.html'
        },
        content: {
          controller: 'PhotosAddController as vm',
          templateUrl: 'templates/app-profile/photos.add.tpl.html'
        },
        footer: {
          template: '<small>I am a footer</small>'
        }
      } 
    })  

      .state('root.friends', {
      url: '/friends',
      views: {
        sidebar: {
          controller: 'ProfileSideController as vm',
          templateUrl: 'templates/app-profile/profile.side.tpl.html'
        },
        content: {
          controller: 'FriendsController as vm',
          templateUrl: 'templates/app-profile/friends.tpl.html'
        },
        footer: {
          template: '<small>I am a footer</small>'
        }
      } 
    })
    
  

};

config.$inject = ['$urlRouterProvider', '$stateProvider'];

export default config;