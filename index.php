<!-- cadastro.php -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cadastro - FUT9 Imports</title>
    <link rel="stylesheet" href="css/styles.css">
</head>
<body>

<header>
    <h1>Cadastro - FUT9 Imports</h1>
</header>

<div class="container-form">

    <?php
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $nome = htmlspecialchars($_POST["nome"]);
        $email = htmlspecialchars($_POST["email"]);

        $servername = "localhost";
        $username = "seu_usuario";
        $password = "sua_senha";
        $dbname = "bde-commerce";

        $conexao = mysqli_connect($servername, $username, $password, $dbname);

        if (!$conexao) {
            die("Falha na conexão: " . mysqli_connect_error());
        }

        $query = "INSERT INTO usuarios (nome, email) VALUES ('$nome', '$email')";

        if (mysqli_query($conexao, $query)) {
            echo "<p>Cadastro realizado com sucesso para $nome ($email).</p>";
        } else {
            echo "Erro na inserção: " . mysqli_error($conexao);
        }

        mysqli_close($conexao);
    }
    ?>

    <form method="post" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]); ?>">
        <label for="nome">Nome:</label>
        <input type="text" name="nome" required>

        <label for="email">E-mail:</label>
        <input type="email" name="email" required>

        <button type="submit">Cadastrar</button>
    </form>

</div>

<script src="js/script.js"></script>

</body>
</html>
