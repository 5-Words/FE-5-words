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
      <label class="customFileLabel">Select a file</label>
        <input class="customFileInput" type="file" name="pic" accept="image/*" ng-model="image.one" title="Choose an image please" >
      
        <button class="customFileBtn">Submit</button>
      </form>
    </div>
      `,
      
    link: function (scope, element, attrs) {
      element.on('submit', function () {
        let file = element.find('input')[0].files[0];
        console.log(file);

        // scope.file = file;
        ProfileService.sendPhoto(file);


      });
    }
  };
  
};

fileUpload.$inject = ['ProfileService'];

export default fileUpload;