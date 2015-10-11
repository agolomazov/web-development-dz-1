<?php

return array(
    'base_url' => 'http://web-d1.local/',
    'database' => array(
        'host' => 'localhost',
        'user' => 'root',
        'password' => '',
        'dbname' => 'dz1'
    ),
    'captcha' => array(
        'public_key' => '6LfYjQ4TAAAAAKHz4KBheMnUqMDuSmvfK2JOaA6w',
        'secret_key' => '6LfYjQ4TAAAAAGOWnLHDXWrGYMjM9W6HgtajecOF',
        'url_check_request' => 'https://www.google.com/recaptcha/api/siteverify',
        'js_script' => "https://www.google.com/recaptcha/api.js"
    )
);