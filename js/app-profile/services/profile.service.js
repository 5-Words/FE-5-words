let ProfileService = function($http, SERVER, $cookies) {
  
  this.addPhoto = addPhoto;
  this.sendPhoto = sendPhoto;

  function sendPhoto(file) {

   addPhoto(file).then( (res) => {
      console.log(res);
    })
  } 

  function addPhoto (file) { 
   
    let formData = new FormData();
    formData.append('image', file);
    formData.append('title', 'photo');

    console.log(formData);

    let auth = $cookies.get('authToken');
    
    return $http({
      url: SERVER.URL + 'user/gallery',
      method: 'POST',
      headers:{
        'Content-Type': undefined,
        access_token: auth  
      }, 
      data: formData  
    }) 
  } //addPhoto

}

ProfileService.$inject = ['$http', 'SERVER', '$cookies'];

export default ProfileService;