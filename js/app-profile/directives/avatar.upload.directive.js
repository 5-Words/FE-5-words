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
      
        <button id="addPhotosbtn1" class="customFileBtn hide">Submit</button>
        <i id="spin2" class="fa fa-spinner fa-2x fa-spin hide"></i>

      </form>
    </div>

      `,
      
    link: function (scope, element, attrs) {
    
        element.on('click', function () {

        let submit = angular.element(document.querySelector('#addPhotosbtn1'));
        
        submit.toggleClass('hide');

    
      });
      element.on('submit', function () {
        let file = element.find('input')[0].files[0];

         let spin2 = angular.element(document.querySelector('#spin2'));
         spin2.removeClass('hide');

        ProfileService.sendAvatar(file); 

      });
  
    } //link
  }; //return

  
};

avatarUpload.$inject = ['ProfileService'];

export default avatarUpload;