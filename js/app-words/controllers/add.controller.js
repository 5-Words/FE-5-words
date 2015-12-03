let addController = function(WordService, $stateParams, $state) {
  
  let vm = this;

  this.addWords = addWords;

  let category = $stateParams;
  

  

  vm.category = category;

  
  //Add Words 
  function addWords (words, category) {
    
     WordService.addWords(words, category).then( (res) => {
        $state.go('root.golden');
    })
  }
  

};

addController.$inject = ['WordService', '$stateParams', '$state'];

export default addController;