function verificar() {
    var fano = document.getElementById('txtano')
    var sexo = document.getElementsByName('sexo')
    var res = document.getElementById('res')

    var data = new Date()
    var ano = data.getFullYear()

    var idade = ano - fano.value

    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] Valores inválidos. Tente novamente!')
    } else {
        if (sexo[0].checked) {
            res.innerHTML = `Detectamos um Homem com ${idade} anos!`
        } else {
            res.innerHTML = `Detectamos uma Mulher com ${idade} anos!`
        }
    }
}