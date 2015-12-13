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
  //Checks to see if the user is logged in or not based on cookies that are saved when they login or register. If they do not have the authToken in the cookies they are sent back to the login page 
  function checkAuth() {
    let auth = $cookies.get('authToken');
     if (auth){
     } else {
      $state.go('home');
     }
  }
  //Add Photo
  function addPhoto (photo) {
    console.log(photo);
    ProfileService.addPhoto(photo).then( (res) => {
      
    })
  }
  
};

PhotosAddController.$inject = ['ProfileService', '$state', '$cookies'];

export default PhotosAddController;