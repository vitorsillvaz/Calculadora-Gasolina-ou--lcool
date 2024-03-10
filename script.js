function calcular(event){
    event.preventDefault();

    let alcoolInput = document.getElementById("alcool").value;
    let gasolinaInput = document.getElementById("gasolina").value;
    let contentResult = document.getElementById("contentResult");
    let txtResult = document.getElementById("txt-result");

    let gasolinaSpan = document.getElementById("gasolinaResult")
    let alcoolSpan = document.getElementById("alcoolResult")
    /* 
    Calculo: alcool / gasolina 
    Se o resultado for menor que 0.7 compensa usar alcool
    */
   let calculo = (alcoolInput / gasolinaInput);
     if(calculo < 0.7){
        // aqui conpensa usar alcool
        txtResult.innerHTML = "COMPENSA USAR ÁLCOOL";
     }else{
       // compensa usar gasolina
       txtResult.innerHTML = "CONPENSA USAR GASOLINA";
     }
    gasolinaSpan.innerHTML = "Gasolina R$ " + gasolinaInput;
    alcoolSpan.innerHTML = "Àlcool R$ " + alcoolInput;
    
     contentResult.classList.remove("hider")
}