let FriendsController = function($state, $cookies) {
  
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

FriendsController.$inject = ['$state', '$cookies'];

export default FriendsController;