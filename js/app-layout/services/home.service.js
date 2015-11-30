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
    console.log(u);

    return $http.post(SERVER.URL +'signup', u);

    // return $http({
    //   url: url + 'signup',
    //   method: 'POST',
     
    //   data:{
    //     email: user.email,
    //     username: user.username,
    //     password: user.password
    //   }
    // })
  }

  function login (user) {
    console.log(user);
  }

};  

HomeService.$inject = ['$http', 'SERVER'];

export default HomeService;