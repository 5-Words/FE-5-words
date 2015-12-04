let EditController = function(WordService, $stateParams, $state) {
  
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
      $state.go('root.golden');
    })
  } 


  

}; 

EditController.$inject = ['WordService', '$stateParams', '$state'];

export default EditController;