let FriendsController = function($state, $cookies, ProfileService) {
  let vm = this;

  this.deleteFriend = deleteFriend;
  
  checkAuth();
  changeStyle();
  getFriends();

  function deleteFriend (user) {
    ProfileService.deleteFriend(user).then( (res) => {
      $state.go('root.friends');
      location.reload();
    })
  }

  //Get a list of all of your friends
  function getFriends () {
    ProfileService.getFriends().then( (res) => {
      console.log(res);
      vm.friends = res.data;
    })
  }
  
  //Change Style
  function changeStyle () {
    let anchor = document.querySelector('#anchor');
    anchor.className = "";
    anchor.setAttribute("class", "friends");
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
  

};

FriendsController.$inject = ['$state', '$cookies', 'ProfileService'];

export default FriendsController;