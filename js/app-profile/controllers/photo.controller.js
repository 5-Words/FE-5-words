let PhotosController = function($state) {
  
  let vm = this;
  this.goTo = goTo;

  function goTo () {
    $state.go('root.photosAdd');
  }
  

};

PhotosController.$inject = ['$state'];

export default PhotosController;