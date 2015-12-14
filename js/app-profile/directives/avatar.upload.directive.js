let avatarUpload = function(ProfileService) {

  return {

    restrict: 'E',
    replace: true,
    scope: {
      file: '=image' 
    },
    template: `
    <div class="addPhotosForm">
      <h3>Upload Your Avatar</h3>
      <br><br><br>
      <form>
        <input class="customFileInput" type="file" name="pic" accept="image/*" ng-model="image.one" title="Choose an Avatar please" >
      
        <button class="customFileBtn">Submit</button>
      </form>
    </div>

      `,
      
    link: function (scope, element, attrs) {
      element.on('submit', function () {
        let file = element.find('input')[0].files[0];
        
        console.log('avatarUpload');
        // scope.file = file;
        ProfileService.sendAvatar(file);


      });
    }
  };
  
};

avatarUpload.$inject = ['ProfileService'];

export default avatarUpload;