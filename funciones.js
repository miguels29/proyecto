function soloLetras(e) {
  key = e.keyCode || e.which;
  tecla = String.fromCharCode(key).toLowerCase();
  letras = "áéíóúabcdefghijklmnñopqrstuvwxyz";
  especiales = [8, 32, 37, 39, 46];

  tecla_especial = false
  for(var i in especiales) {
      if(key == especiales[i]) {
          tecla_especial = true;
            break;
      }
  }

  if(letras.indexOf(tecla) == -1 && !tecla_especial)
      return false;
}

function soloLetrasyNumeros(e) {
  key = e.keyCode || e.which;
  tecla = String.fromCharCode(key).toLowerCase();
  letras = "abcdefghijklmnñopqrstuvwxyz1234567890";
  especiales = [8, 32, 37, 39, 46];

  tecla_especial = false
  for(var i in especiales) {
      if(key == especiales[i]) {
          tecla_especial = true;
            break;
      }
  }

  if(letras.indexOf(tecla) == -1 && !tecla_especial)
      return false;
}

function soloNumeros(e) {
  key = e.keyCode || e.which;
  tecla = String.fromCharCode(key).toLowerCase();
  letras = "0123456789";
  especiales = [8, 37, 39, 46];

  tecla_especial = false
  for(var i in especiales) {
      if(key == especiales[i]) {
          tecla_especial = true;
            break;
      }
  }

  if(letras.indexOf(tecla) == -1 && !tecla_especial)
      return false;
}