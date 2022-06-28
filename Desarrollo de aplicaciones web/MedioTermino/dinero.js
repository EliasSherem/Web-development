function calcula(){
  centavos=document.getElementById("centavos").value*0.5;
  peso=document.getElementById("pesos1").value*1;
  peso2=document.getElementById("pesos2").value*2;
  peso5=document.getElementById("pesos5").value*5;
  peso10=document.getElementById("pesos10").value*10;
  peso20=document.getElementById("pesos20").value*20;
  peso50=document.getElementById("pesos50").value*50;
  peso100=document.getElementById("pesos100").value*100;
  peso200=document.getElementById("pesos200").value*200;
  peso500=document.getElementById("pesos500").value*500;
  total=centavos+peso+peso2+peso5+peso10+peso20+peso50+peso100+peso200+peso500;
    document.getElementById("total").innerHTML=total;
}
