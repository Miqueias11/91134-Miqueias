document.getElementById('formulario').addEventListener('submit', function(e) {
    e.preventDefault(); // Previne o envio padrão do formulário
    
    let isValid = true;
    
    // Validação do campo Nome
    const campoNome = document.getElementById('campoNome');
    const erroCampoTexto = document.getElementById('erroCampoTexto');
    const nomeValor = campoNome.value.trim();
    
    if (nomeValor === '') {
        erroCampoTexto.classList.remove('hidden');
        campoNome.classList.add('border-red-500');
        campoNome.classList.remove('border-gray-300');
        isValid = false;
    } else {
        erroCampoTexto.classList.add('hidden');
        campoNome.classList.remove('border-red-500');
        campoNome.classList.add('border-gray-300');
    }
    
    // Validação do campo E-mail
    const campoEmail = document.getElementById('campoEmail');
    const erroCampoEmail = document.getElementById('erroCampoEmail');
    const emailValor = campoEmail.value.trim();
    
    if (emailValor === '' || !/\S+@\S+\.\S+/.test(emailValor)) {
        erroCampoEmail.classList.remove('hidden');
        campoEmail.classList.add('border-red-500');
        campoEmail.classList.remove('border-gray-300');
        isValid = false;
    } else {
        erroCampoEmail.classList.add('hidden');
        campoEmail.classList.remove('border-red-500');
        campoEmail.classList.add('border-gray-300');
    }
    
    // Validação dos checkboxes
    const checkboxes = document.querySelectorAll('input[name="interesses[]"]:checked');
    const erroCheckbox = document.getElementById('erroCheckbox');
    
    if (checkboxes.length === 0) {
        erroCheckbox.classList.remove('hidden');
        isValid = false;
    } else {
        erroCheckbox.classList.add('hidden');
    }
    
    // Se todos os campos estiverem válidos, pode enviar o formulário
    if (isValid) {
        console.log('Formulário válido.');
        alert('Formulário enviado com sucesso!');
        
        // Limpa os campos após envio bem-sucedido
        campoNome.value = ''; // Limpa o campo Nome
        campoEmail.value = ''; // Limpa o campo E-mail
        document.getElementById('comments').value = ''; // Limpa o campo de Comentários
        
        // Desmarca todos os checkboxes
        checkboxes.forEach(checkbox => {
            checkbox.checked = false;
        });

        // Remove as classes de erro
        campoNome.classList.remove('border-red-500');
        campoEmail.classList.remove('border-red-500');
        document.querySelectorAll('.checkbox').forEach(checkbox => {
            checkbox.classList.remove('border-red-500');
        });

        // Limpa a mensagem de erro de checkbox
        erroCheckbox.classList.add('hidden');
        erroCampoTexto.classList.add('hidden');
        erroCampoEmail.classList.add('hidden');
    }
});

// Validação em tempo real para o campo de nome
document.getElementById('campoNome').addEventListener('input', function() {
    const erroCampoTexto = document.getElementById('erroCampoTexto');
    const nomeValor = this.value.trim();
    
    if (nomeValor === '') {
        erroCampoTexto.classList.remove('hidden');
        this.classList.add('border-red-500');
        this.classList.remove('border-gray-300');
    } else {
        erroCampoTexto.classList.add('hidden');
        this.classList.remove('border-red-500');
        this.classList.add('border-gray-300');
    }
});

// Validação em tempo real para o campo de e-mail
document.getElementById('campoEmail').addEventListener('input', function() {
    const erroCampoEmail = document.getElementById('erroCampoEmail');
    const emailValor = this.value.trim();

    // Verifica se o e-mail está vazio ou se não tem um formato válido
    if (emailValor === '' || !/\S+@\S+\.\S+/.test(emailValor)) {
        erroCampoEmail.classList.remove('hidden');
        this.classList.add('border-red-500');
        this.classList.remove('border-gray-300');
    } else {
        erroCampoEmail.classList.add('hidden');
        this.classList.remove('border-red-500');
        this.classList.add('border-gray-300');
    }
});

// Validação de checkboxes enquanto o usuário interage com eles
const checkboxes = document.querySelectorAll('input[name="interesses[]"]');
checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', function() {
        const erroCheckbox = document.getElementById('erroCheckbox');
        
        // Verifica se pelo menos um checkbox foi marcado
        const checkedCheckboxes = document.querySelectorAll('input[name="interesses[]"]:checked');
        
        if (checkedCheckboxes.length === 0) {
            erroCheckbox.classList.remove('hidden');
        } else {
            erroCheckbox.classList.add('hidden');
        }
    });
});

// Validação quando o campo de comentários perde o foco (opcional)
document.getElementById('comments').addEventListener('blur', function() {
    const valor = this.value.trim();
    
    // Se o campo estiver vazio, você pode adicionar alguma validação, se necessário
    // Aqui é um exemplo para validar se o campo não está completamente vazio
    if (valor === '') {
        this.classList.add('border-red-500');
        this.classList.remove('border-gray-300');
    } else {
        this.classList.remove('border-red-500');
        this.classList.add('border-gray-300');
    }
});
