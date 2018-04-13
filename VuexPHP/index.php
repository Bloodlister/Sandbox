<?php
header('Access-Control-Allow-Origin: /magic.php');
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
    <script src="https://cdn.jsdelivr.net/npm/vue-resource@1.5.0"></script>
</head>
<body>
    <div id="app">
        <div id="nav">
            <username user_prop="<?= $_SESSION['username'] != null ? $_SESSION['username'] : 'No user' ?>"></username>
            <logout></logout>
            <hr>
        </div>
        <loginform></loginform>
        <sub-component></sub-component>
        <hr>
        <hr>
        <hr>
        <hr>
        <getname></getname>
    </div>

    <div id="container">
        <namefield v-for="n in fields" :field="n"></namefield>
        <div @click="newField"><button type="button">Magic</button></div>
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