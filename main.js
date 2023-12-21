let whitebg = document.querySelectorAll(".whitebg");
let computer = document.querySelectorAll(".computer");
let play = document.querySelector(".play");
let displaychoice = document.querySelector(".choices");
let random = Math.floor(Math.random() * 3);
console.log(random);
let triangle = document.querySelector(".triangle");
let winmodal = document.querySelector(".win-modal");
let winner = document.querySelector(".winner");
let score = JSON.parse(localStorage.getItem("score"));
let scored = document.querySelector(".score");
let compscore = JSON.parse(localStorage.getItem("compscore"));
let compscored = document.querySelector(".compscore");
let rulebutton = document.querySelector(".rule");
let showmodal = document.querySelector(".showmodal");
let close = document.querySelector(".close");
if (score) {
  scored.innerText = score;
}
if (compscore) {
  compscored.innerText = compscore;
}
let check;
let count = 0;
let compcount = 0;
whitebg.forEach((element, index) => {
  element.addEventListener("click", () => {
    triangle.style.display = "none";
    whitebg.forEach((item) => {
      item.style.display = "none";
    });
    element.style.display = "grid";
    element.classList.add("show");
    setTimeout(() => {
      computer[random].style.display = "grid";
      computer[random].classList.add("showright");
      displaychoice.style.display = "block";
    }, 1000);
    setTimeout(() => {
      if (random == index) {
        winmodal.style.display = "grid";
        winner.innerText = "TIE UP";
      } else if (
        (index == 0 && random == 1) ||
        (index == 2 && random == 0) ||
        (index == 1 && random == 2)
      ) {
        winmodal.style.display = "grid";
        winner.innerText = "YOU WIN";
        count = score;
        count++;
        check = count;
        scored.innerText = count;
        localStorage.setItem("score", JSON.stringify(count));
      } else {
        winmodal.style.display = "grid";
        winner.innerText = "PC WIN";
        compcount = compscore;
        compcount++;
        compscored.innerText = compcount;
        localStorage.setItem("compscore", JSON.stringify(compcount));
      }
    }, 1500);
  });
});
play.addEventListener("click", () => {
  window.location.reload();
});
console.log(computer[random]);

if (score >= 10) {
  function nextpage() {}
}
rulebutton.addEventListener("click", () => {
  showmodal.style.display = "flex";
});
close.addEventListener("click", () => {
  showmodal.style.display = "none";
});
