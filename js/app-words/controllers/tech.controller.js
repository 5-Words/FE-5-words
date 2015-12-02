let TechController = function(WordService) {
  
  // console.log('TechController');

  let vm = this;

  this.getWords       = getWords;
  this.addWords       = addWords;
  this.editWords      = editWords;

  getWords();

  //Get Words
  function getWords () {
    let category = "tech";
   
    WordService.getWords(category).then( (res) => {
      vm.words = res.data;
      
    })
  }

  //Add Words 
  function addWords (words, category) {
     WordService.addWords(words, category).then( (res) => {
      // console.log(res);
    })
  }
  
  //Edit Words
  function editWords (words) {
    console.log(words);
  }


  

};

TechController.$inject = ['WordService'];

export default TechController;