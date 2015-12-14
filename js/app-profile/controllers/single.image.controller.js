let SingleImageController = function($stateParams, ProfileService) {
  
  let vm = this;

  this.deleteImage = deleteImage;

  let id = $stateParams.id;
  
  
  getImage(id);
  
  //Get Image
  function getImage (id) {
    
    ProfileService.getImage(id).then( (res) => {
      vm.image = res.data[0].image_url;
      console.log(res);
     
         
    })
  }

  function deleteImage () {
    let id2 = $stateParams.id;

    console.log(id2);
     ProfileService.deleteImage(id2).then( (res) => {
        
    })
  }  
  

};

SingleImageController.$inject = ['$stateParams', 'ProfileService'];

export default SingleImageController;