let FoodieController = function(WordService, $state, $cookies) {
  
  let vm = this;

 
  this.editWords      = editWords;
  this.searchWords    = searchWords;

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
    anchor.setAttribute("class", "foodie");
  }
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

  //Search Words
  function searchWords (words, category) {
    WordService.searchWords(words, category).then( (res) => {
      console.log(res);
    })
  }
  

};

FoodieController.$inject = ['WordService', '$state', '$cookies'];

export default FoodieController;