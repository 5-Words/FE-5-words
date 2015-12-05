let ProfileController = function($state, $cookies) {
  
  checkAuth();


  function checkAuth() {
    let auth = $cookies.get('authToken');
   if (auth){
    // console.log('auth');
   } else {
    $state.go('root.home');
   }
  }
  

};

ProfileController.$inject = ['$state', '$cookies'];

export default ProfileController;