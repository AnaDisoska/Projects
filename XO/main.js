$(document).ready(function() {
 
    var xo = $('<div>').addClass('mainDiv').appendTo(document.body);



    for(var index = 0; index < 9; index ++){
   $('<button>').addClass('btn').attr('id', index).text('.').appendTo(xo); 
 }


    var player = 1;

    $('.btn').on('click', function(event){
        var selected = $(this);

       if(selected.hasClass('x') ||  selected.hasClass('o')) {
           alert('please select another box')
        } else {
          if(player === 1){
            selected.text('x').addClass('x');
            if(winner('x')){
                alert('X has won!')
            }else {
                player = 2;
            }
          }else{
            selected.text('0').addClass('o');
            if(winner('o')){
                alert('0 has won!')
            }else {
                player = 1;
            }
        
          }
       }

    })

    function winner(tic){

        if($('#0').hasClass(tic) && $('#1').hasClass(tic) && $('#2').hasClass(tic)){
           return true;
        }else if($('#3').hasClass(tic) && $('#4').hasClass(tic) && $('#5').hasClass(tic)){
            return true;
         }else if($('#6').hasClass(tic) && $('#7').hasClass(tic) && $('#8').hasClass(tic)){
            return true;
         }else if($('#0').hasClass(tic) && $('#3').hasClass(tic) && $('#6').hasClass(tic)){
            return true;
         }else if($('#1').hasClass(tic) && $('#4').hasClass(tic) && $('#7').hasClass(tic)){
            return true;
         }else if($('#2').hasClass(tic) && $('#5').hasClass(tic) && $('#8').hasClass(tic)){
            return true;
         }else if($('#0').hasClass(tic) && $('#4').hasClass(tic) && $('#8').hasClass(tic)){
            return true;
         }else if($('#2').hasClass(tic) && $('#4').hasClass(tic) && $('#6').hasClass(tic)){
            return true;
         }else {
             return false;
         }

    }

    checkWinner(tic);


  
  

})