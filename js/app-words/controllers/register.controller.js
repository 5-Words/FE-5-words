let RegisterController = function($http, SERVER, $state, HomeService, $cookies) {
  
  let vm = this;

  this.addWords = addWords;

  function addWords (words) {
    HomeService.addWords(words).then( (res) => {
      // console.log(res);
    })
  }
  

};

RegisterController.$inject = ['$http', 'SERVER', '$state', 'HomeService', '$cookies'];

export default RegisterController;