<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];
    
    // Tämä tulostaa lomakkeen tiedot
    echo "Nimi: $name <br>";
    echo "Sähköposti: $email <br>";
    echo "Viesti: $message <br>";
} else {
    echo "Virhe: Lomaketta ei lähetetty oikein.";
}
?>
