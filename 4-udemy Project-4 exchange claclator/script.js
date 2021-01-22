const currencyOneElement = document.getElementById('firstcurrency');
const currencyOneRate = document.getElementById('firstcurrencyvalue');
const currencyTwoElement = document.getElementById('secondcurrency');
const currencyTwoRate = document.getElementById('secondcurrencyvalue');

const rateValue = document.getElementById('rate');
const swap = document.getElementById('swap')
function calculate(){

    const currencyOne = currencyOneElement.value;
    const currencyTwo = currencyTwoElement.value;
    
    fetch(`https://api.exchangerate-api.com/v4/latest/${currencyOne}`)
.then(res => res.json())
.then(data =>{
    const rate = data.rates[currencyTwo];
    rateValue.innerHTML= `1 ${currencyOne} = ${rate} ${currencyTwo}`;

    currencyTwoRate.value = (currencyOneRate.value * rate).toFixed(3);
});
}
currencyOneElement.addEventListener('change',calculate)
currencyTwoElement.addEventListener('change',calculate)
currencyOneRate.addEventListener('input',calculate)
currencyTwoRate.addEventListener('input',calculate)
swap.addEventListener('click',()=>{
  
    let temp = currencyOneElement.value;
   currencyOneElement.value = currencyTwoElement.value;
   currencyTwoElement.value = temp;
    calculate();

})


calculate();