$(document).ready(function() {

    
    
    var calculator = $('<div>').addClass('calculator').appendTo(document.body);
   var input = $('<input>')
    .addClass('input')
    .attr('placeholder', '0')
    
    .appendTo(calculator);

 var button =   $('<div>')
    .addClass('calculate')
    
     
    .appendTo(calculator);

    for(var index = 0; index < 20; index ++){
      var btn =   $('<div>').addClass('button').appendTo(button);
        
     
        switch (index) {
            case 0:
            $(btn).text('AC').val('AC').attr('id', 'ac');
                break;
            case 1:
           $(btn).text('C').val('C').attr('id', 'c');
                break;
            case 2:
           $(btn).text('<').val('<').attr('id', 'delete');
                break;
            case 3:
            $(btn).text('*').val('*').attr('id', 'multiply');
                break;
            case 4:
             $(btn).text('1').val('1').attr('id', '1');
                break;
            case 5:
             $(btn).text('2').val('2').attr('id', '2');
                break;
            case 6:
             $(btn).text('3').val('3').attr('id', '3');
                break;
            case 7:
             $(btn).text('/').val('/').attr('id', 'divide');
                break;
            case 8:
             $(btn).text('4').val('4').attr('id', '4');
                break;
             case 9:
              $(btn).text('5').val('5').attr('id', '5');
                break;
            case 10:
           $(btn).text('6').val('6').attr('id', '6');
                break;
            case 11:
             $(btn).text('-').val('-').attr('id', 'minus');
                break;
            case 12:
             $(btn).text('7').val('7').attr('id', '7');
                break;
            case 13:
             $(btn).text('8').val('8').attr('id', '8');
                break;
            case 14:
            $(btn).text('9').val('9').attr('id', '9');
                break;
            case 15:
             $(btn).text('+').val('+').attr('id', 'plus');
                break;
            case 16:
             $(btn).text('.').val('.').attr('id', 'dot');
                break;
            case 17:
             $(btn).text('0').val('0').attr('id', '0');
                break;
             case 18:
            $(btn).text(',').val(',').attr('id', 'comma');
                break;
                case 19:
            $(btn).text('=').val('=').attr('id', 'equalTo');
            break;
        }

        $(btn).hover(
            function(){
                var $this = $(this);
            $this.data('bgcolor', $this.css('background-color')).css('background-color', 'rgb(255, 47, 82)');
        },
        function(){
            var $this = $(this);
            $this.css('background-color', $this.data('bgcolor'));
          })

          
          



           
    }

    $('#1,#2,#3,#4,#5,#6,#7,#8,#9,#0,#plus, #comma, #dot, #minus, #divide, #multiply').click(function(){
        var value = $(this).val();
        var total = $(input).val($(input).val() + value); 
    });

    $('#equalTo').click(function(){
        $(input).val(eval($(input).val()));
        });


        $('#c, #ac').click(function(){
            $(input).val('');
          });

       
      

          $('#delete').click(function(){
            $(input).val($(input).val().substring(0, $(input).val().length - 1));
          });
       

})

// $(btn).click(function(event) {
//     var thingClicked = this.innerHTML
//      $(input).attr('value', thingClicked)
     
//    })