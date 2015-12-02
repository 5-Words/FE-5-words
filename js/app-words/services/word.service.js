let WordService = function($http, SERVER, $cookies) {
  
  this.getGolden   = getGolden;
  this.addWords    = addWords;

  //GET GOLDEN WORDS
  function getGolden (golden) {
   let auth = $cookies.get('authToken');
   // console.log(auth);
   return $http({
      url: SERVER.URL + 'category/' + golden ,
      method: 'GET',
      headers:{
        access_token: auth
      }
    })
  } 

  //ADD WORDS
  //Constructor for creating new categories
  let Category = function (obj, category) {
    this.one = obj.one;
    this.two = obj.two;
    this.three = obj.three;
    this.four = obj.four;
    this.five = obj.five;
    this.category = category;

  };

  function addWords (user, category) {
    let auth = $cookies.get('authToken');
    //Create an instance of the category object
    let words = new Category(user, category);
    console.log(words);
  
    return $http({
      url: SERVER.URL + 'create',
      method: 'POST',
      headers:{
        access_token: auth
      }, 
      data: words
      
    })
  }

};

WordService.$inject = ['$http', 'SERVER', '$cookies'];

export default WordService;