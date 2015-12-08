let GoldenController = function(WordService, $state, $cookies) {
  
  let vm = this;

  this.editWords      = editWords;

  checkAuth();
  changeStyle();
  getGolden();

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
    anchor.setAttribute("class", "golden");
  }

  function getGolden () {
    let golden = "golden";
    WordService.getGolden(golden).then( (res) => {
      vm.words = res.data;
    })
   
  }


  //Edit Words
  function editWords (words, category) {
    $state.go('root.edit', {category});

  }

 
  

};

GoldenController.$inject = ['WordService', '$state', '$cookies'];

export default GoldenController; 
