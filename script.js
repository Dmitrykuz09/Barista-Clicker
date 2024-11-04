let maker = document.querySelector(".counter_c");
let beans = document.querySelector(".counter_b");
let money = document.querySelector(".counter_m");
let mSound = document.getElementById("money-sound");
let bSound = document.getElementById("beans-sound");
let pSound = document.getElementById("pour-sound");

function incrementMaker() {
  maker.innerHTML = parseFloat(maker.innerHTML) + 1;
  beans.innerHTML = parseFloat(beans.innerHTML) - 10;
}

function incrementBeans() {
  beans.innerHTML = parseFloat(beans.innerHTML) + 25;
  money.innerHTML = parseFloat(money.innerHTML) - 2;
}

function incrementMoney() {
  money.innerHTML = parseFloat(money.innerHTML) + 2;
  maker.innerHTML = parseFloat(maker.innerHTML) - 1;
}
function SoundMoney() {
  mSound.innerHTML = mSound.play();
}
function SoundBeans() {
  bSound.innerHTML = bSound.play();
}
function SoundPour() {
  pSound.innerHTML = pSound.play();
}
