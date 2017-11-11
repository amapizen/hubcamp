{
  const rainbow = ['red','orange','yellow','green','blue','rebeccapurple','violet'];

  const btnJumbo = document.getElementById('link');

  function changeColor() {
    //document.body.style.background = 'red';
    document.body.style.background = rainbow[ Math.floor( 7*Math.random()   ) ];
  }
  btnJumbo.addEventListener('click', changeColor);
}

/* Variables
------------------------------------------*/
// Global
let friend        = 'Scarlet Johanson';

// Local
{
  const aquaman = {value: 'heroe'};
  let flash = aquaman;
  flash.value = 'humano';

  const bestFriend     = 'Cate Blanchett';
  let otherFriend      = 'Monica Bellucci';

  var newFriend = {
      name: 'Megan Fox'
  };
  newFriend.name       = 'Gal Gadot';
  //console.log('Tus amigas son: ' + friend + ' y ' + newFriend.name );

  function aquamanIncognita() {
    const btnAquaman = document.getElementById('btnAquaman');
    const nameAquaman = document.querySelector('.aquaman .form-control');
    nameAquaman.innerText = 'Sí, Aquaman es ' + aquaman.value + '. Jojo.';
  }
  btnAquaman.addEventListener('click', aquamanIncognita);
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
    const nameHero = document.querySelector('.hero .form-control');
    nameHero.innerText = heroes[3].name + ', obviamente.';
  }
  btnHero.addEventListener('click', greatestHero);
}


/* Strings
------------------------------------------*/
// Global
let name = 'Alexandria';

// Local
{

  let peje = 'Who is pejes? it\'s me, \n AMLO \\/ your next president';

  console.log(peje);

}
console.log(name.toUppercase);
