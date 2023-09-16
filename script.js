"use strict";
const secc1 = document.querySelector(".section0");
const secc2 = document.querySelector(".section1");
const dicebtn = document.querySelector(".roll");
const holdbtn = document.querySelector(".hold");
const resetbtn = document.querySelector(".new");
const hide = document.querySelector(".hidden");
const gg = document.querySelector(".dicesize");

const p1 = document.querySelector(".player0");
const p2 = document.querySelector(".player1");
const ps1 = document.getElementById("p0-current");
const ps2 = document.getElementById("p1-current");

let currentScore = 0;
let activeplayer = 0;
let gamePlaying = true;
let score;
score = [0, 0];

dicebtn.addEventListener("click", function () {
  if (gamePlaying) {
    let random = Math.trunc(Math.random() * 6) + 1;
    gg.classList.remove("hi");
    console.log(random);
    document.getElementById("hh").src = `dice-${random}.png`;
    if (random !== 1) {
      currentScore += random;
      document.getElementById(`p${activeplayer}-current`).textContent =
        currentScore;
    } else {
      document.getElementById(`p${activeplayer}-current`).textContent = 0;
      currentScore = 0;
      activeplayer = activeplayer === 0 ? 1 : 0;
      secc1.classList.toggle("sec");
      secc2.classList.toggle("sec");
    }
  }
});

document.querySelector(".hold").addEventListener("click", function () {
  if (gamePlaying) {
    score[activeplayer] += currentScore;
    document.querySelector(`.player${activeplayer}`).textContent =
      score[activeplayer];

    if (score[activeplayer] >= 50) {
      console.log("finish");
      gamePlaying = false;
      // document.getElementById("rolldicedis").disabled = true;
      document.querySelector(`.section${activeplayer}`).classList.add("winner");
      gg.classList.add("hi");
    } else {
      document.getElementById(`p${activeplayer}-current`).textContent = 0;
      currentScore = 0;
      activeplayer = activeplayer === 0 ? 1 : 0;
      secc1.classList.toggle("sec");
      secc2.classList.toggle("sec");
    }
  }
  //switchplayer
});

resetbtn.addEventListener("click", function () {
  gamePlaying = true;
  ps1.textContent = 0;
  ps2.textContent = 0;
  p1.textContent = 0;
  p2.textContent = 0;
  currentScore = 0;
  activeplayer = 0;
  score = [0, 0];

  gg.classList.add("hi");
  document.querySelector(`.section0`).classList.remove("winner");
  document.querySelector(`.section1`).classList.remove("winner");
  secc1.classList.add("sec");
  secc2.classList.remove("sec");
});
