let textTexto = document.querySelector('#texto')
let textRetorno = document.querySelector('#retorno-texto')
let boxRetorno = document.querySelector('.box-retorno-texto')


function criptografia(){
    let captura = textTexto.value 
    
    
    let resultadoTexto = captura.replace(/e/g, "enter").replace(/i/g, 'imes').replace(/a/g, 'ai').replace(/o/g, 'ober').replace(/u/g, 'ufat')

    boxRetorno.innerHTML = '<textarea readonly id="retorno-texto">' + resultadoTexto + '</textarea>' + '<button class="copiar" id="copiar" onclick="copiar()">Copiar</button>'
}

function copiar() {
    let textoCopia = document.getElementById('retorno-texto')

    textTexto.value = ' '
    textoCopia.select()
    document.execCommand('copy')
    alert('Texto copiado : '  + textoCopia.value )
}

function descriptogafar(){
    let captura = textTexto.value 
    
    let resultadoDescripto = captura.replace(/enter/g, "e").replace(/imes/g, 'i').replace(/ai/g, 'a').replace(/ober/g, 'o').replace(/ufat/g, 'u')


    boxRetorno.innerHTML = '<textarea readonly id="retorno-texto">' + resultadoDescripto + '</textarea>' + '<button class="copiar" id="copiar" onclick="copiar()">Copiar</button>'
}