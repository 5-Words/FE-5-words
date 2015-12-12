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

  function checkAuth() {
    let auth = $cookies.get('authToken');
   if (auth){
    // console.log('auth');
   } else {
    $state.go('root.home');
   }
  }

  function getBioPrivate () {
    ProfileService.getBioPrivate().then( (res) => {
      console.log(res);
      ProfileService.tempBio = res.data;
      console.log(ProfileService.tempBio);
      vm.bio = res.data;
    })
  }

  function editBio () {
    $state.go('root.profileEdit');

  }
  

};

ProfileController.$inject = ['$state', '$cookies', 'ProfileService'];

export default ProfileController;