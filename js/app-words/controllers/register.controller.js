let RegisterController = function($http, SERVER, $state, HomeService, $cookies, WordService) {
  
  let vm = this; 

  this.addWords = addWords;

  checkAuth();
  getGolden();
 
  //Check Auth
  //Checks to see if the user is logged in or not based on cookies that are saved when they login or register. If they do not have the authToken in the cookies they are sent back to the login page 
  function checkAuth() {
    let auth = $cookies.get('authToken');
   if (auth){
   } else {
    $state.go('home');
   }
  } 

  //Get Golden Words
  function getGolden () {
    let golden = "golden";
    WordService.getGolden(golden).then( (res) => {
        console.log(res.data);
        if(res.data.length === 5) {
          // console.log('Have Words');
          $state.go('root.golden');
        }
        else {
          // console.log('No Words');
        }

  
    })  
  }


  function addWords (words) {
    HomeService.addWords(words).then( (res) => {
      $state.go('root.golden')
    })
  }
  

};

RegisterController.$inject = ['$http', 'SERVER', '$state', 'HomeService', '$cookies', 'WordService'];

export default RegisterController;