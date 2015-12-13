let PhotosController = function(ProfileService, $state, $cookies) {
  
  let vm = this;
  this.goTo = goTo;

  checkAuth();
  changeStyle();
  getPhotos();
  
  //Change Style
  function changeStyle () {
    let anchor = document.querySelector('#anchor');
    anchor.className = "";
    anchor.setAttribute("class", "photos");
  }
  
  //Check Auth
  //Checks to see if the user is logged in or not based on cookies that are saved when they login or register. If they do not have the authToken in the cookies they are sent back to the login page 
  function checkAuth () {
    let auth = $cookies.get('authToken');
     if (auth){
     } else {
      $state.go('home');
     }
  }
  //Get Photos
  function getPhotos () {
    ProfileService.getPhotos().then( (res) => {
      vm.photos = res.data;
      

    })
  }
  //Go to the add photos page
  function goTo () {
    $state.go('root.photosAdd');
  }
  

};

PhotosController.$inject = ['ProfileService', '$state', '$cookies'];

export default PhotosController;