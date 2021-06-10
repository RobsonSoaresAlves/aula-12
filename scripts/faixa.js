function impValor(){
    var v1=parseint(document.getElementById("valor1").value);
    var v2=parseint(document.getElementById("valor2").value);

    var faixa=document.getElementById("faixa");

  
    if(v1>=0 && v1<=10){
        if(v2>=0 && v2<=10){
            faixa.innerHTML=("valor 1 e valor 2 estão entre 0 e 10");
        }
        faixa.innerHTML="valor 1 entre 0 e 10";
    }
    else{
        if(v2>=0 && v2<=10){
            faixa.innerHTML="valor 2 entre 0 e 10";
        }
        else{
            faixa.innerHTML="valor 1 e valor 2 estão fora da faixa";
        }

    }
}