function validarFormulario(event) {
    // Impede o envio do formulário se a validação falhar
    event.preventDefault();

    // Obtém os valores dos campos
    const campoA = parseFloat(document.getElementById('campoA').value);
    const campoB = parseFloat(document.getElementById('campoB').value);

    // Valida se o campo B é maior que o campo A
    if (campoB > campoA) {
        // Se válido, envia o formulário
        alert('Formulário válido! Enviando...');
        // Aqui você pode adicionar a lógica para enviar o formulário, se necessário
        // document.getElementById('meuFormulario').submit();
    } else {
        // Se inválido, mostra uma mensagem de erro
        alert('Campo B deve ser maior que o Campo A.');
    }
}