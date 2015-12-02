let addController = function(WordService, $stateParams) {
  
  let vm = this;

  this.addWords = addWords;

  let category = $stateParams;

  vm.category = category;

  
  //Add Words 
  function addWords (words, category) {
    
     WordService.addWords(words, category).then( (res) => {
     
    })
  }
  

};

addController.$inject = ['WordService', '$stateParams'];

export default addController;