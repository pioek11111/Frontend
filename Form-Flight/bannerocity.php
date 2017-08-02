<html>
  <body>
    <?php
      $num = rand(1000, 10000);
      $message = $_POST['message'];
      $zipcode = $_POST['zipcode'];
      $date = $_POST['date'];
      $name = $_POST['name'];
      $phone = $_POST['phone'];
      $email = $_POST['email'];

      echo "<h1>Banerolot</h1>";
      echo "<h2>Potwierdzenie zamówienia</h2>";
      echo "<strong>Numer zamówienia" . $num . "</strong><br />";
      echo "Treœæ komunikatu: <span style='font-family:monospace; font-size:x-large'><strong>" . $message . "</strong></span><br />";
      echo "Kod pocztowy: " . $zipcode . "<br />";
      echo "Data przelotu: " . $date . "<br />";
      echo "Personalia: " . $name . "<br />";
      echo "Numer telefonu: " . $phone . "<br />";
      echo "E-mail: " . $email . "<br />";
    ?>
  </body>
</html>
