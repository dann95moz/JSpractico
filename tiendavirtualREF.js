function myFunction(){

    var precioInt=parseInt(document.getElementById("precio").value);
    var descuento=parseInt(document.getElementById("descuento").value);
   
        var h= precioInt*(1-descuento/100);
        alert("el precio con descuento es:  "+"$"+h);
    } 