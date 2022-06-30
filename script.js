var resposta = document.querySelector("div#resposta")
var respostaMaquina= numeroDaMaquina()
alert (respostaMaquina)

var botaoTentativa = document.getElementById("botao")


function adivinhar() {
    var elementoValor= Number(document.querySelector("input#entradaTentativa").value)

    if(elementoValor>=0 && elementoValor<=10){
        jogo(elementoValor)
    } else{
        resposta.innerHTML = ("De 1 a 10... tente novamente.")
    }
    
}

function numeroDaMaquina(){
    // valor é multiplicado por 10, para que o conjunto seja de 0 a 10
  var valorPensado= (Math.random()*10).toFixed(0)
    return valorPensado
    
}

function jogo(numero){
   let tentativas = 0,
   limite = 3;

if (tentativas===limite){
    resposta.innerHTML=(`<p>wontch você perdeu~~ atualize a pagina para tentar novamente</p>`)
    
} else{ 
if (numero>respostaMaquina) {
    resposta.innerHTML=(`<p>Haha você esta pensando alto demais</p>`)
    
} else if (numero<respostaMaquina){
    resposta.innerHTML=(`<p>Este pensamento esta abaixo das expectativas</p>`)  
    
} else{
    resposta.innerHTML=(`<p> Quem diria você acertou, atualze a pagina para brincar mais</p>`)  
    botaoTentativa.disabled = true

} 
}
} 

