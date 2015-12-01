let WordService = function($http, SERVER, $cookies) {
  
  this.getGolden   = getGolden;

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

};

WordService.$inject = ['$http', 'SERVER', '$cookies'];

export default WordService;