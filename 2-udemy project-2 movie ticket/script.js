 const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.occupied)');
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie');
let ticketPrice =  +movieSelect.value;

populateUi()

function selectedMovie(selectedMovie,moviePrice){

  localStorage.setItem('selectedMovie',(selectedMovie))

  localStorage.setItem('moviePrice',(moviePrice))



}

function updateCount(){

  const selectedSeats = document.querySelectorAll('.row .seat.selected');
  
const seatIndex = [...selectedSeats].map(seat => {
return[...seats].indexOf(seat);
});

localStorage.setItem('selectedSeats',JSON.stringify(seatIndex))


  const selectedSeatCount = selectedSeats.length;
     count.innerHTML = selectedSeatCount ;
     total.innerHTML =  ticketPrice * selectedSeatCount ;
}

function removeSheets(){
 
  const removeseats = document.querySelectorAll('.row .seat.selected');
  removeseats.forEach((seat) => {
    seat.classList.remove('selected');
count.innerHTML = 0 ;
    total.innerHTML =  0 ;
  });


}

function populateUi(){
  const selectedSeats = JSON.parse(localStorage.getItem('selectedSeats'))
  if(selectedSeats !== null && selectedSeats.length>0){
    seats.forEach(function(seat,index){
      if(selectedSeats.indexOf(index)>-1){
        seat.classList.add('selected')

      }
    });
  }
  const selectedMovieIndex = localStorage.getItem('selectedMovieIndex');
  if (selectedMovieIndex !== null){
    movieSelect.selectedIndex = selectedMovieIndex;
  }
}

movieSelect.addEventListener('change',function(e){
 if( ticketPrice = +e.target.value){
selectedMovie(e.target.selectedIndex,e.target.value)
updateCount();
} if(e.target.value){
  removeSheets()
} 
})
container.addEventListener('click',function(e){
  if(e.target.classList.contains('seat') && !e.target.classList.contains('occupied')){

    e.target.classList.toggle('selected')
 updateCount()
    
  } 

});

updateCount();


 

