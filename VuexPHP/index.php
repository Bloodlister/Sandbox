<?php
require 'app.php';
?>

<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Vue x PHP</title>
    <script src="vue.js"></script>
</head>
<body>
    <div id="app">
        <div id="nav"><?= $_SESSION['username'] != null ? $_SESSION['username'] : 'asdasd' ?></div>
        <testing></testing>
    </div>

    <?php
    $files = require 'components.php';
    foreach ($files['components'] as $file) {
        echo '<script src="' . $file . '"></script>';
    }
    ?>
    <script src="components/app.js"></script>
</body>
</html>