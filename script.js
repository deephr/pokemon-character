let container = document.querySelector('.container');
let adding = document.querySelector('.adding');
let reset = document.querySelector('button');

let count = 1;

adding.addEventListener('click', () => {
  let randomId = Math.floor(Math.random() * 100) + 1;

  let cardAdd = document.createElement('div');
  let img = document.createElement('img');

  img.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${randomId}.png`;
  img.alt = `Pokemon #${randomId}`;

  cardAdd.classList.add('card', 'flip-in');
  cardAdd.appendChild(img);
  container.appendChild(cardAdd);

  // Small delay to trigger the flip effect
  setTimeout(() => {
    cardAdd.classList.add('flip');
  }, 50);

  count++;
});
reset.addEventListener('click', () => {
  location.reload();
});
