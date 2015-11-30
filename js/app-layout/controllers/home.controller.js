let HomeController = function(HomeService) {
  
  let vm = this;

  vm.register      = register;
  vm.login        = login;

  function register (user) {
    // console.log(user);
    HomeService.register(user).then( (res) => {
      console.log(res);
    })
  }

  function login (user) {
    HomeService.login(user).then( (res) => {
      console.log(res);
    })
  }

};

HomeController.$inject = ['HomeService'];

export default HomeController;  