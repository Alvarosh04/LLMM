<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <p>Bienvenido, usuario:<?php echo "<b>".$_POST["uname"]."</b>";?></p>
    <p> Tu clave es:<?php echo "<b>".$_POST["pass"]."</b>";?></p>
</body>
</html>