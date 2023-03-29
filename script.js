let score=0;

let sc=document.querySelector(".score");
sc.innerText="Score: " + score;
let cards = document.querySelectorAll(".card");

let firstCard=null;
let secondCard=null;
let flipped = false;

cards.forEach((e) => e.addEventListener("click", flipCard));

function flipCard() {
  if(secondCard===null){
    this.classList.add("flip");
    if (!flipped) {
      firstCard = this;
      flipped = true;
    } else {
      secondCard = this;
      chek();
    }
  }
}

function updateScore(){
  score++;
  sc.innerText="Score: " + score;
}

function chek() {
  if (firstCard.dataset.image === secondCard.dataset.image) success();
  else fail();
}
function success() {
  // console.log("succes");
  updateScore();
  setTimeout(() => {
    firstCard.classList.remove("flip");
    secondCard.classList.remove("flip");
    reset();
  }, 1000);
  // firstCard.removeEventListener("click", flipCard);
  // secondCard.removeEventListener("click", flipCard);
}

function fail() {
  //  console.log("fail");
  setTimeout(() => {
    firstCard.classList.remove("flip");
    secondCard.classList.remove("flip");
    reset();
  }, 1000);
}

function reset() {
  flipped = false;
  firstCard = null;
  secondCard = null;
}

(function shuffle(){
    cards.forEach((e)=>{
        let index=Math.floor(Math.random()*16);
        e.style.order=index;
    })
})();
