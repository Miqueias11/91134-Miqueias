const form = document.getElementById("formulario");
const feedback = document.getElementById("feedback");

form.addEventListener("submit", function(event) {
  event.preventDefault(); // para não recarregar página.

  const nome = document.getElementById("nome").value.trim();
  const email = document.getElementById("email").value.trim();
  const area = document.getElementById("area").value;

  if (nome && email && area) {
    feedback.textContent = `Obrigado, ${nome}! Sua preferência por ${area.toUpperCase()} foi registrada com sucesso.`;
    feedback.style.color = "purple";
    form.reset();
  } else {
    feedback.textContent = "Por favor, preencha todos os campos obrigatórios.";
    feedback.style.color = "red";
  }
});