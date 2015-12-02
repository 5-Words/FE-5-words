let EditController = function(WordService) {
  
  let vm = this;

  vm.getWords = getWords;
  //Get Words
  function getWords () {

    let category = "travel";
    WordService.getWords(category).then( (res) => {
      console.log(res);
      vm.words = res.data;
    })
  }
  

}; 

EditController.$inject = ['WordService'];

export default EditController;