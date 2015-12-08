let MusicController = function(WordService, $state, $cookies) {
  console.log('music');
  
  let vm = this;
  this.editWords      = editWords;

  checkAuth();
  changeStyle();
  getWords();

  function checkAuth() {
    let auth = $cookies.get('authToken');
   if (auth){
    // console.log('auth');
   } else {
    $state.go('root.home');
   }
  }
  //Change Style
  function changeStyle () {
    let anchor = document.querySelector('#anchor');
    anchor.className = "";
    anchor.setAttribute("class", "music");
    console.log(anchor.getAttribute());
  }
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

MusicController.$inject = ['WordService', '$state', '$cookies'];

export default MusicController;