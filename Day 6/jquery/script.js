// var links = $('a');


// links.each(function(){
//     var link = $(this);
// link.text(link.text() + '!');

// });

// $('p').html('I know right?!')
    // $('p').html('I know right?!')
    // $('h1').css({'color': 'red'})
    // console.log($('p').html());
    // console.log($('h1').css('color'));


//Events
function clickHandler() {
    console.log('I\'ve been clicked!!');
  }

  $('#button').on('click', clickHandler);

//   The event object
$('body').on('keypress', function(event) {
    console.log(event);
    console.log(event.which);
    console.log(event.target);
});

// Prevent Default Actions
$('form').on('submit', function() {
    event.preventDefault();

    console.log('Oops! You got more stuff to do!');
    //More stuff to do here
})

// Effects and Animation
        // $('#error').toggle('10000');
        $('#error').hide('10000');
        $('#error').fadeIn('10000');
        $('#error').show(1000, function(){
            $(this).addClass('alert');
        })

        // $('#lorem').hide('10000');
        // $('#lorem').fadeIn('10000');


        $('#lorem').animate({
            opacity: 0,
            left:"+50",
        }, 500, function() {
            // Animation complete
        
        });


// Chaining
// Option 1
var banner = $('#banner');
banner.css('color', 'red') ;
banner.html('Welcome!');
banner.show(); 

// Option 2
banner.css('color', 'red').html('Welcome!').show();

// Option 3
banner.css('color', 'red')
        .html('Welcome!')
        .show();
