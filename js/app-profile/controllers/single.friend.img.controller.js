let SingleFriendImgController = function(ProfileService, $stateParams, $state, $cookies) {
  
  let vm = this;

  this.goBack = goBack;

  
  
  let id = $stateParams.id;

  let user = ProfileService.tempUser;
  vm.username = user;
   


  checkAuth();
  changeStyle();
  getSingleImage(id);

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

  
  function getSingleImage (id) {
    console.log(id);
    ProfileService.getSingleImage(id).then( (res) => {
      console.log(res);
      vm.single = res.data[0];
    })
  }
  function goBack(id) {
    $state.go('root.friendsPic', {id});
  }


};

SingleFriendImgController.$inject = ['ProfileService', '$stateParams', '$state', '$cookies'];

export default SingleFriendImgController;