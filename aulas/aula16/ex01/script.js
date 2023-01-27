var todos = []
var soma = 0
var maior = 0
var menor = 101

function adicionar() {
    let numtxt = document.getElementById('num')
    let num = Number(numtxt.value)
    let tab = document.getElementById('seltab')
    let res = document.getElementById('res') 

    if (num.length == 0 || num < 1 || num > 100) {
        window.alert('[ERRO] Valor inserido INVÁLIDO. Tente novamente.')
    } else {
       let item = document.createElement('option')
        item.text = `Valor ${num} adicionado.`
        tab.appendChild(item)

        res.innerHTML = ''

        soma += num
        todos.push(num)
        maior = Maior(num)
        menor = Menor (num) 
    }

    
}

function Maior(x) {
    if (x > maior) {
        return x
    } else {
        return maior
    }
}

function Menor (y) {
    if (y < menor) {
        return y
    } else {
        return menor
    }
}

function finalizar() {
    let res = document.getElementById('res')

    if (todos.length == 0) {
        window.alert('[ERRO] Nenhum valor foi inserido. Tente novamente.')
    } else {
        res.innerHTML = ''

        res.innerHTML += `Ao todo, temos <strong>${todos.length}</strong> números cadastrados. <br>`
        res.innerHTML += `O maior valor informado foi <strong>${maior}</strong>. <br>`
        res.innerHTML += `O menor valor informado foi <strong>${menor}</strong>. <br>`
        res.innerHTML += `Somando todos os valores, temos <strong>${soma}</strong>. <br>`
        res.innerHTML += `A média dos valores digitados é <strong>${soma / todos.length}</strong>.`
    }
}