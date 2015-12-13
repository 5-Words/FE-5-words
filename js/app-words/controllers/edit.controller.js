let EditController = function(WordService, $stateParams, $state, $cookies) {
  
  let vm = this;

  vm.getWords = getWords;
  vm.editWords = editWords;
 

  checkAuth();
  changeStyle();
  getWords();

  //Check Auth
  //Checks to see if the user is logged in or not based on cookies that are saved when they login or register. If they do not have the authToken in the cookies they are sent back to the login page 
  function checkAuth() {
    let auth = $cookies.get('authToken');
     if (auth){
     } else {
      $state.go('root.home');
     }
  }
  //Change Style
  function changeStyle () {
    let category = $stateParams;
    category = category.category;
    
    let anchor = document.querySelector('#anchor');
    anchor.className = "";
    anchor.setAttribute("class", category);
  }

  function getWords () {

    let category = $stateParams;
   
    WordService.getWords(category.category).then( (res) => {
      vm.words = res.data;
    })
  }

  function editWords (words) {
    let cat = words[0].category;

    //Form Validation
    if(!words) {
      return console.log('Empty');
    }
    
    if(!validateEmpty(words[0].word)) {
      return console.log('The first input is blank');
    }
    if(!validateEmpty(words[1].word)) {
      return console.log('The second input is blank');
    }
    if(!validateEmpty(words[2].word)) {
      return console.log('The third input is blank');
    }
    if(!validateEmpty(words[3].word)) {
      return console.log('The fourth input is blank');
    }
    if(!validateEmpty(words[4].word)) {
      return console.log('The fifth input is blank');
    }
    //--------------------------------
  //Change all the words to lowercase 
    let one = words[0].word.toLowerCase();
    let two = words[1].word.toLowerCase();
    let three = words[2].word.toLowerCase();
    let four = words[3].word.toLowerCase();
    let five = words[4].word.toLowerCase();

    var words = {
      words: [
          { new: one, id: words[0].id},
          { new: two, id: words[1].id},
          { new: three, id: words[2].id},
          { new: four, id: words[3].id},
          { new: five, id: words[4].id},
          ]
        }
    ;
 
    let response = WordService.editWords(words, cat);

    response.request.then( function () {
      let promise = response.category;
      console.log(promise);
      $state.go('root.' + promise);
    })
    
  } 


 function validateEmpty(field) {
    return field ? true: false;
  }
  

}; 

EditController.$inject = ['WordService', '$stateParams', '$state', '$cookies'];

export default EditController;