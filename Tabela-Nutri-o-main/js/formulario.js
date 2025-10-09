var botaoAdicionar = document.querySelector("#adicionar-paciente");

botaoAdicionar.addEventListener('click',
    function (event) {
        event.preventDefault();

        //Seleciona a tag <form> a partir do id//
        var formulario = document.querySelector('#form-adiciona');

        //Cria o elemento <tr> variaveis para acessar o valor do <input>//
        var paciente = dadosPacientesFormulario(formulario);
        var pacienteTr = criaTR(paciente);

        var erros = validarPaciente(paciente);

        //Impede de adicionar o paciente//
        if (erros.length > 0) {

            var mensagemErro = document.querySelector("#mensagem-erro");
            mensagemErro.textContent = erros;
            console.log("Paciente Inválido");
            return;
        }

        var tabela = document.querySelector("#tabela-pacientes");
        tabela.appendChild(pacienteTr);
        formulario.reset();
    }
);

function dadosPacientesFormulario(formulario) {
    //objeto paciente//
    var paciente = {
        nome: formulario.nome.value,
        peso: formulario.peso.value,
        altura: formulario.altura.value,
        gordura: formulario.gordura.value,
        IMC: calculaIMC(formulario.peso.value, formulario.altura.value)
    }
    console.log(pacientes);

    return paciente;
}

function criaTR(paciente) {
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    pacienteTr.appendChild(criaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(criaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(criaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(criaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(criaTd(paciente.IMC, "info-imc"));

    return pacienteTr;
}

function criaTd(dado, classes) {
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classes);
    return td;
}

function validarPaciente(paciente) {

    var erros = [];

    if (!validarPeso(paciente.peso)) erros.push("O peso inserido é inválido!");

    if (!validarAltura(paciente.altura)) erros.push("A altura inserida é inválida!");

    return erros;
}

