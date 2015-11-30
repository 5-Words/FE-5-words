let HomeService = function($http, SERVER) {

 
  this.register    = register;
  this.login      = login;

  
  let User = function (obj) {
    this.email = obj.email;
    this.password = obj.password;
    this.username = obj.username;
  };
  
  function register (user) {

    let u = new User(user);

    return $http.post(SERVER.URL +'signup', u);

  }

  function login (user) {
    console.log(user);
    return $http.post(SERVER.URL + 'login', user);
  }

};  

HomeService.$inject = ['$http', 'SERVER'];

export default HomeService;