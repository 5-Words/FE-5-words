let SportsController = function(WordService, $state, $cookies) {
  
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
    anchor.setAttribute("class", "sports");
  }
  //Get Words
  function getWords () {

    let category = "sports";
    WordService.getWords(category).then( (res) => {
      vm.words = res.data;
      let data = res.data.length;
      if(data) {
       
        $state.go('root.sports') 
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

SportsController.$inject = ['WordService', '$state', '$cookies'];

export default SportsController;