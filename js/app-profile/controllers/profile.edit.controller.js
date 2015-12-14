let ProfileEditController = function(ProfileService, $cookies, $state) {
  
  let vm = this;

  this.editBio = editBio;

  checkAuth();
  getBio();


  //Check Auth
  //Checks to see if the user is logged in or not based on cookies that are saved when they login or register. If they do not have the authToken in the cookies they are sent back to the login page 
  function checkAuth() {
    let auth = $cookies.get('authToken');
     if (auth){
     } else {
      $state.go('home');
     }
  }

  //Get the Words
  function getBio () {
    
    let bio = ProfileService.tempBio;

    //If the user has not done a GET request for the bio yet.
    if(bio.length === 0) {
      console.log('No Bio');

      ProfileService.getBioPrivate().then( (res) => {
        console.log(res);
        vm.bio = res.data;
      })

    } else {
      //The user has already made a GET request so the bio have already been saved
      console.log('Have Bio');
      vm.bio = ProfileService.tempBio;
    } //else

  }  //getBio

  function editBio (bio) {
  
    ProfileService.editBio(bio).then( (res) => {
      $state.go('root.profile');
    })
  }
  

};

ProfileEditController.$inject = ['ProfileService', '$cookies', '$state'];

export default ProfileEditController;