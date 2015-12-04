let PhotosAddController = function(ProfileService) {
  
  let vm = this;
  this.addPhoto = addPhoto;

  function addPhoto (photo) {
    console.log(photo);
    ProfileService.addPhoto(photo).then( (res) => {
      console.log(res);
    })
  }

};

PhotosAddController.$inject = ['ProfileService'];

export default PhotosAddController;