let TechController = function(WordService) {
  
  let vm = this;

  this.addWords       = addWords;
  this.editWords      = editWords;
  this.deleteWords    = deleteWords;

  //Add Words 
  function addWords (words, category) {
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

TechController.$inject = ['WordService'];

export default TechController;