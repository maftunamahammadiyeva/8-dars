const elForm = document.querySelector(".form");
const elInput = document.querySelector(".input");
const elResultWalk = document.querySelector(".result-walk");
const elResultBike = document.querySelector(".result-bike");
const elResultCar = document.querySelector(".result-car");
const elResultAirplan = document.querySelector(".result-airplan");

const walk = 3.6;
const bike = 20.1;
const car = 70;
const airplan = 800;

elForm.addEventListener("submit", (evt) => {
  evt.preventDefault();
  const inputValue = elInput.value;
  if (inputValue > 0) {
    const calcWalk = inputValue / walk;
    const walkHour = Math.floor(calcWalk);
    const walkMinut = Math.round((calcWalk - walkHour) * 60);
    elResultWalk.textContent = `${walkHour}soat ${walkMinut} minutda`;

    const calcBike = inputValue / bike;
    const bikeHours = Math.floor(calcBike);
    const bikeMinut = Math.round((calcBike - bikeHours) * 60);
    elResultBike.textContent = `${bikeHours} soat ${bikeMinut} minutda`;

    const calcCar = inputValue / car;
    const carHours = Math.floor(calcCar);
    const carMinut = Math.round((calcCar - carHours) * 60);
    elResultCar.textContent = `${carHours} soat ${carMinut} minutda`;

    const calcFly = inputValue / airplan;
    const flyHours = Math.floor(calcFly);
    const flyMinut = Math.round((calcFly - flyHours) * 60);
    elResultAirplan.textContent = `${flyHours} soat ${flyMinut} minutda`;
  }
});

//temperatur

const elFormTemperatur = document.querySelector(".form-t");
const elInputTemperatur = document.querySelector(".input-t");
const elResultTemperatur = document.querySelector(".result");

elFormTemperatur.addEventListener("submit", (evt) => {
  evt.preventDefault();
  const inputValueTem = elResultTemperatur.value;
  console.log(inputValueTem);
  if (inputValueTem >= 5) {
    const calcTem = (inputValueTem * 9);
    elResultTemperatur.textContent = calcTem;
  } else {
    elResultTemperatur.textContent = "Iltimos 5dan katta son kiriting";
  }
});
