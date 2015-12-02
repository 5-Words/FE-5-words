let FoodieController = function(WordService) {
  
  let vm = this;

  this.addWords       = addWords;
  this.editWords      = editWords;

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

 
  

};

FoodieController.$inject = ['WordService'];

export default FoodieController;