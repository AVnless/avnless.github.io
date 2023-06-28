<?php
$servername = "localhost";
$username = "root";
$db_password = "H5cbe8A4";
$dbname = "shop";

// Create a connection
$conn = new mysqli($servername, $username, $db_password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Retrieve engine data from the database
$sql = "SELECT * FROM engines";
$result = $conn->query($sql);

$engines = array();

if ($result->num_rows > 0) {
    // Fetch data for each engine and add it to the engines array
    while ($row = $result->fetch_assoc()) {
        $engines[] = $row;
    }
}

// Close the database connection
$conn->close();

// Convert the engines array to JSON
$enginesJSON = json_encode($engines);

// Output the JSON data
echo "var enginesData = $enginesJSON;";
?>
