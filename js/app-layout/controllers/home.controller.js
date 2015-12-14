let HomeController = function(HomeService, $cookies, $state) {
  
  let vm = this;

  vm.register      = register;
  vm.login         = login;
  vm.logout        = logout;

  changeStyle();

  //Change Style
  function changeStyle () {
    let anchor = document.querySelector('#anchor');
    anchor.className = "";
    anchor.setAttribute("class", "home");
  }

  function register (user) {
   
    HomeService.register(user).then( (res) => {
  
      
      $cookies.put('authToken', res.data.access_token);
      $cookies.put('username', res.data.username);

      
      $state.go('register');
    })
  }

  function login (user) {
    HomeService.login(user).then( (res) => {
     
      let auth = $cookies.put('authToken', res.data.access_token);
      let userId = $cookies.put('userId', res.data.id);
      $cookies.put('username', res.data.username);
  
      $state.go('root.golden');
    })
  }

  function logout () {
    $cookies.remove('authToken');
    $cookies.remove('userId');

    $state.go('home');
  }

};

HomeController.$inject = ['HomeService', '$cookies', '$state'];

export default HomeController;  