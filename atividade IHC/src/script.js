const form = document.getElementById("formulario");
const feedback = document.getElementById("feedback");

form.addEventListener("submit", function(event) {
    event.preventDefault(); // para não recarregar a página.

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
        
        // Aqui, você pode enviar os dados para o PHP usando fetch ou AJAX se quiser enviar sem recarregar a página.
        
        form.reset(); // Limpar o formulário após o envio
    } else {
        feedback.textContent = "Por favor, preencha todos os campos obrigatórios.";
        feedback.style.color = "red";
    }
});
