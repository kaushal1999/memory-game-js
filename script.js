let score = 0;

let sc = document.querySelector(".score");
sc.innerText = "Score: " + score;
let cards = document.querySelectorAll(".card");

let firstCard = null;
let secondCard = null;
let flipped = false;

let flipCard = (e) => {
  // console.log(e);
  if (secondCard === null) {
    e.classList.add("flip");
    if (!flipped) {
      firstCard = e;
      flipped = true;
    } else {
      secondCard = e;
      chek();
    }
  }
};

cards.forEach((e) => e.addEventListener("click", () => flipCard(e)));

let updateScore = () => {
  score++;
  sc.innerText = "Score: " + score;
};

let chek = () => {
  if (firstCard.dataset.image === secondCard.dataset.image) success();
  else fail();
};
let success = () => {
  // console.log("succes");
  updateScore();
  setTimeout(() => {
    firstCard.classList.remove("flip");
    secondCard.classList.remove("flip");
    reset();
  }, 1000);
  // firstCard.removeEventListener("click", flipCard);
  // secondCard.removeEventListener("click", flipCard);
};

let fail = () => {
  //  console.log("fail");
  setTimeout(() => {
    firstCard.classList.remove("flip");
    secondCard.classList.remove("flip");
    reset();
  }, 1000);
};

let reset=()=> {
  flipped = false;
  firstCard = null;
  secondCard = null;
}

let shuffle=(()=> {
  cards.forEach((e) => {
    let index = Math.floor(Math.random() * 16);
    e.style.order = index;
  });
})();
