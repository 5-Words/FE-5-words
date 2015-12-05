let PhotosController = function($state, $cookies) {
  
  let vm = this;
  this.goTo = goTo;

  checkAuth();
 

  function checkAuth() {
    let auth = $cookies.get('authToken');
   if (auth){
    // console.log('auth');
   } else {
    $state.go('root.home');
   }
  }

  function goTo () {
    $state.go('root.photosAdd');
  }
  

};

PhotosController.$inject = ['$state', '$cookies'];

export default PhotosController;