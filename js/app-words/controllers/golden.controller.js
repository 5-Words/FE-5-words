let GoldenController = function(WordService) {
  
  let vm = this;

  this.editWords      = editWords;

  
  getGolden();

  function getGolden () {
    let golden = "golden";
    WordService.getGolden(golden).then( (res) => {
      // console.log(res); 
      vm.words = res.data;
    })
    // WordService.getGolden();
  }


  //Edit Words
  function editWords (words, category) {
    console.log(words, category);
  }

 
  

};

GoldenController.$inject = ['WordService'];

export default GoldenController; 
