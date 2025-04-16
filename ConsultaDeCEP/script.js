// Funçao que será chamada ao clicar no botão
function consultarCep(){
    //Obtém o valor do campo CEP
    const cep = document.getElementById('cep').value;

    // Verifica se o CEP tem 8 dígitos
    if(cep.length !== 8){
        alert("Por favor, insira um CEP válido com 8 dígitos.");
        return; // Interrompe a execução da funçao se o CEP for inválido
    }

    //URL da API de CEP (usando o serviço ViaCEP como exemplo)
    const url = `https://viacep.com.br/ws/${cep}/json/`;

    // Faz uma requisição á API para obter os dados do CEP
    fetch(url)
    .then(response => response.json()) // Converte a resposta em JSON
    .then(data => {
        // Verifica se o CEP foi encontrado
        if(data.erro){
            alert("CEP nao encontrado.");
            return; // Interrompe a execução se o CEP não for válido
        }

        // Atualiza os campos no formulário com os dados retornados
        document.getElementById('rua').textContent = data.logradouro;
        document.getElementById('bairro').textContent = data.bairro;
        document.getElementById('cidade').textContent = data.localidade;
        document.getElementById('estado').textContent = data.uf;
    })
    .catch(error => {
        console.error("Erro ao consultar o CEP:", error); // Loga error
        alert("Ocorreu um erro ao consultar o CEP.");
        
    });
}