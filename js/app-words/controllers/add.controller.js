let addController = function(WordService, $stateParams) {
  // console.log(category);
  let vm = this;

  this.addWords       = addWords;

  let category = $stateParams;

  vm.category = category;

  console.log(category);



  //Add Words 
  function addWords (words, category) {
    console.log(category);
     WordService.addWords(words, category).then( (res) => {
      console.log(res);
    })
  }
  

};

addController.$inject = ['WordService', '$stateParams'];

export default addController;