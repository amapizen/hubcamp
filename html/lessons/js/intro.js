/* Variables
------------------------------------------*/
// Global
const newFriend        = 'Scarlet Johansson';

// Local
{
  const bestFriend  = 'Cate Blanchett';
  let newFriend     = bestFriend;
  newFriend         = 'Kendall Jenner';

  function friendQuestion() {
    const btnFriend = document.getElementById('btnFriend');

    const bestFriendResult = document.querySelector('.friend .result-1');
    bestFriendResult.innerText = bestFriend;

    const newFriendResult = document.querySelector('.friend .result-2');
    newFriendResult.innerText = newFriend;

    const blockInfo = document.querySelector('.friend .blockInfo');
    blockInfo.style.display ='block';
    blockInfo.className += ' sucess';
  }
  btnFriend.addEventListener('click', friendQuestion);


  const flash   = {power: 'velocidad'};
  let aquaman   = flash;
  aquaman.power = 'respira bajo el agua';

  function aquamanQuestion() {
    const btnAquaman = document.getElementById('btnAquaman');

    const nameResult = document.querySelector('.aquaman .result');
    nameResult.innerText = flash.power;

    //$('.blockInfo').show();
    const blockInfo = document.querySelector('.aquaman .blockInfo');
    blockInfo.style.display ='block';
    blockInfo.className += ' sucess';
  }
  btnAquaman.addEventListener('click', aquamanQuestion);
}



/* Tipos de datos
------------------------------------------*/
// Local
{
  let missingHeroes = ['Superman', 'Green Lantern', 'Shazam', 'Hawkgirl'];
  let heroes = [
      {
          name: 'Flash',
          alterEgo: 'Barry Allen',
          city: 'Central City',
          power: 'Speed Force',
          foe: 'Reverse Flash'
      },
      {name: 'Wonder Woman'},
      {name: 'Aquaman'},
      {name: 'Batman'},
      {name: 'Cyborg'}
  ];
  let batman = {
      name: 'Batman',
      alterEgo: 'Bruce Wayne',
      city: 'Gotham',
      power: 'Intelligence and money',
      foe: 'The Joker'
  };

  //console.log(heroes);
  //console.log(heroes[3]);

  function greatestHero() {
    const btnHero = document.getElementById('btnHero');

    const nameHero = document.querySelector('.hero .result');
    nameHero.innerText = heroes[3].name + ', obviamente.';

    const blockInfo = document.querySelector('.hero .blockInfo');
    blockInfo.style.display ='block';
    blockInfo.className += ' sucess';
  }
  btnHero.addEventListener('click', greatestHero);
}



/* Strings
------------------------------------------*/
// Local
{
  let song = 'When I had the river a dream of the ocean was enough, was so enough.';
  const start = song.indexOf(',');
  const end = song.indexOf('.', start+1);
  const textBlock = song.substring(start+1, end);

  function songText() {
    const btnSongText = document.getElementById('btnSongText');

    const textBlockResult = document.querySelector('.songText .result');
    textBlockResult.innerText = textBlock;

    const blockInfo = document.querySelector('.songText .blockInfo');
    blockInfo.style.display ='block';
    blockInfo.className += ' sucess';
  }
  btnSongText.addEventListener('click', songText);
}



/* Numbers
------------------------------------------*/
// Local
{
  let iphonePrice = 23499;

  function phonePrice() {
    const btnPhonePrice = document.getElementById('btnPhonePrice');

    let iphonePrice = Number(document.querySelector('.phonePrice #total').value);
    let savingPrice = iphonePrice * (12/100).toFixed(2);
    let totalPrice = iphonePrice - savingPrice.toFixed(2);

    const textPhonePrice = document.querySelector('.phonePrice .result-price');
    textPhonePrice.innerHTML = '$ ' + totalPrice;

    const textPhoneSaving = document.querySelector('.phonePrice .result-saving');
    textPhoneSaving.innerHTML = '$ ' + savingPrice;

    const blockInfo = document.querySelector('.phonePrice .blockInfo');
    blockInfo.style.display ='block';
    blockInfo.className += ' sucess';
  }
  btnPhonePrice.addEventListener('click', phonePrice);
}




/* Jumbotron
------------------------------------------*/
// Local
{
  const rainbow = ['red','orange','yellow','green','blue','rebeccapurple','violet'];
  const btnJumbo = document.getElementById('link');

  function changeColor() {

    document.body.style.background = rainbow[ Math.floor(Math.random() * 7)];
  }
  btnJumbo.addEventListener('click', changeColor);
}
