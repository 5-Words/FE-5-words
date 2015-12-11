let fileUpload = function(ProfileService) {

  return {

    restrict: 'E',
    replace: true,
    scope: {
      file: '=image' 
    },
    template: `
    <form>
      <input type="file" name="pic" accept="image/*" ng-model="image.one">
      <input type="text" ng-model="image.two">Description</input>
      <button>Add</button>
    </form>
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