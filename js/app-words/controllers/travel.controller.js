let TravelController = function(WordService) {
  
  let vm = this;

  this.addWords       = addWords;
  this.editWords      = editWords;
  this.deleteWords    = deleteWords;

  //Add Words 
  function addWords (words, category) {
    console.log(category);
     WordService.addWords(words, category).then( (res) => {
      console.log(res);
    })
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

TravelController.$inject = ['WordService'];

export default TravelController;