function MatchingLogic(){
   var username = $('#username');
   var pass = $('#pass');
   var email = $('#mail');
   var ageInput = $('.ageInput');
   this.currentUser = null;
   this.users = [];
   this.usersKey = "users";
  


   this.saveUser = function() {
   
        var gender = $($("input[name='gender']:checked")[0]).val();
       if($(username).val() !=='' && $(pass).val() !=='' && $(email).val() !==''  && $(gender) !== '' && $(ageInput).val() !== ''){ 
          
        this.currentUser = new User(username.val(), pass.val(), email.val(), gender, ageInput.val());

           $('.signup-form').css('display','none');
           $('.questions').css('display', 'block');
       }else{
           alert('Please fill in the form!!!')
       }
    
   }

    
    this.registerUser = function(){
        var tempUsers;
       if(!localStorage.getItem(this.usersKey)){
            localStorage.setItem(this.usersKey, []);
            tempUsers = [];
        }  else {
            tempUsers = JSON.parse(localStorage.getItem(this.usersKey));
        }
      
        tempUsers.push(this.currentUser);
        localStorage.setItem(this.usersKey, JSON.stringify(tempUsers));
    }


    this.saveQuestion = function(radioValue){
      this.currentUser.answeredQuestions.push(radioValue);
    }
       


     
     this.getMatches = function(){

        var allUsers = JSON.parse(localStorage.getItem(this.usersKey));
        var matchedUsers = [];
       

      
        var isItMatch = true;

        if(allUsers === null){
            allUsers = [];
        }

        for (let index = 0; index < allUsers.length - 1; index++) {

                 for (let secondIndex = index+1; secondIndex < allUsers.length; secondIndex++) {
                 isItMatch = true;

                     for (let j = 0; j < allUsers[index].answeredQuestions.length; j++) {
                         if(allUsers[index].answeredQuestions[j] !== allUsers[secondIndex].answeredQuestions[j]){
                         isItMatch = false;
                          break;
                         }
                 
                     }
   
                     if(isItMatch && (allUsers[index].gender !== allUsers[secondIndex].gender)){
                       var theUsers = allUsers[index].username + " CATCH " + allUsers[secondIndex].username + ' '
                         matchedUsers.push(theUsers);
                     }

                 }
           
            
           
            
        }
        
       return matchedUsers;
        
     
    
    }
   



     

    
    }
