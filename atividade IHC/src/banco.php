<?php
$host = 'localhost';
$usuario = 'root';
$senha = '';
$banco = 'meu_banco'; // Substitua pelo nome do seu banco

// Criando a conexão com o banco de dados
$conn = new mysqli($host, $usuario, $senha, $banco);

// Verificando a conexão
if ($conn->connect_error) {
    die("Erro na conexão: " . $conn->connect_error);
}

// Verificando se o formulário foi enviado
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nome = $_POST["nome"];
    $email = $_POST["email"];

    // Inserir o usuário na tabela 'usuarios'
    $stmt = $conn->prepare("INSERT INTO usuarios (nome, email) VALUES (?, ?)");
    $stmt->bind_param("ss", $nome, $email);

    // Executando a consulta para inserir o usuário
    if ($stmt->execute()) {
        // Pegar o ID do último usuário inserido
        $id_usuario = $conn->insert_id;

        // Verificar se o usuário escolheu alguma área de interesse
        if (isset($_POST['interesses'])) {
            // Inserir as áreas de interesse do usuário
            foreach ($_POST['interesses'] as $id_interesse) {
                $stmt_interesse = $conn->prepare("INSERT INTO usuario_interesse (id_usuario, id_interesse) VALUES (?, ?)");
                $stmt_interesse->bind_param("ii", $id_usuario, $id_interesse);
                $stmt_interesse->execute();
            }
            echo "Usuário e áreas de interesse cadastrados com sucesso!";
        } else {
            echo "Usuário cadastrado, mas nenhuma área de interesse selecionada.";
        }
    } else {
        echo "Erro ao cadastrar: " . $stmt->error;
    }

    // Fechando a declaração e a conexão
    $stmt->close();
    $conn->close();
}
?>
