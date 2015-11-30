let HomeController = function(HomeService, $cookies, $state) {
  
  let vm = this;

  vm.register      = register;
  vm.login         = login;

  function register (user) {
    // console.log(user);
    HomeService.register(user).then( (res) => {
      $state.go('root.register');
    })
  }

  function login (user) {
    // console.log(user);
    HomeService.login(user).then( (res) => {
      console.log(res);
      $cookies.put('authToken', res.data.access_token);
      $state.go('root.dashboard')
    })
  }

};

HomeController.$inject = ['HomeService', '$cookies', '$state'];

export default HomeController;  