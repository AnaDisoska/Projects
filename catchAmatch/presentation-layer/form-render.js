function Renderer() {
    var self = this;
    this.pageLogic = new MatchingLogic();
  
    var questions = $('.questions');

        $('.account').click(function(){
            $('.login-form').css('display', 'none');
            $('.signup-form').css('display','block');
       
        });

        $('.continue').click(function(){
            event.preventDefault();
            self.pageLogic.saveUser();
         });
   
    
            $(document).on('click', '.changeQuestion', function(event){     
                event.preventDefault();
                $('.q1').fadeOut();
                $('.q2').fadeIn(1000);

                
                var q1 = $($("input[name='type1']:checked")[0]).val();
                if($(q1) !== ''){
               
                self.pageLogic.saveQuestion(q1);
                }else{
                   alert('Please answer the question');
              
                }
            
                
            });

            $(document).on('click', '.changeQuestion1', function(event){
                event.preventDefault();
                $('.q2').fadeOut();
                $('.q3').fadeIn(1000);

                var q2 = $($("input[name='type2']:checked")[0]).val();
            if($(q2) !== ''){
              
                self.pageLogic.saveQuestion(q2);
            }else{
               alert('Please answer the question');
            }   

               
            });

            $(document).on('click', '.changeQuestion2', function(event){
                event.preventDefault();
                $('.q3').fadeOut();
                $('.q4').fadeIn(1000);

                var q3 = $($("input[name='type3']:checked")[0]).val();
                if($(q3) !== ''){
         
                    self.pageLogic.saveQuestion(q3);
                }else{
                   alert('Please answer the question');
                }   
        
                
            });

            $(document).on('click', '.changeQuestion3', function(event){
                event.preventDefault();
                $('.q4').fadeOut();
                $('.q5').fadeIn(1000);

                var q4 = $($("input[name='type4']:checked")[0]).val();
                if($(q4) !== ''){
               
                    self.pageLogic.saveQuestion(q4);
                }else{
                   alert('Please answer the question');
                }   
               
            });
            
            $(document).on('click', '.changeQuestion4', function(event){
                event.preventDefault();

                

                $('.questions').css('display', 'none');
                $('.match').show().animate({
                    left: '250px',
                    width: '550px'
                  });; 
              

                var q5 = $($("input[name='type5']:checked")[0]).val();
                        if($(q5) !== ''){
                    
                            self.pageLogic.saveQuestion(q5);
                        }else{
                           alert('Please answer the question');
                        }   
                
            
                       
                        self.pageLogic.registerUser();

                     var matchedUsers = self.pageLogic.getMatches();

                     $('.show-match-names').text(matchedUsers);
                     console.log( matchedUsers);
                   
                         
               
            });


      
            
}