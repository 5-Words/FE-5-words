let ProfileEditController = function(ProfileService) {
  
  let vm = this;

  this.editBio = editBio;


  getBio();

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
    console.log(bio);
    ProfileService.editBio(bio).then( (res) => {
      console.log(res);
    })
  }
  

};

ProfileEditController.$inject = ['ProfileService'];

export default ProfileEditController;