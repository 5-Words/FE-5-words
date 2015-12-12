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
  function checkAuth () {
    let auth = $cookies.get('authToken');
     if (auth){
     } else {
      $state.go('root.home');
     }
  }
  //Get Photos
  function getPhotos () {
    ProfileService.getPhotos().then( (res) => {
      vm.photos = res.data;
      console.log(res.data);

    })
  }
  //Go to the add photos page
  function goTo () {
    $state.go('root.photosAdd');
  }
  

};

PhotosController.$inject = ['ProfileService', '$state', '$cookies'];

export default PhotosController;