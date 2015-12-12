let FriendsAdd = function($state, ProfileService, $stateParams, $cookies) {

  let vm = this;

  let user = $stateParams;
  user = user.name;
  console.log(user);

  checkAuth();
  getBioPublic(user);
 
  //Check Auth
  function checkAuth() {
    let auth = $cookies.get('authToken');

     if (auth){
     } else {
      $state.go('root.home');
     }
  }

  //Get the User's Profile
  function getBioPublic (user) {
    ProfileService.getBio(user).then( (res) => {
      console.log(res);
      vm.bio = res.data;
    })
  }
  
  

};

FriendsAdd.$inject = ['$state', 'ProfileService', '$stateParams', '$cookies'];

export default FriendsAdd;