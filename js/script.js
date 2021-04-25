// ANTIGO MENU FIXO

// const nav = document.getElementsByTagName("nav")[0];
// const topoNav = nav.offsetTop;

// window.onscroll = function() {
//   fixarMenuNoTopo();
// }

// function fixarMenuNoTopo() {
//   if(window.pageYOffset >= topoNav) {
//     nav.classList.add("fixoNoTopo");
//   } else {
//     nav.classList.remove("fixoNoTopo");
//   }
// }


// ANIMAÇÕES

document.addEventListener('DOMContentLoaded', function () { window.setTimeout(document.querySelector('svg').classList.add('animated'), 1000); })

document.addEventListener('DOMContentLoaded', function () {

  M.FormSelect.init(document.querySelectorAll('select'))
  M.Timepicker.init(document.querySelectorAll('.timepicker'))
  M.Modal.init(document.querySelectorAll('.modal'))

  mudarNotaAtual()
  exibirEstrelas()

  var oReq = new XMLHttpRequest();

})

document.addEventListener('mousemove', movement => {

  document.querySelectorAll('.parallax').forEach(layer => {

    const speed = Number(layer.getAttribute('parallax-speed'))
    const x = (window.innerWidth - movement.pageX * speed) / 100
    const y = (window.innerHeight - movement.pageY * speed) / 100

    document.getElementById(layer.id).style.transform = `translate(${x}px, ${y}px)`

  })

})

function exibirEstrelas() {

  setTimeout(() => {

    document.getElementById('primeiraEstrela').classList.add('estrela-visivel')
    document.getElementById('segundaEstrela').classList.add('estrela-visivel')
    document.getElementById('terceiraEstrela').classList.add('estrela-visivel')
    document.getElementById('quartaEstrela').classList.add('estrela-visivel')

    setTimeout(() => {

      document.getElementById('primeiraEstrela').classList.remove('estrela-visivel')
      document.getElementById('segundaEstrela').classList.remove('estrela-visivel')
      document.getElementById('terceiraEstrela').classList.remove('estrela-visivel')
      document.getElementById('quartaEstrela').classList.remove('estrela-visivel')

      setTimeout(() => { exibirEstrelas() }, 16000)

    }, 17000)

  }, 7000)

}

// CONSULTA DE CEP

function consultarCep() {

  let valorInuptCep = document.getElementById('cep').value

  if (valorInuptCep.length == 8) {

    var requestCep = new XMLHttpRequest()
    requestCep.onload = preencherForm
    requestCep.open("get", `https://viacep.com.br/ws/${valorInuptCep}/json/`, true)
    requestCep.send()

    function preencherForm() {

      let retornoApi = JSON.parse(this.responseText)

      document.getElementById('estado').value = retornoApi.uf
      document.getElementById('cidade').value = retornoApi.localidade
      document.getElementById('bairro').value = retornoApi.bairro
      document.getElementById('endereco').value = retornoApi.logradouro

      M.updateTextFields()

    };

  }

}

// HABITANDO HORÁRIOS

function habilitarHorarios() {

  let valorInput = document.getElementById('inputHorarios').checked

  if (valorInput == true) {

    document.getElementById('horarioAberturaSemana').disabled = false
    document.getElementById('horarioFechamentoSemana').disabled = false
    document.getElementById('horarioAberturaFinalSemana').disabled = false
    document.getElementById('horarioFechamentoFinalSemana').disabled = false

  } else {

    document.getElementById('horarioAberturaSemana').disabled = true
    document.getElementById('horarioFechamentoSemana').disabled = true
    document.getElementById('horarioAberturaFinalSemana').disabled = true
    document.getElementById('horarioFechamentoFinalSemana').disabled = true

  }

}

// MUDANDO NOTA

function mudarNotaAtual() {

  let nota = document.getElementById('nota')
  let valorNota = document.getElementById('test5').value
  let emojiNotaRuim = document.getElementById('emojiNotaRuim')
  let emojiNotaMediana = document.getElementById('emojiNotaMediana')
  let emojiNotaBoa = document.getElementById('emojiNotaBoa')

  document.getElementById('nota').innerHTML = valorNota

  if (valorNota > 0 && valorNota < 25) {

    nota.classList.remove('nota-mediana', 'nota-boa')
    nota.classList.add('nota-ruim')
    emojiNotaRuim.classList.add('emoji-visivel')
    emojiNotaMediana.classList.remove('emoji-visivel')
    emojiNotaBoa.classList.remove('emoji-visivel')

  } else if (valorNota > 25 && valorNota < 75) {

    nota.classList.remove('nota-ruim', 'nota-boa')
    nota.classList.add('nota-mediana')
    emojiNotaRuim.classList.remove('emoji-visivel')
    emojiNotaMediana.classList.add('emoji-visivel')
    emojiNotaBoa.classList.remove('emoji-visivel')

  } else {

    nota.classList.remove('nota-mediana', 'nota-ruim')
    nota.classList.add('nota-boa')
    emojiNotaRuim.classList.remove('emoji-visivel')
    emojiNotaMediana.classList.remove('emoji-visivel')
    emojiNotaBoa.classList.add('emoji-visivel')

  }

}

// BOTÃO CADASTRAR INDICAÇÃO

function cadastrarIndicacao() {

  M.toast({ html: 'Indicação cadastrada com sucesso :)' })

}

// BOTÃO VOLTAR A PÁGINA

function voltarIndex() {
  window.location.href = "http://127.0.0.1:5500/index.html";
}
