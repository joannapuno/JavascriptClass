

var colorCube = randomColor({hue: 'red', count: 1});

// Validation + Messages
$(document).ready(function(){
    

  function validateForm() {
    var invalid = false;
    $('form input').each(function(){
      if($(this).val()=== '') {
        invalid = true;
      } 
    });

    if(invalid) {
      $('#error').fadeIn('2000');
    }

    if(!invalid) {
      $('#error').hide('2000');
      $('#resultMessage').fadeIn('2000');

    }
  }

  $('form').on('submit', function(event) {
    event.preventDefault();
    validateForm();

    console.log($('<input type = "number">'));
   
    });
  });


//   Color
// appending divs inside #boxes



// function addColorBox(){
//         for(var i =0; i <=10; i++){
//             if($(this).val() = i ){
//                 $('#boxes').append(document.createElement('div'));
//                 $('#boxes div').css({
//                     'background-color':'grey',
//                     'width':'100px', 
//                     'height':'100px'
//                 });
//             }
        

function addBox(){
    $('#boxes').append(document.createElement('div'));
         $('#boxes div').css({
                'background-color':'grey',
                'width':'100px', 
                'height':'100px'
 });
}

// function numberColor () {
//     var numberinput = $('<input type = "number">');

//     for(var i =0; i<=10;i++){
//         if()
//     }
// }




 

// // regular array loop
// var array = [1,2,3,4];
// $.each(array, function(index, value){
//     console.log(index, value);
//     // this* might not work
//     // used for looping through an array
// })

// array.each(function() {
//     // use to loop through elements
//     // this* will work
// })