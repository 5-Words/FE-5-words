let WordService = function($http, SERVER, $cookies) {
  
  this.getGolden   = getGolden;
  this.getWords    = getWords;
  this.addWords    = addWords;
  this.editWords   = editWords;
  this.searchWords = searchWords;

  let tempWords;
  this.tempWords = [];

  //GET WORDS
  function getWords (category) {
   let auth = $cookies.get('authToken');
   let id   = $cookies.get('userId');

   return $http({
      url: SERVER.URL + 'words/user/' + category,
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
      url: SERVER.URL + 'words/user/' + golden,
      method: 'GET',
      headers:{
        access_token: auth
      }
    })
  }  

  //Search Words
  function searchWords(words, category) {
    // console.log(words[0].word);
    let auth = $cookies.get('authToken');
    let id   = $cookies.get('userId');

    return $http({
      url: SERVER.URL + 'words/matches/' + category,
      method: 'GET',
      headers: {
        access_token: auth
      }
    })
  }

  //Add Words
  function addWords (words, category) {
    let auth = $cookies.get('authToken');  
    
    let request = $http({
      url: SERVER.URL + 'words/create',
      method: 'POST',
      headers:{
        access_token: auth
      }, 
      data: words    
    })
    return {
      request: request,
      category: category
    }
  }
  //Edit Words
  function editWords(words, category) {
    console.log(words);
    
    let auth = $cookies.get('authToken');
    
    let request = $http({
      url: SERVER.URL + 'words/edit' ,
      method: 'PUT',
      headers:{
        access_token: auth
      }, 
      data: words 
    });

    return {
      request: request,
      category: category
    }
  }
};

WordService.$inject = ['$http', 'SERVER', '$cookies'];

export default WordService;