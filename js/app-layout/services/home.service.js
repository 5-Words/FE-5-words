let HomeService = function($http, SERVER, $cookies) {

 
  this.register    = register;
  this.login       = login;
  this.addWords    = addWords;
  


  //REGISTER
  let User = function (obj) {
    this.email = obj.email;
    this.password = obj.password;
    this.username = obj.username;
  };
  
  function register (user) {
    let u = new User(user);

    return $http.post(SERVER.URL + 'signup', u);

  
  }
  let Golden = function (obj, username) {
    this.one = obj.one;
    this.two = obj.two;
    this.three = obj.three;
    this.four = obj.four;
    this.five = obj.five;
    this.category = 'golden';
    this.username = username
    

  }; 

  function addWords (user) {
    let auth = $cookies.get('authToken');
    let username = $cookies.get('username');
    console.log(username);
   
    let g = new Golden(user, username);
    console.log(g);
  
    return $http({
      url: SERVER.URL + 'create',
      method: 'POST',
      headers:{
        access_token: auth
      }, 
      data: g

     })
  } 

  //LOGIN
  function login (user) {
    
    return $http.post(SERVER.URL + 'login', user);
  }

  

};  

HomeService.$inject = ['$http', 'SERVER', '$cookies'];

export default HomeService;