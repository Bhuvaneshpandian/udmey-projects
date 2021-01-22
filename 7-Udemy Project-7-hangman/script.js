const wordEl = document.getElementById('word');
const wrongLetterEl =document.getElementById('wrong-letters');
const palyagainBtn = document.getElementById('play-button');
const popup = document.getElementById('popup-container');
const notification = document.getElementById('notification-container');
const finalMessage = document.getElementById('final-message');


const figureParts = document.querySelectorAll('.figure-part');


const  words =['application','programing','engineering'];
let selectedWord = words[Math.floor(Math.random()*words.length)];

const correctWords =[];
const worngWords = [];

function displayWord(){

    wordEl.innerHTML =`
    ${selectedWord.split('')
.map(letter=>`
    <span class="letter">
    ${correctWords.includes(letter) ? letter : ''}
    </span>
    `
)
.join('')}`;


const innerword = wordEl.innerText.replace(/\n/g,'');
if(innerword === selectedWord){
finalMessage.innerText ="congurations! you win"
popup.style.display='flex'
}
}

function updateWrongLetterseL(){

wrongLetterEl.innerHTML = `
${worngWords.length > 0 ? '<p>Wrong</p>' : ''}
${worngWords.map(letter => `<span>${letter}</span>`)}
`;


figureParts.forEach((part, index) => {
const errors = worngWords.length;

if (index < errors) {
  part.style.display = 'block';
} else {
  part.style.display = 'none';
}
});

if(worngWords.length === figureParts.length){
    finalMessage.innerText ='Unfortunately you lost. 😕';
    popup.style.display="flex"
}



}


function showNotification() {
    notification.classList.add('show');

    setTimeout(()=>{
        notification.classList.remove('show');

    },2000)
}



window.addEventListener('keydown',e=>{

if(e.keyCode >=65 && e.keyCode <=90){
    const letter =e.key;

    if(selectedWord.includes(letter)){

        if(!correctWords.includes(letter)){
            correctWords.push(letter)

            displayWord();

        }else{
            showNotification();
        }

    }else{
        if(!worngWords.includes(letter)){
            worngWords.push(letter)
        
            updateWrongLetterseL();
        }else{
            showNotification()
        }
    }
}

});



palyagainBtn.addEventListener('click',()=>{
    correctWords.splice(0);
    worngWords.splice(0);

  selectedWord =  words[Math.floor(Math.random()*words.length)];

displayWord();

updateWrongLetterseL();

popup.style.display = 'none';

})


displayWord()