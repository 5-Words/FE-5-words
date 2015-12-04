let GoldenController = function(WordService, $state) {
  
  let vm = this;

  this.editWords      = editWords;

  
  getGolden();

  function getGolden () {
    let golden = "golden";
    WordService.getGolden(golden).then( (res) => {
      vm.words = res.data;
    })
   
  }


  //Edit Words
  function editWords (words, category) {
    $state.go('root.edit', {category});

  }

 
  

};

GoldenController.$inject = ['WordService', '$state'];

export default GoldenController; 
