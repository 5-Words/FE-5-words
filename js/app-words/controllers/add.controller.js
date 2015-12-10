let addController = function(WordService, $stateParams, $state, $cookies) {
  
  let vm = this;

  this.addWords = addWords;

  let category = $stateParams;
  
  vm.category = category;

  checkAuth();
 

  function checkAuth() {
    let auth = $cookies.get('authToken');
   if (auth){
    // console.log('auth');
   } else {
    $state.go('root.home');
   }
  }
 
  
  //Add Words 
  function addWords (words, category) {
    console.log(category);
    
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
  //------------------------------------------------- 
  

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

    console.log(lower);

//-------------------------------
    //  let response = WordService.editWords(words, cat);

    // response.request.then( function () {
    //   let promise = response.category;
    //   $state.go('root.' + promise);
    // })
//-------------------------------


     WordService.addWords(lower).then( (res) => {
      console.log(res);

        $state.go('root.golden');
      
    })
  }

  function validateEmpty(field) {
    return field ? true: false;
  }
  

};

addController.$inject = ['WordService', '$stateParams', '$state', '$cookies'];

export default addController;