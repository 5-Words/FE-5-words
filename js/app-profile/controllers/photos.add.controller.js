let PhotosAddController = function(ProfileService, $state, $cookies) {
  
  let vm = this;
  this.addPhoto = addPhoto;

  checkAuth();
 

  function checkAuth() {
    let auth = $cookies.get('authToken');
   if (auth){
    // console.log('auth');
   } else {
    $state.go('root.home');
   }
  }

  function addPhoto (photo) {
    console.log(photo);
    ProfileService.addPhoto(photo).then( (res) => {
      console.log(res);
    })
  }

};

PhotosAddController.$inject = ['ProfileService', '$state', '$cookies'];

export default PhotosAddController;