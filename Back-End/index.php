<?php
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');

$apiKey = 'c1cd92fabebd4a439db45730232009';

if (isset($_GET['city'])) {
    $city = $_GET['city'];
    $url = "https://api.weatherapi.com/v1/current.json?key={$apiKey}&q={$city}";

    $response = file_get_contents($url);

    if ($response === false) {
        http_response_code(500);
        echo json_encode(array('error' => 'An error occurred while fetching weather data.'));
    } else {
        echo $response;
    }
} else {
    http_response_code(400);
    echo json_encode(array('error' => 'City parameter is missing.'));
}
?>
