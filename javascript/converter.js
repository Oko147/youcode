let amountInputElement = document.querySelector(".js-amountInput");
let amountOutputElement = document.querySelector(".js-amountOutput");
let currencyOutputElement = document.querySelector(".js-currencyOutput");
let exchangeRate = document.querySelector(".js-exchangeRate");
let formElement = document.querySelector(".js-form");

let pln = 1;
let eur = 0.21;
let gbp = 0.18;
let usd = 0.2;
let dkk = 1.53;

formElement.addEventListener("submit", (event) => {
  event.preventDefault();

  let currencyOutput = currencyOutputElement.value;
  let amountInput = amountInputElement.value;

  let amountOutput;
  switch (currencyOutput) {
    case "EUR":
      exchangeRate.innerText = eur;
      amountOutput = amountInput * eur;
      break;

    case "GBP":
      exchangeRate.innerText = gbp;
      amountOutput = amountInput * gbp;
      break;

    case "USD":
      exchangeRate.innerText = usd;
      amountOutput = amountInput * usd;
      break;

    case "DKK":
      exchangeRate.innerText = dkk;
      amountOutput = amountInput * dkk;
      break;
  }

  amountOutputElement.innerText = amountOutput.toFixed(2);
});
