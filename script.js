const cards = document.getElementsByClassName(".card");

// console.log("hkhj");

cards.forEach((card) => {
  card.addEventListener("click", flipCard);
});

var flipCard = () => {
  console.log("jhjh");

  this.classList.add(".flip");
};
