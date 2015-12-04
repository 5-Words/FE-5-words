let CarController = function(WordService, $state) {
  
  let vm = this;

  this.editWords      = editWords;

  getWords();
  //Get Words
  function getWords () {

    let category = "cars";
    WordService.getWords(category).then( (res) => {
      vm.words = res.data;
      let data = res.data.length;
      if(data) {
       
        $state.go('root.cars') 
      } else {
      
        $state.go('root.add', {category})
      }    
    })
  }  
  
  //Edit Words
  function editWords (words, category) {
    $state.go('root.edit', {category});
    
  }

  

  

};

CarController.$inject = ['WordService', '$state'];

export default CarController;