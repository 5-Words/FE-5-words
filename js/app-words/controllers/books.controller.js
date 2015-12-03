let BooksController = function(WordService, $state) {
  
  let vm = this;

  this.editWords      = editWords;

  getWords();
  //Get Words
  function getWords () {

    let category = "books";
    WordService.getWords(category).then( (res) => {
      vm.words = res.data;
      let data = res.data.length;
      if(data) {
       
        $state.go('root.books') 
      } else {
      
        $state.go('root.add', {category})
      }    
    })
  }  
  
  //Edit Words
  function editWords (words, category) {
    console.log(words, category);
  }


};

BooksController.$inject = ['WordService', '$state'];

export default BooksController;