let TravelController = function(WordService, $state) {
  
  let vm = this;

  this.searchWords    = searchWords;
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

  //Search Words
  function searchWords (words, category) {
    WordService.searchWords(words, category).then( (res) => {
      console.log(res);
    })
  }
  
  //Edit Words
  function editWords (words, category) {

    $state.go('root.edit', {category});
    
  }

};

TravelController.$inject = ['WordService', '$state'];

export default TravelController;