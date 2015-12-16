let SingleImageController = function($stateParams, ProfileService, $state, $cookies) {
  
  let vm = this;

  this.deleteImage  = deleteImage;
  this.goBack       = goBack;

  let id = $stateParams.id;
  
  checkAuth();
  changeStyle();
  getImage(id);

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
    anchor.setAttribute("class", "photos");
  }
  
  //Get Image
  function getImage (id) {
    
    ProfileService.getImage(id).then( (res) => {
      vm.image = res.data[0].image_url;
         
    })
  }

  function deleteImage () {
    let id2 = $stateParams.id;

     ProfileService.deleteImage(id2).then( (res) => {
        $state.go('root.photos');
    })
  } 
  function goBack () {
    console.log("goBack");
     $state.go('root.photos');
  } 
  

};

SingleImageController.$inject = ['$stateParams', 'ProfileService', '$state', '$cookies'];

export default SingleImageController;