let GoldenController = function(WordService, $state, $cookies) {
  
  let vm = this;

  this.editWords      = editWords;
  this.matchWords     = matchWords;

  checkAuth();
  changeStyle();
  getGolden();

  //Check Auth
  //Checks to see if the user is logged in or not based on cookies that are saved when they login or register. If they do not have the authToken in the cookies they are sent back to the login page 
  function checkAuth() {
    let auth = $cookies.get('authToken');
     if (auth){
     } else {
      $state.go('home');
     }
  }

  //Change Style
  function changeStyle () {
    let anchor = document.querySelector('#anchor');
    anchor.className = "";
    anchor.setAttribute("class", "golden");
  }

  //Get Golden Words
  function getGolden () {
    let golden = "golden";
    WordService.getGolden(golden).then( (res) => {
      
      //The GET request for the category saves the words to the WordService to be used when the user clicks the 'match' button and goes to the 'match' page.
      WordService.tempWords = res;

      vm.words = res.data;
    })  
  }

  //Edit Words
  function editWords (words, category) {
    $state.go('root.edit', {category});
  }

  //Math The Words
   function matchWords(words, category) {
    // console.log(words, category);
    $state.go('root.match', {category})
  }
 
  

};

GoldenController.$inject = ['WordService', '$state', '$cookies'];

export default GoldenController; 
