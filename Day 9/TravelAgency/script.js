// Code by Joanna Puno
// Email: j.puno0909@gmail.com
// 10/19/2018
// CPNT 262 -WBD Web Client and Server Programming
// Instructor: Heather Tovery
// JavaScript


//for contact page, just do what heather said no object


// Current Day
let currentDate = new Date();
$('#currentDate').html(currentDate);

// Contact Agents
const agentNames = ['Jane Doe', 'John Smith','Joeee Smith'];
const agentPhone = ['403-555-7777','403-555-7777','403-555-7777'];

//change this to loop!!!
for(const value of agentNames) {
    $('.agent-info').append("<p>" + value +"</p>");
}
for(const value of agentPhone) {
    $('.agent-info').append("<p>" + value +"</p>");
    
}







