<?php

require_once 'vendor/autoload.php';

$router = new \Klein\Klein();

$router->respond('GET', '/portfolio/?', function () {
    return 'Страница потрфолио!';
});

$router->respond('GET', '/contacts/?', function () {
    return 'Страница контактов!';
});

$router->respond('GET', '/auth/?', function () {
    return 'Страница авторизации!';
});

$router->respond('GET', '/?', function () {
    return 'Главная страница!';
});

$router->dispatch();