let ProfileService = function($http, SERVER) {
  

  this.addPhoto = addPhoto;

  function addPhoto (photo) {
    console.log(photo);

  }


  

};

ProfileService.$inject = ['$http', 'SERVER'];

export default ProfileService;