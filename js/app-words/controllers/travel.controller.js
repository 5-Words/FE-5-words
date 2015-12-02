let TravelController = function(WordService, $state) {
  
  let vm = this;

  this.editWords      = editWords;

  getWords();

  //Get Words
  function getWords () {

    let category = "travel";
    WordService.getWords(category).then( (res) => {
      vm.words = res.data;
      let data = res.data.length;
      
      if(data) {
       
        $state.go('root.travel') 
      } else {
      
        $state.go('root.add', {category})
      }  
      
    })
  }
  
  //Edit Words
  function editWords (words) {
    console.log(words);
  }

};

TravelController.$inject = ['WordService', '$state'];

export default TravelController;