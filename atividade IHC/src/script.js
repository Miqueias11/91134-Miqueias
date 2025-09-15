const form = document.getElementById("formulario");
const feedback = document.getElementById("feedback");

form.addEventListener("submit", function(event) {
    event.preventDefault(); // para não recarregar a página

    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const interesses = document.querySelectorAll('input[name="interesses[]"]:checked');
    
    let areas = [];
    interesses.forEach(function(interesse) {
        areas.push(interesse.value);
    });

    if (nome && email && areas.length > 0) {
        feedback.textContent = `Obrigado, ${nome}! Sua preferência por ${areas.join(", ").toUpperCase()} foi registrada com sucesso.`;
        feedback.style.color = "purple";
        
        // Dados do formulário
        const formData = new FormData();
        formData.append("nome", nome);
        formData.append("email", email);
        formData.append("interesses", JSON.stringify(areas)); // Convertendo a lista de interesses em JSON

        // Enviando os dados via fetch
        fetch("teste.php", {
            method: "POST",
            body: formData,
        })
        .then(response => response.text())
        .then(data => {
            // Exibindo o feedback retornado pelo PHP
            feedback.textContent = data;
            feedback.style.color = data.includes('Erro') ? "red" : "green";
        })
        .catch(error => {
            feedback.textContent = "Erro ao enviar os dados. Tente novamente.";
            feedback.style.color = "red";
        });

        form.reset(); // Limpar o formulário após o envio
    } else {
        feedback.textContent = "Por favor, preencha todos os campos obrigatórios.";
        feedback.style.color = "red";
    }
});
