function somar(){
    var n1 = window.document.getElementById('mumber1')
    var n2 = window.document.querySelector('input#number2')
    resultado = window.document.getElementById('resultado')
    var n1 = Number(number1.value)
    var n2 = Number(number2.value)
    var r = n1 + n2
    resultado.innerHTML = `A soma entre ${n1} e ${n2} é igual a ${r}`
}

