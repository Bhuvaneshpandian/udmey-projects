var musicContainer = document.getElementById('music-container');
var progress = document.getElementById('progress')
var play = document.getElementById('play');
var prev = document.getElementById('prev');
var next = document.getElementById('next');
var title = document.getElementById('title');
var cover = document.getElementById('cover')
var audio =document.getElementById('audio');
console.log(audio)
var progress = document.getElementById('progress');
var progressContainer = document.getElementById('progress-container');

var songs =['hey','summer','ukulele']
var songIndex = 0;



//loadsongs//
function loadedSongs(songs){
title.innerHTML=songs;
audio.src = `music/${songs}.mp3`;
cover.src = `images/${songs}.jpg`;
}


//play songs///

function playSongs(){

  musicContainer.classList.add('play');
  play.querySelector('i.fas').classList.remove('fa-play');
  play.querySelector('i.fas').classList.add('fa-pause');
  audio.play();
}

//pause songs//
function pauseSongs() {
  musicContainer.classList.remove('play');
  play.querySelector('i.fas').classList.add('fa-play');
  play.querySelector('i.fas').classList.remove('fa-pause');
  audio.pause();
}


//prevsongs//
prev.addEventListener('click', prevSongs)
function prevSongs(){
songIndex --;

if(songIndex <0){
    songIndex = songs.length-1;
}
loadedSongs(songs[songIndex]);

  audio.play()
  

}

//next songs//
next.addEventListener('click',nextSongs)

function nextSongs(){
    songIndex++;
 if (songIndex > songs.length - 1) {
    songIndex = 0;
  }

  loadedSongs(songs[songIndex]);
audio.play();

}


function progressTime(){

 var totalDuration = audio.duration;
var currentDuration = audio.currentTime; 
const progressDuration = (currentDuration / totalDuration) * 100;
progress.style.width = `${progressDuration}%`;

}
function setProgressTime() {
 audio.currentTime =  audio.duration; 

}

play.addEventListener('click',function playMusic(){
  var playing =  musicContainer.classList.contains('play');
  if(playing){
      pauseSongs()
  }
  else{
      playSongs()
  }
  })

audio.addEventListener('timeupdate',progressTime);
progressContainer.addEventListener('click', setProgressTime);
audio.addEventListener('ended', nextSongs);