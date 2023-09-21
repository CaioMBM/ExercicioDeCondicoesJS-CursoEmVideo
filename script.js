// Variável para pegar a informação do tempo  
var agora = new Date()

// Variável para pegar a HORA
var hora  =  agora.getHours()

// Variável para pegar a informação do tempo  
var now = new Date()

// Variável para pegar o MINUTO
var minuto = now.getMinutes()

// Variável para modificar o parágrafo
var pHora = document.getElementById('paragrafo')

// Variável para modificar o body
var body  = document.body

// Variável para a imagem
var img = document.querySelector('img')


if (hora < 12){
    body.style.backgroundColor = "#64EB0A"

    // Informar a hora e mostrar na página 
    pHora.innerText = `Agora são ${hora}:${minuto} da manhã.`
    
    img.src = '../imagens/manha.jpg'
} else if ( hora < 18 ){
    body.style.background = "#FFC648"
    
    // Informar a hora e mostrar na página 
    pHora.innerText = `Agora são ${hora}:${minuto} da tarde.`
    
    img.src = '../imagens/tarde.webp'
} else{
    body.style.background = '#181463'
    
    // Informar a hora e mostrar na página 
    pHora.innerText = `Agora são ${hora}:${minuto} da noite.`
    
    img.src = '../imagens/noite.avif'
}
