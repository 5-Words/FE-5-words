let SingleImageController = function($stateParams, ProfileService, $state) {
  
  let vm = this;

  this.deleteImage  = deleteImage;
  this.goBack       = goBack;

  let id = $stateParams.id;
  
  
  getImage(id);
  
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

SingleImageController.$inject = ['$stateParams', 'ProfileService', '$state'];

export default SingleImageController;