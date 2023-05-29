<?php


if (array_key_exists("setvalue", $_POST)) {
    file_put_contents("../../private/value.txt", $_POST["setvalue"]);
    print(file_get_contents("../../private/value.txt"));
}

if (array_key_exists("pow", $_POST)) {
    file_put_contents("../../private/power.txt", $_POST["pow"]);
    print(file_get_contents("../../private/power.txt"));
}

if (array_key_exists("val", $_POST)) {
    print(file_get_contents("../../private/value.txt"));
}

if (array_key_exists("poww", $_POST)) {
    print(file_get_contents("../../private/power.txt"));
}