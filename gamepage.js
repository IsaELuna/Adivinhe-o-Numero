// geração do valor aleatório

var y = Math.floor(Math.ramdom() * 10 + 1);
var guess = y = Number;

//número enviado pelo usuário
var x = document.getElementById("guessField").value;

if(x == y)
{
    alert("PARABÉNS!!!"+palyername+", você acertou em" + guess + "tentaviva(s)!");
    guess=1;
}
else if(x > y) /* se o número enviado é maior que o número gerado*/{
    guess++;
    alert("Opa, resposta errada!! Tente um número menor");
}
else
{
    guess++;
    alert("Opa, resposta errada!! Tente um número maior")}

function playAgain(){
    y = Math.floor(Math.ramdom() * 10 + 1);
}

function submit(){
    localStorage.removeItem("guessField");
}