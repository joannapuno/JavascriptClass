

var colorCube = randomColor();

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
  
  function addBox(){
    $('#boxes').append(document.createElement('div'));
         $('#boxes div').css({
                'background-color':colorCube,
                'width':'100px', 
                'height':'100px',
                'margin-right': '10px',
                'margin-bottom': '10px'
          });
}


  $('form').on('submit', function(event) {
    event.preventDefault();
    validateForm();

    var hueValue = $('#hue').val();
    var luminosityValue = $('#luminosity').val();
    
    if(hueValue) {
      console.log('theres a value');
    }

    if(luminosityValue){
      console.log('light!');
    }



    // addBox();
    
    });


  });







//   Color



// function generateColor(){
//   var counter = 1;
//   var numberBoxes = $('#number').val();

//   for(var i =1; i <= 10 ;i++){
//     if(counter === i){
//       // numberBoxes = counter;
//       addBox() * numberBoxes;
//     }
    
//   }
    
    
//   }


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
        



// function numberColor () {
//     var numberinput = $('<input type = "number">');

//     for(var i =0; i<=10;i++){
//         if()
//     }
// }

// $('form').on('button', function(event) {
  //   event.preventDefault();
  //   addBox()
  //   $('#boxes div').css({'background-color': veryRandom});
  //   });
  


 

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

