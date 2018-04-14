/* Exercises
------------------------------------------*/
// Favorite Fruits
{
  let fruits = ['uvas', 'sandía', 'durazno', 'mandarina', 'naranja', 'guayaba', 'papaya'];
  fruits = fruits.sort();
  var fruitsList = '';
  for (var i = 0; i < fruits.length; i++) {
    fruitsList += fruits[i] + ', ';
  }

  function favFruits() {
    const btnFavFruits = document.getElementById('btnFavFruits');

    document.querySelector('.favFruits .result').innerText = fruitsList;

    const blockInfo = document.querySelector('.favFruits .blockInfo');
    blockInfo.style.display ='block';
    blockInfo.className += ' sucess';
  }
  btnFavFruits.addEventListener('click', favFruits);
}


// Triangle
{
  var printLine = ''
  for (var line = "#"; line.length < 8; line += "#") {
    console.log(line);
    printLine = line + '<br>';
  }

  var answer = ''
  for (var n = 1; n <= 20; n++) {
    var output = "";
    if (n % 3 == 0)
      output += "múltiplo";
    if (n % 5 == 0)
      output += "No es múltiplo";
    console.log(output || n);
  }

  var size = 8;
  var board = "";
  for (var y = 0; y < size; y++) {
    for (var x = 0; x < size; x++) {
      if ((x + y) % 2 == 0)
        board += "&nbsp;";
      else
        board += "#";
    }
    board += "<br>";
  }
  //console.log(board);

  function makeTriangle() {
    const btnFavFruits = document.getElementById('btnMakeTriangle');

    document.querySelector('.makeTriangle .result').innerHTML = printLine;

    const blockInfo = document.querySelector('.makeTriangle .blockInfo');
    blockInfo.style.display ='block';
    blockInfo.className += ' sucess';
  }
  btnMakeTriangle.addEventListener('click', makeTriangle);
}
