// Fetch Data Request

// fetch('https://jsonplaceholder.typicode.com/users')
// //after getting the data, then you get a 'response'
// .then(function(response){
//     return response.json(); //convert the data in there to a json 
// }) //we then need to access it
// .then(function(data){
//     for(var i =0;i < data.length; i++){
//         console.log(data[i].username);//accessing a property
//         console.log(data[i].id);//accessing a property
//         console.log(data[i].address);//accessing a property
        
//     }
//     console.log(data);//all data
    
// })

//.then uses the function before it and adds what comes after .then
//function(data) waits for function(response)



// Sending Data with Fetch
// 1. Create content that you want to send
var user = {
    username:"joanna",
    id: 28
}

// // 2.Fetch URL
// fetch('https://jsonplaceholder.typicode.com/users', {
//     //Set your method
//     method: 'POST',

//     //Set your headers
//     headers: {
//         'Content-Type':'application/json'
//     },
//     //Set your body
//     body:JSON.stringify(user)
// })
// .then(function(response){
//     return response.json();
// })
// .then(function(data){
//     console.log(data);
// })


// function sendData(url {
//     fetch(url, {

//     })
// })
// sendData('https://jsonplaceholder.typicode.com/users');
// You can turn your fetch into a function

//Request Method
// POST(create new) - PUT(update data) - DEL(delete data)

// Handling Errors
// 1. You tried to fetch a resource that doesn't exist.
// 2. You're unauthorized to fetch the resource.
// 3. You entered some arguments incorrectly.
// 4. The server throws an error.
// 5. The server timed out.
// 6. The server crashed.
// 7. The API changed


// fetch('https://jsonplaceholder.typicode.com/404')
// .then(function(response){
//     if(!response.ok){
//         throw Error(response.statusText);
//     }
//     return response.json();
// })
// .then(function(data){
//     console.log(data);
// })
// .catch(function(error){
//     console.log("The error:", error);
// })


fetch('https://api.github.com/users/joannapuno')
.then (function(response){
    return response.json();
})
.then(function(data){
    console.log(data);
    console.log(data.public_repos);
    console.log(data.name);
    console.log(data.url);

})

fetch('https://api.github.com/users/joannapuno/repos')
.then(function(response){
    return response.json();
})
.then(function(data){
    console.log(data[7].name);
    
})