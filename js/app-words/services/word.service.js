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

  function addWords (user, category) {
    let auth = $cookies.get('authToken');
    //Create an instance of the category object
    let words = new Category(user, category);
    
  
    return $http({
      url: SERVER.URL + 'create',
      method: 'POST',
      headers:{
        access_token: auth
      }, 
      data: words
      
    })
  }

  function editWords(words) {
    let auth = $cookies.get('authToken');
    

    let obj = 
      {word: 'test123', id: 299}
      

    let id = words[0].id;
  

    return $http({
      url: SERVER.URL + 'word/edit' ,
      method: 'PUT',
      headers:{
        access_token: auth
      }, 
      data: obj
      
    })

  }

};

WordService.$inject = ['$http', 'SERVER', '$cookies'];

export default WordService;