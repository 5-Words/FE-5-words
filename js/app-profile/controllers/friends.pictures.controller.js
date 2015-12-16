let FriendsPicController = function(ProfileService, $stateParams, $cookies) {
  let vm = this;

  let user = $stateParams.id;

  ProfileService.tempUser = user;

  checkAuth();
  changeStyle();
  getFriendsPics(user);

  //Check Auth
  //Checks to see if the user is logged in or not based on cookies that are saved when they login or register. If they do not have the authToken in the cookies they are sent back to the login page 
  function checkAuth () {
    let auth = $cookies.get('authToken');
     if (auth){
     } else {
      $state.go('home');
     }
  }

  //Change Style
  function changeStyle () {
    let anchor = document.querySelector('#anchor');
    anchor.className = "";
    anchor.setAttribute("class", "friends");
  }
  

  function getFriendsPics (user) {
   
    ProfileService.getFriendsPics(user).then( (res) => {
      console.log(res);
      vm.images = res.data;
    })
  }
  

};

FriendsPicController.$inject = ['ProfileService', '$stateParams', '$cookies'];

export default FriendsPicController;