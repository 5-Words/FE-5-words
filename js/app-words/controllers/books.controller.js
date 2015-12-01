let BooksController = function(WordService) {
  
  let vm = this;

  this.editWords = editWords;
  this.deleteWords = deleteWords;


  //Edit Words
  function editWords (words) {
    console.log(words);
  }

  //Delete Category 
  function deleteWords () {
    console.log('Deleted');
  }
  

};

BooksController.$inject = ['WordService'];

export default BooksController;