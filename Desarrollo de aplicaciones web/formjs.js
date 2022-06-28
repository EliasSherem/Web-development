var registro = "<tr><th>Nombre</th><th>email</th><th>Medio de transporte</th><th>Tipo de vivienda</th><th> Fecha de nacimeinto</th><th>Color favorito</th><th> Estado de animo</th>";
var estilo=0;
function proceso(){
  var transporte;
  var vivienda;
  if(document.getElementById('name').value==false){
    x=getElementById('nm');
    x.innerHTML="Ingresa tu nombre";
  }else if(document.getElementById('mail')==false){
    x=getElementById('c');
    c.innerHTML="Ingresa tu correo";
  }else{
    if(estilo%2==0){
      registro=registro+ "<tr class=\"renglon1\">";
    }else{
      registro=registro+ "<tr class=\"renglon2\">";
    }
    x=document.getElementById('name').value;
    registro=registro+"<td>"+x+"</td>";

    x=document.getElementById('mail').value;
    registro=registro+"<td>"+x+"</td>";


    registro=registro+"<td>";
    x=document.getElementsByName('transporte');
    for(i of x){
      if(i.checked){
        transporte=i.value;
        registro=registro+transporte+",";
      }
    }
    registro=registro+"</td>";
    x=document.getElementsByName('casa');
    for(i of x){
      if(i.checked){
        vivienda=i.value;
        registro=registro+"<td>"+vivienda+"</td>";
      }
    }
    x=document.getElementById('fecha').value;
    registro=registro+"<td>"+x+"</td>";

    x=document.getElementById('color').value;
    registro=registro+"<td>"+x+"</td>";

    x=document.getElementById('animo').value;
    registro=registro+"<td>"+x+"</td>";

    regsitro=registro+"</tr>";
    document.getElementById('resultado').innerHTML=registro;

    estilo++;



    document.getElementById('name').value='';
    document.getElementById('mail').value='';
    document.getElementById('auto').checked=false;
    document.getElementById('moto').checked=false;
    document.getElementById('bici').checked=false;
    document.getElementById('casa').checked=false;
    document.getElementById('dpto').checked=false;
    document.getElementById('loft').checked=false;
    document.getElementById('fecha').value=false;
    document.getElementById('color').value='#000000';
    document.getElementById('animo').value=5;
  }

}
