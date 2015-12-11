import _ from 'underscore';

let MatchController = function(WordService, $state, $stateParams) {
  
  let vm = this;

  getWords();

  //Get the Words
  function getWords () {
    let category = $stateParams;
    
    let category1 = category.category;
  
    let words = WordService.tempWords;

      //If the user has no words
      if(words.length === 0) {
        console.log('No Words');
        //Get the words first
        WordService.getWords(category.category).then( (res) => {    
    
        matchWords(res);
          //Match the words
          function matchWords(res) {
            let one = res.data[0].word;
            let two = res.data[1].word;
            let three = res.data[2].word;
            let four = res.data[3].word;
            let five = res.data[4].word;

            let words = [one, two, three, four, five];
            let category = res.data[0].category;

            WordService.searchWords(words, category).then( (res) => {
//---------

                let array = res.data;

                let users = _.union(_.pluck(array, 'user_id'));

                let byUser = [];

                 _.each(users, function (user) {

                let obj = {};

                obj.user = user;

                obj.words = _.where(array, { user_id: user });

                byUser.push(obj);

                vm.matches = byUser;
               
               
                });
                console.log(byUser); 
//----------
              
            }) //WordService.searchWords
          } //matchWords
        }) //WordService.getWords

      } else {
        //The user has already made a GET request so the words have already been saved
        console.log('Have Words');
       
        WordService.searchWords(words, category1).then( (res) => {
        
          let array = res.data;

          let users = _.union(_.pluck(array, 'user_id'));

          let byUser = [];

           _.each(users, function (user) {

          let obj = {};

          obj.user = user;

          obj.words = _.where(array, { user_id: user });

          byUser.push(obj);
          
     
          vm.matches = byUser;
          

          }); 
           console.log(byUser);
          
        })// WordService

      } //else

  }  //getWords
  

}; 

MatchController.$inject = ['WordService', '$state', '$stateParams'];

export default MatchController;