let GoldenController = function(WordService) {
  
  let vm = this;

  this.getGolden = getGolden;

  // getGolden();

  function getGolden () {
    let golden = "golden";
    WordService.getGolden(golden).then( (res) => {
      // console.log(res);
      vm.golden = res.data;
    })
    // WordService.getGolden();
  }
  

};

GoldenController.$inject = ['WordService'];

export default GoldenController; 
