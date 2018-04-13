<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT');
header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');
session_start();
$_SESSION['username'] = $_REQUEST['username'];

echo json_encode(['username' => $_SESSION['username']]);