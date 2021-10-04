<?php


if ($_FILES['thefile']['size'] > 0) {
    $file = $_FILES['thefile'];
    $fileName = $file['name'];
    $fileTmpName = $file['tmp_name'];

    echo $file;

    $destination = "./images/" . mt_rand() . $fileName;
    move_uploaded_file($fileTmpName, $destination);
}


?>


<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>fetchAPI </title>
</head>

<body>

</body>

</html>