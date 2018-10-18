
var artistName = document.getElementById('searchArtist');
var songName = document.getElementById('searchSong');
var submitBtn = document.getElementById('submit');
var errorMessage = document.getElementById('error');

var lyrics = {
    song: "",
    artist:""
}



submitBtn.addEventListener('click',function(event){
        event.preventDefault();
        validateForm();

        if(artistName){
            lyrics.artist = artistName.value;

        }
        if(songName){
            lyrics.song = songName.value;
        }

fetch('https://api.lyrics.ovh/v1/' + artistName.value +"/" +songName.value +"'")
.then(function(response){
    return response.json();
})
.then(function(data){
    var newLyrics = data.lyrics;
    newLyrics = newLyrics.replace(/(?:\r\n|\r|\n)/g, '<br>');
    document.getElementById('lyrics').innerHTML = '"' + newLyrics + '"';
    
    
})

});


// Validation

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
      

    }
  }

