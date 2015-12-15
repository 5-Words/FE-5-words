

let fileUpload = function(ProfileService) {

  return {

    restrict: 'E',
    replace: true,
    scope: {
      file: '=image' 
    },
    template: `
    <div class="addPhotosForm">
      <h3>Upload Images</h3>
      <br><br><br>
      <form>
        <input class="customFileInput" type="file" name="pic" accept="image/*" ng-model="image.one" title="Choose an image please" >
        <button id="addPhotosbtn"  class="customFileBtn hide">Submit</button>
        <i id="spin1" class="fa fa-spinner fa-2x fa-spin hide"></i>
      </form>
      <hr>
      </form>
    </div>

      `,
      
    link: function (scope, element, attrs) {
      element.on('click', function () {

        let submit = angular.element(document.querySelector('#addPhotosbtn'));
        
        submit.toggleClass('hide');

    
      });
      element.on('submit', function () {
        let file = element.find('input')[0].files[0];

         let spin1 = angular.element(document.querySelector('#spin1'));
         spin1.removeClass('hide');

        ProfileService.sendPhoto(file); 

      });
    }




  };
  
};

fileUpload.$inject = ['ProfileService'];

export default fileUpload;