let FriendsPicController = function(ProfileService, $stateParams) {
  let vm = this;

  let user = $stateParams.id;
  



  getFriendsPics(user);

  function getFriendsPics (user) {
   
    ProfileService.getFriendsPics(user).then( (res) => {
      console.log(res);
      vm.images = res.data;
    })
  }
  

};

FriendsPicController.$inject = ['ProfileService', '$stateParams'];

export default FriendsPicController;