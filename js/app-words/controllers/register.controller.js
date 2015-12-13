let RegisterController = function($http, SERVER, $state, HomeService, $cookies) {
  
  let vm = this; 

  this.addWords = addWords;

  checkAuth();
 
  //Check Auth
  //Checks to see if the user is logged in or not based on cookies that are saved when they login or register. If they do not have the authToken in the cookies they are sent back to the login page 
  function checkAuth() {
    let auth = $cookies.get('authToken');
   if (auth){
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