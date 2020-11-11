
btn = document.querySelector(".btn");
btn.addEventListener("click", ()=>{
peso = parseFloat(document.querySelector(".peso").value);
altura = parseFloat(document.querySelector(".altura").value);
resultado = peso / (altura * altura);

if(resultado < 18.5)
    resultado += "<br/> Você está com Baixo do Peso";
if(resultado > 18.5 && resultado < 25)
    resultado += "<br/> Você está no Peso Ideal";
if(resultado > 25 && resultado < 30)
    resultado += "<br/> Você está com Sobrepeso";
if(resultado > 30 && resultado < 35)
    resultado += "<br/> Você está com Obesidade grau 1";
if(resultado > 35 && resultado < 40)
    resultado += "<br/> Você está com Obesidade grau 2";
if(resultado > 40)
    resultado += "<br/> Você está com Obesidade grau 3";
resultado = "Seu IMC é " + resultado;
document.querySelector(".resultado").innerHTML = resultado;
})