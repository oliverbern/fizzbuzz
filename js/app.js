$(document).ready(function () {
    //$('body').mouseenter(function() {
    //alert("works");
    //});
   

    $(".button").click(function () {
        var value = $('input[name="inputnumber"]').val();
        var input = parseInt($('input[name="inputnumber"]').val());
        if (!isNaN(value) && value%1 === 0 && value >= 0){
            $('.list').append('<p><h2>Start from 1 to ' + input + '.</h2></p>');
            play(input);
        }
        else {
            $('.list').append('<p>Game only uses positive integers. Please reset and try again.</p>');
        };          
    });
    $('.buttonagain').click(function() {
       $('p').remove(); 
        $('h2').remove(); 
        $('.inputfield').val("");
    });
});

    var play = function(input) {
        for (var i = 1; i <= input; i++) {
         if (i%5 === 0 && i%3 === 0) {
             $('.list').append('<p>FizzBuzz</p>');    
         }
         else if (i%5 === 0) {
              $('.list').append('<p>Buzz</p>');
         }
         else if (i%3 === 0) {
             $('.list').append('<p>Fizz</p>');
        }
         else {
            $('.list').append('<p>' + i + '</p>');      
         }
     };
    };