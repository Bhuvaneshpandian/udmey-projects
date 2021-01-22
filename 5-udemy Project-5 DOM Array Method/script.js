const main = document.getElementById('main');
const addUser = document.getElementById('addUser');
const doubleMoney = document.getElementById('doubleMoney');
const millionaires = document.getElementById('millionaires');
const sort = document.getElementById('sort');
const calculateWealth = document.getElementById('calculateWealth');

let data =[];

getRandomUser()
getRandomUser()
getRandomUser() 





async function getRandomUser(){
const res = await fetch('https://randomuser.me/api/');
const data = await res.json();
const user = data.results[0];
const newUser = {
 name: `${user.name.first} ${user.name.last}`,
 money: Math.floor(Math.random() *10000000)
 };
    addData(newUser)
}
 
 

function addData(obj){
    data.push(obj)
    setDomValue(); 
}

function setDomValue(values = data){
   main.innerHTML =`<h2><strong>Person</strong>Wealth</h2>`
   values.forEach((value)=>{
    const element = document.createElement(`div`);
    element.classList.add('person')
    element.innerHTML =   ` <strong>${value.name}</strong> ${moneyFormt(value.money)}`
    main.appendChild(element);
   })
}

function moneyFormt(number){
   return `$`+ (number).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');  
}


function moneyDouble(){
   data =  data.map((user)=>{
      return( {...user, money: user.money * 2})
   });
   setDomValue();
} 

function sortRich(){
   data.sort((a,b) =>  b.money - a.money)
   setDomValue()
}

function showMillionaires(){

 data = data.filter(user => user.money > 1000000)
  setDomValue()

}

function calculateWealthTotal(){

   const wealth = data.reduce((sum,user)=>
      (sum += user.money) ,0 );

      const wealthElement = document.createElement(`div`);
      wealthElement.innerHTML = `<h4>Total Wealth: <strong>${moneyFormt(
         wealth
       )}</strong></h4>`;
       main.appendChild(wealthElement);
   

}


addUser.addEventListener('click', getRandomUser);
doubleMoney.addEventListener ('click', moneyDouble); 
sort.addEventListener('click',sortRich);
millionaires.addEventListener('click',showMillionaires);
calculateWealth.addEventListener('click',calculateWealthTotal);