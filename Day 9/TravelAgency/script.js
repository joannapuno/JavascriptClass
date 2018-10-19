// Code by Joanna Puno
// Email: j.puno0909@gmail.com
// 10/19/2018
// CPNT 262 -WBD Web Client and Server Programming
// Instructor: Heather Tovery
// JavaScript


// Mobile Menu

var button = document.querySelector('#hamburger-button')
var menu = document.querySelector('#menu')
var closeButton = document.querySelector('#close-button')

function openMenu() {
    menu.className = 'menu'
}

function closeMenu() {
    menu.className = 'menu closed'
}


button.addEventListener('click', openMenu)
closeButton.addEventListener('click', closeMenu)



// Footer Current Date
let currentDate = new Date();
$('#currentDate').html(currentDate);

// Contact Agents
const agentNames = ['Jenna Garcia', 'Chloe Smith','Jacob Asper','Jem Puno'];
const agentPhone = ['403-535-7297','403-555-7357','403-555-5477','403-555-7677'];

$(agentNames).each(function(i) {
    $('h5')[i].append(agentNames[i]);
    $('.agent-box p')[i].append(agentPhone[i]);
  });


//Package Deal

const packageImages = [
    './img/agents/jem.jpg',
    './img/agents/jacob.jpg',
    './img/agents/chloe.jpg'
];


$(packageImages).each(function(i) {
    let img = ($('.products-content img')[i]);
    let info = ($('.products-content')[i]);
        $(info).on({
        mouseenter: function(){
            
            $(img).attr('src',packageImages[i]);
        },
        mouseleave: function() {
        
            $(img).attr('src','./img/beach.jpg');
        }
    })
});


//Flying plane



$('#flying-plane').each(function(i){
    
})







