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

  function addWords (words) {
    let auth = $cookies.get('authToken');
    console.log(words);
    let category = 'golden'
    // let username = $cookies.get('username');

    //Change all the words to lowercase 
    let one = words.one.toLowerCase();
    let two = words.two.toLowerCase();
    let three = words.three.toLowerCase();
    let four = words.four.toLowerCase();
    let five = words.five.toLowerCase();
 
    let wordsArray = [one, two, three, four, five];

    let username = $cookies.get('username');

    let lower = {
      words: wordsArray,
      category: category,
      username: username
    }
  
    return $http({
      url: SERVER.URL + 'words/create',
      method: 'POST',
      headers:{
        access_token: auth
      }, 
      data: lower

     })
  } 

  //LOGIN
  function login (user) {
    
    return $http.post(SERVER.URL + 'login', user);
  }

  

};  

HomeService.$inject = ['$http', 'SERVER', '$cookies'];

export default HomeService;