let PhotosAddController = function(ProfileService, $state, $cookies) {
  
  let vm = this;
  this.addPhoto = addPhoto;

  checkAuth();

  changeStyle();
  
  //Change Style
  function changeStyle () {
    let anchor = document.querySelector('#anchor');
    anchor.className = "";
    anchor.setAttribute("class", "photosAdd");
  }
 
  //Check Auth
  function checkAuth() {
    let auth = $cookies.get('authToken');
     if (auth){
     } else {
      $state.go('root.home');
     }
  }
  //Add Photo
  function addPhoto (photo) {
    console.log(photo);
    ProfileService.addPhoto(photo).then( (res) => {
      console.log(res);
    })
  }
  
};

PhotosAddController.$inject = ['ProfileService', '$state', '$cookies'];

export default PhotosAddController;