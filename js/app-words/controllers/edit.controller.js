let EditController = function(WordService, $stateParams, $state, $cookies) {
  
  let vm = this;

  vm.getWords = getWords;
  vm.editWords = editWords;
 

  checkAuth();
  getWords();

  function checkAuth() {
    let auth = $cookies.get('authToken');
   if (auth){
   
   } else {
    $state.go('root.home');
   }
  }

  function getWords () {

  let category = $stateParams;
  
    
    WordService.getWords(category.category).then( (res) => {
      vm.words = res.data;
      // console.log(vm.words);
      // vm.category = res.data[0].category;
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

    console.log(response);


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