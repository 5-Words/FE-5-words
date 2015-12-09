let MatchController = function(WordService, $state, $stateParams) {
  
  let vm = this;

  getWords();


  function getWords () {
    let category = $stateParams;
    let words = WordService.tempWords;

    console.log(words);

    
    WordService.getWords(category.category).then( (res) => {
        
        matchWords(res);

        function matchWords(res) {
          let one = res.data[0].word;
          let two = res.data[1].word;
          let three = res.data[2].word;
          let four = res.data[3].word;
          let five = res.data[4].word;

          let words = [one, two, three, four, five];
          let category = res.data[0].category;



          WordService.searchWords(words, category).then( (res) => {
          console.log(res);
          let matches = res.data;

          matches.forEach(function(match){
            console.log(match.user_id, match.word);
          })
          })
        }
    })  
  }
  





};

MatchController.$inject = ['WordService', '$state', '$stateParams'];

export default MatchController;