


var res = document.getElementById('res')

function contar() {
    var i = document.getElementById('inicio')
    var f = document.getElementById('fim')
    var p = document.getElementById('passo')

    if (i.value.length == 0 || f.value.length == 0 || p.value.length == 0) {
        window.alert('ERRO! Preencha todas as variaveis')
    } else {
        res.innerHTML = 'Contando: <br>'
        ini = Number(i.value)
        fim = Number(f.value)
        pas = Number(p.value)

        if (ini < fim) {
            for (var x = ini ; x <= fim ; x += pas) {
                res.innerHTML += `${x} &#128073`
            }
        } else {
            for (var x = ini ; x >= fim ; x -= pas) {
                res.innerHTML += `${x} &#128073`
            }
        }
        res.innerHTML += `&#128374`
    }
}
