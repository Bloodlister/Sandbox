<?php
session_start();
if (isset($_SESSION['username'])) {
    header('localhost:3000');
}

$creds = [
    'username' => 'ninja',
    'pass' => '123456'
];

if ($_POST['username'] == $creds['username'] &&
    $_POST['pass'] == $creds['pass']) {
    $_SESSION['username'] = $creds['username'];
}