let addController = function(WordService, $stateParams, $state, $cookies) {
  
  let vm = this;

  this.addWords = addWords;

  let category = $stateParams;
  
  vm.category = category;

  checkAuth();
 
  //Check Auth
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
    console.log(category);
    let anchor = document.querySelector('#anchor');
    anchor.className = "";
    anchor.setAttribute("class", category);
  }
 
  //Add Words 
  function addWords (words, category) {
   
  //Form Validation
    if(!words) {
      return console.log('Empty');
    }
    if(!validateEmpty(words.one)) {
      return console.log('The first word is empty');
    }
    if(!validateEmpty(words.two)) {
      return console.log('The second word is empty');
    }
    if(!validateEmpty(words.three)) {
      return console.log('The third word is empty');
    }
    if(!validateEmpty(words.four)) {
      return console.log('The fourth word is empty');
    }
    if(!validateEmpty(words.five)) {
      return console.log('The fifth word is empty');
    }

  //Change all the words to lowercase 
    let one = words.one.toLowerCase();
    let two = words.two.toLowerCase();
    let three = words.three.toLowerCase();
    let four = words.four.toLowerCase();
    let five = words.five.toLowerCase();
 
    let wordsArray = [one, two, three, four, five];

    let username = $cookies.get('username');

    let lower = {
      words: wordsArray,
      category: category,
      username: username
    }

    let response = WordService.addWords(lower, category);

    response.request.then( function () {
        let promise = response.category;
        $state.go('root.' + promise);
      })

  } //addWords()

  function validateEmpty(field) {
    return field ? true: false;
    
  } //validateEmpty()
  

};

addController.$inject = ['WordService', '$stateParams', '$state', '$cookies'];

export default addController;