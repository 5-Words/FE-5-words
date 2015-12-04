let EditController = function(WordService, $stateParams, $state) {
  
  let vm = this;

  vm.getWords = getWords;
  vm.editWords = editWords;
  //Get Words

  getWords();

  function getWords () {

  let category = $stateParams;
  
    
    WordService.getWords(category.category).then( (res) => {
      vm.words = res.data;
    })
  }

  function editWords (words) {

    //Form Validation
    if(!words) {
      return console.log('Empty');
    }
    console.log(words);
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
  // //Remove all the white spaces
    one = one.split(' ').join('');
    two = two.split(' ').join('');
    three = three.split(' ').join('');
    four = four.split(' ').join('');
    five = five.split(' ').join('');
  // //Create an object to pass to the back end
    var lower = {
      one : one,
      two : two,
      three: three,
      four: four,
      five: five
    };


    console.log(lower);

    // WordService.editWords(words).then( (res) => {
    //   console.log(res);
    //   $state.go('root.golden');
    // })
  } 

   function validateEmpty(field) {
    return field ? true: false;
  }
  

}; 

EditController.$inject = ['WordService', '$stateParams', '$state'];

export default EditController;