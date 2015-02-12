$(document).ready(function () {
    //$('body').mouseenter(function() {
    //alert("works");
    //});

    $(".button").click(function () {
        var input = $('input[name="inputnumber"]').val();
        $('.list').append('<p><h2>Start from 1 to ' + input + '.</h2></p>');
        $('.inputfield').val("");
        
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
    });
    
    $('.buttonagain').click(function() {
       $('p').fadeTo('slow', 0); 
        $('h2').fadeTo('slow', 0); 
    });
});