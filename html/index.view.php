<html>
<head>
<head>
<body>
  <header>
    <h1>
      <?= "$greeting, " . "$name"  ?>
    </h1>
    <ul>
      <?php foreach ($names as $name) : ?>
        <li><?= $name; ?></li>
      <?php endforeach; ?>

      <?php
        foreach ($person as $key => $value) {
          echo "<li><strong>$key:</strong> $value</li>";
        }
      ?>
    </ul>
    <?php var_dump($person); ?>


  </header>
</body>
</html>

