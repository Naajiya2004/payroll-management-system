<?php
// MySQL database connection details
$servername = "localhost"; // Database server (usually localhost)
$username = "root"; // Database username
$password = ""; // Database password (if any)
$dbname = "my_database"; // Database name

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Query the database
$sql = "SELECT * FROM users"; // Replace `users` with your table name
$result = $conn->query($sql);

// Prepare response
if ($result->num_rows > 0) {
    // Output data of each row
    while($row = $result->fetch_assoc()) {
        echo "id: " . $row["id"]. " - Name: " . $row["name"]. "<br>"; // Adjust based on your table columns
    }
} else {
    echo "0 results";
}

$conn->close();
?>
