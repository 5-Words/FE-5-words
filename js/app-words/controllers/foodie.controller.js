let FoodieController = function(WordService, $state) {
  
  let vm = this;

 
  this.editWords      = editWords;

  getWords();
  //Get Words
  function getWords () {

    let category = "foodie";
    WordService.getWords(category).then( (res) => {
      vm.words = res.data;
      let data = res.data.length;
      if(data) {
       
        $state.go('root.foodie') 
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

FoodieController.$inject = ['WordService', '$state'];

export default FoodieController;