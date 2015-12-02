let GoldenController = function(WordService) {
  
  let vm = this;

  this.getGolden      = getGolden;
  this.editWords      = editWords;
  this.deleteWords    = deleteWords;

  

  getGolden();

  function getGolden () {
    let golden = "golden";
    WordService.getGolden(golden).then( (res) => {
      // console.log(res); 
      vm.golden = res.data;
    })
    // WordService.getGolden();
  }


  //Edit Words
  function editWords (words) {
    console.log(words);
  }

  //Delete Category 
  function deleteWords () {
    console.log('Deleted');
  }
  

};

GoldenController.$inject = ['WordService'];

export default GoldenController; 
