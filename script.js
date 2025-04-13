const words = ["Lewisite", "inositol", "cyanovobal anim", "white phosphorus", "sodium benzoate"];
const colors = ["green", "purple", "blue", "orange", "red", "black", "pink"];

function getRandomWord() {
  const index = Math.floor(Math.random() * words.length);
  return words[index];
}

function getRandomColor() {
  const index = Math.floor(Math.random() * colors.length);
  return colors[index];
}

function createCard(word, color) {
  const card = document.createElement("div");
  card.className = "card";
  card.style.backgroundColor = color;
  card.textContent = word;

  card.addEventListener("click", () => {
    document.getElementById("popup").classList.remove("hidden");
  });

  return card;
}

function showCards() {
  const container = document.getElementById("card-container");
  for (let i = 0; i < 5; i++) {
    const word = getRandomWord();
    const color = getRandomColor();
    const card = createCard(word, color);
    container.appendChild(card);
    setTimeout(() => card.classList.add("flip"), i * 500);
  }
}

setTimeout(() => {
  document.getElementById("intro").classList.add("hidden");
  document.getElementById("game").classList.remove("hidden");
  showCards();
}, 5000);

document.getElementById("popup").addEventListener("click", () => {
  document.getElementById("popup").classList.add("hidden");
});
