let ProfileController = function($state, $cookies, ProfileService) {
  let vm = this;
 
  this.editBio = editBio;

  checkAuth();
  changeStyle();
  getBioPrivate();


  
  //Change Style
  function changeStyle () {
    let anchor = document.querySelector('#anchor');
    anchor.className = "";
    anchor.setAttribute("class", "profile");
  }

  //Check Auth
  //Checks to see if the user is logged in or not based on cookies that are saved when they login or register. If they do not have the authToken in the cookies they are sent back to the login page 
  function checkAuth() {
    let auth = $cookies.get('authToken');
     if (auth){
     } else {
      $state.go('home');
     }
  }

  function getBioPrivate () {
    ProfileService.getBioPrivate().then( (res) => {
      ProfileService.tempBio = res.data;
      vm.bio = res.data;
    })
  }

  function editBio () {
    $state.go('root.profileEdit');

  }
  

};

ProfileController.$inject = ['$state', '$cookies', 'ProfileService'];

export default ProfileController;