let TravelController = function(WordService, $state) {
  
  let vm = this;

  this.addWords       = addWords;
  this.editWords      = editWords;

  getWords();

  //Get Words
  function getWords () {

    let category = "travel";
    WordService.getWords(category).then( (res) => {
      console.log(res);
      vm.words = res.data;
      let data = res.data.length;
      console.log(data);
      if(data) {
        $state.go('root.add', {category})

        // $state.go('root.travel') 
      } else {
      
        $state.go('root.add')
      }

      
      
    })
  }

  //Add Words 
  function addWords (words, category) {
    console.log(category);
     WordService.addWords(words, category).then( (res) => {
      // console.log(res);
    })
  }
  
  //Edit Words
  function editWords (words) {
    console.log(words);
  }


};

TravelController.$inject = ['WordService', '$state'];

export default TravelController;