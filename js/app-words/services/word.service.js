let WordService = function($http, SERVER, $cookies) {
  
  this.getGolden   = getGolden;

  //GET GOLDEN WORDS
  // function getGolden () {
  //  let auth = $cookies.get('authToken');
  //  return $http({
  //     url: SERVER.URL,
  //     method: 'GET',
  //     headers:{
  //       access_token: auth
  //     }
  //   })
  // }

};

WordService.$inject = ['$http'];

export default WordService;