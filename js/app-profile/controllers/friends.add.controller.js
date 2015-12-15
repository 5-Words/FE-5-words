let FriendsAdd = function($state, ProfileService, $stateParams, $cookies) {

  let vm = this;
  this.addFriends = addFriends;

  let user = $stateParams;
  user = user.name;
  

  checkAuth();
  changeStyle();
  getBioPublic(user);

  function addFriends(user) {
    ProfileService.addFriends(user).then( (res) => {
      console.log(res);
      $state.go('root.friends');

    })
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

  
  //Change Style
  function changeStyle () {
    let anchor = document.querySelector('#anchor');
    anchor.className = "";
    anchor.setAttribute("class", "friendAddWrapper");
  }

  //Get the User's Profile
  function getBioPublic (user) {
    ProfileService.getBioPublic(user).then( (res) => {
      console.log(res);
      vm.bio = res.data;
    })
  }
  
  

};

FriendsAdd.$inject = ['$state', 'ProfileService', '$stateParams', '$cookies'];

export default FriendsAdd;