let EditController = function(WordService, $stateParams) {
  
  let vm = this;

  vm.getWords = getWords;
  vm.editWords = editWords;
  //Get Words

  getWords();

  function getWords () {

  let category = $stateParams;
  
    
    WordService.getWords(category.category).then( (res) => {
      vm.words = res.data;
    })
  }

  function editWords (words) {
    WordService.editWords(words).then( (res) => {
      console.log(res);
    })
  }


  

}; 

EditController.$inject = ['WordService', '$stateParams'];

export default EditController;