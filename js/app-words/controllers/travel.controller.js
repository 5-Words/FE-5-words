let TravelController = function(WordService, $state, $cookies) {
  
  let vm = this;

  this.searchWords    = searchWords;
  this.editWords      = editWords;
  this.matchWords     = matchWords;


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
    anchor.setAttribute("class", "travel");
  }

  //Get Words
  function getWords () {

    let category = "travel";
    WordService.getWords(category).then( (res) => {
      vm.words = res.data;
      console.log(res.data);
      WordService.tempWords = res.data.word;
      let data = res.data.length;
      
      if(data) {
       
        $state.go('root.travel') 
      } else {
      
        $state.go('root.add', {category})
      }  
      
    })
  }

  //Search Words
  function searchWords (words, category) {
    WordService.searchWords(words, category).then( (res) => {
      console.log(res);
    })
  }
  
  //Edit Words
  function editWords (words, category) {

    $state.go('root.edit', {category});
    
  }
  //Match Words
  function matchWords(words, category) {
    $state.go('root.match', {category})
  }

};

TravelController.$inject = ['WordService', '$state', '$cookies'];

export default TravelController;