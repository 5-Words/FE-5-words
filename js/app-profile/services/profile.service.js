let ProfileService = function($http, SERVER, $cookies, $state) {
  this.sendPhoto       = sendPhoto;
  this.addPhoto        = addPhoto;
  this.sendAvatar      = sendAvatar;
  this.addAvatar       = addAvatar;
  this.getPhotos       = getPhotos;
  this.getBioPrivate   = getBioPrivate;
  this.editBio         = editBio;
  this.getBioPublic    = getBioPublic;
  this.getImage        = getImage;
  this.deleteImage     = deleteImage;
  this.addFriends      = addFriends;
  this.getFriends      = getFriends;
  this.getFriendsPics  = getFriendsPics;
  this.deleteFriend    = deleteFriend;
  this.getSingleImage  = getSingleImage;


  let tempBio;
  this.tempBio = [];

  let tempUser;
  this.tempUser;

 


  function getSingleImage (id) {
    let auth = $cookies.get('authToken');
    return $http({
      url: SERVER.URL + 'friend/image/' + id,
      method: 'GET',
      headers:{
        access_token: auth  
      }
    });
  } 

  function deleteFriend (user) {
     let auth = $cookies.get('authToken');
    return $http({
      url: SERVER.URL + 'friend/destroy/' + user,
      method: 'DELETE',
      headers:{
        access_token: auth  
      }
    });
  }

  function getFriends () {
    let auth = $cookies.get('authToken');
    return $http({
      url: SERVER.URL + 'user/friends',
      method: 'GET',
      headers:{
        access_token: auth  
      }
    });
  }

  function getFriendsPics (user) {
    let auth = $cookies.get('authToken');
    return $http({
      url: SERVER.URL + 'friend/gallery/' + user,
      method: 'GET',
      headers:{
        access_token: auth  
      }
    });
  }

  function addFriends (user) {
    let auth = $cookies.get('authToken');
    
    return $http({
      url: SERVER.URL + 'user/add_friend/' + user,
      method: 'POST',
      headers:{
        access_token: auth  
      }
    });
  }



  function getImage(id) {
    let auth = $cookies.get('authToken');

    return $http({
      url: SERVER.URL + 'user/image/' + id,
      method: 'GET',
      headers:{
        access_token: auth  
      },  
    })
    
  }

  function deleteImage(id) {
    
    let auth = $cookies.get('authToken');
   

    return $http({
      url: SERVER.URL + 'image/destroy/' + id,
      method: 'DELETE',
      headers:{
        access_token: auth  
      },  
    })

  }


  let Bio = function (obj) {
    this.bio = obj.bio;
    this.birthday = obj.birthday;
    this.email = obj.email;
    this.gender = obj.gender;
    this.location = obj.location;
    this.name  = obj.name;
    this.phone_number = obj.phone_number;
  };

  function editBio (bio) {
    let b = new Bio (bio);
    let auth = $cookies.get('authToken');

    return $http({
      url: SERVER.URL + 'user/edit',
      method: 'PUT',
      headers:{
        access_token: auth  
      }, 
      data: b   
    })    
  }


  function getPhotos () {
    let auth = $cookies.get('authToken');

    return $http({
      url: SERVER.URL + 'user/gallery',
      method: 'GET',
      headers:{
        access_token: auth  
      },  
    })
  }

  function sendPhoto(file) {

   addPhoto(file).then( (res) => {

    $state.go('root.photos');
      
    })
  } 

  function addPhoto (file) { 
   
    let formData = new FormData();
    formData.append('image', file);
    formData.append('title', 'photo');

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

  //TEST
  function sendAvatar(file) {

   addAvatar(file).then( (res) => {
      $state.go('root.profile');
    })
  } 

  function addAvatar (file) { 
   
    let formData = new FormData();
    formData.append('avatar', file);
  
    let auth = $cookies.get('authToken');
    
    return $http({
      url: SERVER.URL + 'user/avatar',
      method: 'Put',
      headers:{
        'Content-Type': undefined,
        access_token: auth  
      }, 
      data: formData  
    }) 
  } //add Avatar



  //Get current user's profile
  function getBioPrivate () {
    let auth = $cookies.get('authToken');
     return $http({
      url: SERVER.URL + 'user/profile/private',
      method: 'GET',
      headers:{
        access_token: auth  
      },  
    })

  }
  //Get other users' profiles
  function getBioPublic (user) {
    let auth = $cookies.get('authToken');

    return $http({
      url: SERVER.URL + 'user/profile/public/' + user,
      method: 'GET',
      headers:{
        access_token: auth  
      },  
    })
  }

}

ProfileService.$inject = ['$http', 'SERVER', '$cookies', '$state'];

export default ProfileService;