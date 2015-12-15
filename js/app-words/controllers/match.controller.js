import _ from 'underscore';

let MatchController = function(WordService, $state, $stateParams, $cookies) {
  
  let vm = this;

  this.checkProfile = checkProfile;
  this.goBack       = goBack;

  checkAuth();
  changeStyle();

  //Check Auth
  //Checks to see if the user is logged in or not based on cookies that are saved when they login or register. If they do not have the authToken in the cookies they are sent back to the login page 
  function checkAuth() {
    let auth = $cookies.get('authToken');
     if (auth){
     } else {
      $state.go('home');
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

  //User gets the match results back and if they see another user who they would like to match with, they can click a button that calls this function. The user name of the person they want to add is passed as the name parameter. They are routed to the check profile page of that specific user name.
  function checkProfile (name) {
    $state.go('root.friendsAdd', {name})
  }

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

                let users = _.union(_.pluck(array, 'username'));

                let byUser = [];

                 _.each(users, function (user) {

                let obj = {};

                obj.user = user;

                obj.words = _.where(array, { username: user });

                byUser.push(obj);

                vm.matches = byUser;
               
               
                });
                // console.log(byUser); 
//----------
              
            }) //WordService.searchWords
          } //matchWords
        }) //WordService.getWords

      } else {
        //The user has already made a GET request so the words have already been saved
        console.log('Have Words');
       
        WordService.searchWords(words, category1).then( (res) => {
        
          let array = res.data;

          let users = _.union(_.pluck(array, 'username'));

          let byUser = [];

           _.each(users, function (user) {

          let obj = {};

          obj.user = user;

          obj.words = _.where(array, { username: user });

          byUser.push(obj);
          
     
          vm.matches = byUser;
          

          }); 
           // console.log(byUser);
          
        })// WordService

      } //else

  }  //getWords
   function goBack() {
    let category = $stateParams;
    category = category.category;
    $state.go('root.' + category);
  }
  

}; 

MatchController.$inject = ['WordService', '$state', '$stateParams', '$cookies'];

export default MatchController;