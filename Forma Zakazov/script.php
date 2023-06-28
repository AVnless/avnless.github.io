<?php
// Получение данных из формы
$email = $_POST['email'];
$password = $_POST['password'];
$tovar = $_POST['tovar'];
$adres = $_POST['adres'];
$wish = $_POST['myInput'];

// Подключение к базе данных
$servername = "localhost";
$username = "root";
$db_password = "H5cbe8A4";
$dbname = "shop";

$conn = new mysqli($servername, $username, $db_password, $dbname);
if ($conn->connect_error) {
    die("Fail connect: " . $conn->connect_error);
}

// Проверка данных формы
if ($email && $password && $tovar && $adres) {
    // Подготовленный SQL-запрос для вставки данных в таблицу
    $stmt = $conn->prepare("INSERT INTO users (email, password, tovar, adres, additional_wishes) VALUES (?, ?, ?, ?, ?)");
    $stmt->bind_param("sssss", $email, $password, $tovar, $adres, $wish);

    if ($stmt->execute()) {
        echo "Sucess123";
    } else {
        echo "Fail123: " . $stmt->error;
    }

    $stmt->close();
} else {
    echo "Not correct.";
}

$conn->close();
?>
