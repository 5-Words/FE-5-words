let RegisterController = function($http, SERVER, $state, HomeService, $cookies) {
  
  let vm = this;

  this.addWords = addWords;

  checkAuth();
 

  function checkAuth() {
    let auth = $cookies.get('authToken');
   if (auth){
    // console.log('auth');
   } else {
    $state.go('root.home');
   }
  }

  function addWords (words) {
    HomeService.addWords(words).then( (res) => {
      console.log(res);
      $state.go('root.golden')
    })
  }
  

};

RegisterController.$inject = ['$http', 'SERVER', '$state', 'HomeService', '$cookies'];

export default RegisterController;