let ProfileController = function($state, $cookies) {
  
  checkAuth();
  changeStyle();
  
  //Change Style
  function changeStyle () {
    let anchor = document.querySelector('#anchor');
    anchor.className = "";
    anchor.setAttribute("class", "profile");
  }

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