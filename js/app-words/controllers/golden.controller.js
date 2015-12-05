let GoldenController = function(WordService, $state, $cookies) {
  
  let vm = this;

  this.editWords      = editWords;

  checkAuth();
  getGolden();

  function checkAuth() {
    let auth = $cookies.get('authToken');
   if (auth){
    // console.log('auth');
   } else {
    $state.go('root.home');
   }
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
