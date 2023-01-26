function gerar() {
    var num = document.getElementById('num')
    var tab = document.getElementById('seltab')

    if (num.value.length == 0) {
        window.alert('[ERRO] Por favor digite um número')
    } else {
        var n = Number(num.value)
        tab.innerHTML = ''
        for (var x = 1 ; x <= 10 ; x++) {
            let item = document.createElement('option')
            item.text = `${n} x ${x} = ${n*x}`
            item.value = `tab${x}`
            tab.appendChild(item)
        }
    }
}