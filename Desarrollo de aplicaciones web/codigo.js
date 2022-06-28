function calcula(){
  x=document.getElementById("calificacion").value;
  if(x>10 || x<0){
    document.getElementById("resultado").innerHTML = "Error. Porfavor ingresa un numero entre 0 y 10";
  }else if(x>=0 && x<6){
    document.getElementById("resultado").innerHTML = "NA";
  }else if(x>=6 && x<7.5){
    document.getElementById("resultado").innerHTML = "S";
  }else if(x>=7.5 && x<9){
    document.getElementById("resultado").innerHTML = "B";
  }else if(x>=9 && x<10){
    document.getElementById("resultado").innerHTML = "MB";
  }else if(x==10){
    document.getElementById("resultado").innerHTML = "LAP";
  }else{
    document.getElementById("resultado").innerHTML = "Error. No ingresaste un numero";
  }
}
