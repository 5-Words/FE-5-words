let HomeController = function(HomeService, $cookies, $state) {
  
  let vm = this;

  vm.register      = register;
  vm.login         = login;
  vm.logout        = logout;

  function register (user) {
   
    HomeService.register(user).then( (res) => {
  
      
      $cookies.put('authToken', res.data.access_token);
      
      $state.go('root.register');
    })
  }

  function login (user) {
    HomeService.login(user).then( (res) => {
      console.log(res);
      let auth = $cookies.put('authToken', res.data.access_token);
      let userId = $cookies.put('userId', res.data.id);
      $state.go('root.golden');
    })
  }

  function logout () {
    $cookies.remove('authToken');
    $cookies.remove('userId');

    $state.go('root.home');
  }

};

HomeController.$inject = ['HomeService', '$cookies', '$state'];

export default HomeController;  