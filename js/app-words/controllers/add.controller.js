let addController = function(WordService, $stateParams, $state) {
  
  let vm = this;

  this.addWords = addWords;

  let category = $stateParams;
  
  vm.category = category;

  
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
  //------------------------------------------------- 
  //Change all the words to lowercase 
    let one = words.one.toLowerCase();
    let two = words.two.toLowerCase();
    let three = words.three.toLowerCase();
    let four = words.four.toLowerCase();
    let five = words.five.toLowerCase();
  //Remove all the white spaces
    one = one.split(' ').join('');
    two = two.split(' ').join('');
    three = three.split(' ').join('');
    four = four.split(' ').join('');
    five = five.split(' ').join('');
  //Create an object to pass to the back end
    var lower = {
      one : one,
      two : two,
      three: three,
      four: four,
      five: five
    };

    // console.log(lower);

     WordService.addWords(lower, category).then( (res) => {
        $state.go('root.golden');
    })
  }

  function validateEmpty(field) {
    return field ? true: false;
  }
  

};

addController.$inject = ['WordService', '$stateParams', '$state'];

export default addController;