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

    document.querySelector('.animals .result').innerText = animalsList;

    const blockInfo = document.querySelector('.animals .blockInfo');
    blockInfo.style.display ='block';
    blockInfo.className += ' sucess';
  }
  btnAnimals.addEventListener('click', searchAnimal);
}



/* IF else
------------------------------------------*/
{
  function assignGrade(score) {
    if (score >= 90)
      return 'Muy bueno';
    else if (score >= 80)
      return 'Bueno';
    else if (score >= 70)
      return 'Regular';
    else
      return 'No satisfactorio';
  }
  function ifElse() {
    const btnIfElse = document.getElementById('btnIfElse');

    document.querySelector('.ifElse .result').innerText = assignGrade(80);

    const blockInfo = document.querySelector('.ifElse .blockInfo');
    blockInfo.style.display ='block';
    blockInfo.className += ' sucess';
  }
  btnIfElse.addEventListener('click', ifElse);
}
