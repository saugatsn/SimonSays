let gameSeq = [];
let userSeq = [];
let started = false;
let level = 0;
let h2 = document.querySelector("h2");
let btns = ["box0", "box1", "box2", "box3"];
document.addEventListener("keypress", () => {
  if (started == false) {
    console.log("Game is started");
    started = true;
    levelUp();
  }
});
function btnFlash(btn) {
  btn.classList.add("gameflash");
  setTimeout(() => {
    btn.classList.remove("gameflash");
  }, 500);
}
function userFlash(btn) {
  btn.classList.add("userflash");
  setTimeout(() => {
    btn.classList.remove("userflash");
  }, 500);
}

function levelUp() {
  userSeq = [];
  level++;
  h2.innerText = `Level ${level}`;
  let randInt = Math.floor(Math.random() * 4);
  randBox = btns[randInt];
  let btn = document.querySelector(`.box${randInt}`);
  gameSeq.push(randBox);
  console.log(gameSeq);
  btnFlash(btn);
}
function checkAns(index) {
  if (userSeq[index] == gameSeq[index]) {
    if (userSeq.length == gameSeq.length) {
      setTimeout(levelUp, 1000);
    }
  } else {
    h2.innerHTML = `Game over. Your score is <b> ${level} </b> <br> Press any key to start over.`;
    document.querySelector("body").style.backgroundColor = "orange";
    setTimeout(() => {
      document.querySelector("body").style.backgroundColor = "white";
    }, 200);
    reset();
  }
}

function btnPress() {
  box = this;
  userFlash(box);
  userBox = box.getAttribute("id");
  userSeq.push(userBox);
  checkAns(userSeq.length - 1);
}

let boxes = document.querySelectorAll(".box");
for (box of boxes) {
  box.addEventListener("click", btnPress);
}
function reset() {
  gameSeq = [];
  userSeq = [];
  level = 0;
  started = false;
}
