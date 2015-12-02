let TechController = function(WordService, $state) {

  let vm = this;

  this.editWords      = editWords;

   getWords();
  //Get Words
  function getWords () {

    let category = "tech";
    WordService.getWords(category).then( (res) => {
      vm.words = res.data;
      let data = res.data.length;
      if(data) {
       
        $state.go('root.tech') 
      } else {
      
        $state.go('root.add', {category})
      }    
   })
  }  
  
  //Edit Words
  function editWords (words) {
    console.log(words);
  }

};

TechController.$inject = ['WordService', '$state'];

export default TechController;