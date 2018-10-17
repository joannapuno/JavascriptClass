
var artistName = document.getElementById('searchArtist');
var songName = document.getElementById('searchSong');
var submitBtn = document.getElementById('submit');

var lyrics = {
    song: "",
    artist:""
}



submitBtn.addEventListener('click',function(event){
        event.preventDefault();

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
