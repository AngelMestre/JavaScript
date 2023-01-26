var img = document.getElementById('imagem')
var msg = document.getElementById('time')
var t = new Date()
var time = t.getHours()

msg.innerHTML = `Agora são ${time} horas.`

if (time < 12) {
    img.src = 'imagens/manhã.png'
    document.body.style.background = '#F4CE95'

} else if (time < 20) {
    img.src = 'imagens/tarde.png'
    document.body.style.background = '#DE7D00'
    
} else {
    img.src = 'imagens/noite.png'
    document.body.style.background = '#2F5277'
}
