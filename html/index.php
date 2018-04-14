<?php

$greeting = 'Hello';
$name = 'Enrique';

$names = [
  'Jeff',
  'John',
  'Mary'
];

$person = [
  'age' => 32,
  'hair' => 'brown',
  'career' => 'designer'
];
$person['name'] = 'Enrique';

unset($person['age']);

require 'index.view.php'

?>
