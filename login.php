<?php

$user = "admin";
$passw = "$2y$10$9s3p.UvDJqybK12KqNHH.Or0Kx82VaLEtiUIVD0Qv.STcgkZ7F46W";
$usr_name = "";
$err_or = "";

if (!empty($_POST["usr"])) {
    if (array_key_exists("usr", $_POST) && array_key_exists("psw", $_POST) &&
        $_POST["usr"] == $user && password_verify($_POST["psw"], $passw)) {
        header("Location: https://beta.dev.itk.ppke.hu/webprog/vajle/iot_term_fot/iot_term.html");
    } else {
        $usr_name = $_POST["usr"];
        $err_or = "Password error";
    }
}
?>

<form action="login.php" method="post" name="auth">
    <table>
        <tr>
            <td>User: </td> <td><input type="text" name="usr" id="username" value="<?php print($usr_name); ?>"></td>
        </tr>
        <tr>
            <td>Password: </td> <td><input type="password" name="psw"></td>
        </tr>
    </table>
    <?php print("<b style='color: red'>$err_or</b><br>"); ?>
    <input type="submit"><br>
</form>