/* Variables
------------------------------------------*/
// Global


// Local
{
  const animals = ['perro', 'gato', 'loro', 'hamster', 'pollo', 'tortuga', 'pez beta', 'gato'];
  animals.splice(animals.lastIndexOf('gato'),1,'paloma');
  let animalsList = animals.join(', ');

  function searchAnimal() {
    const btnAnimals = document.getElementById('btnAnimals');

    const animalsListResult = document.querySelector('.animals .result');
    animalsListResult.innerText = animalsList;

    const blockInfo = document.querySelector('.animals .blockInfo');
    blockInfo.style.display ='block';
    blockInfo.className += ' sucess';
  }
  btnAnimals.addEventListener('click', searchAnimal);
}
