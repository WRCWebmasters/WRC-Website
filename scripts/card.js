var cardDivs = [];
var cards = document.getElementsByClassName("quick-link");
console.log(cards);
for (var i = 0; i < cards.length; i++) {
  cardDivs.push(
    `<a class = "redirect" href="${cards[i].dataset.href}">
      <div class = "card-img">
        <img
          class="card-img-top"
          src="${cards[i].dataset.src}"
          alt="${cards[i].dataset.title}"
        />
      </div>
      <div class = "card-text">${cards[i].dataset.title}</div>
      
    </a>`
  );
}

for (var i = 0; i < cards.length; i++) {
  let cardElement = document.createElement("div");
  cardElement.innerHTML = cardDivs[i];
  cards[i].appendChild(cardElement);
}
