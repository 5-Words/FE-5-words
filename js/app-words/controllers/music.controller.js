let MusicController = function(WordService, $state) {
  
  let vm = this;

  this.editWords      = editWords;

  getWords();
  //Get Words
  function getWords () {

    let category = "music";
    WordService.getWords(category).then( (res) => {
      vm.words = res.data;
      let data = res.data.length;
      if(data) {
       
        $state.go('root.music') 
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

MusicController.$inject = ['WordService', '$state'];

export default MusicController;