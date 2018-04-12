<?php
error_reporting(0);

$files = scandir('./components');
session_start();
session_destroy();
?>