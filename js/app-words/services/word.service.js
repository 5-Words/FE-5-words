let WordService = function($http, SERVER, $cookies) {
  
  this.getGolden   = getGolden;
  this.getWords    = getWords;
  this.addWords    = addWords;
  this.editWords   = editWords;

  //GET WORDS
  function getWords (category) {
   let auth = $cookies.get('authToken');
   let id   = $cookies.get('userId');

   

   return $http({
      url: SERVER.URL + 'words/' + id + '/' + category,
      method: 'GET',
      headers:{
        access_token: auth
      }
    })

  }
  //GET GOLDEN WORDS
  function getGolden (golden) {
   let auth = $cookies.get('authToken');
   let id   = $cookies.get('userId');


   return $http({
      url: SERVER.URL + 'words/' + id + '/' + golden,
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

  function addWords (words) {
    console.log(words);
    let auth = $cookies.get('authToken');
    //Create an instance of the category object
    // let words = new Category(user, category);
    
  
    return $http({
      url: SERVER.URL + 'words/create',
      method: 'POST',
      headers:{
        access_token: auth
      }, 
      data: words
      
    })
  }

  function editWords(words) {
    console.log(words);
    let auth = $cookies.get('authToken');
    
  
    return $http({
      url: SERVER.URL + 'words/edit' ,
      method: 'PUT',
      headers:{
        access_token: auth
      }, 
      data: words
      
    })

  }

};

WordService.$inject = ['$http', 'SERVER', '$cookies'];

export default WordService;