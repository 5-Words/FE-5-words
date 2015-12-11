let ProfileController = function($state, $cookies, ProfileService) {
  let vm = this;
 


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

ProfileController.$inject = ['$state', '$cookies', 'ProfileService'];

export default ProfileController;