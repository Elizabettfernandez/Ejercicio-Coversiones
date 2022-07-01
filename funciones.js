  let cifra = parseInt(prompt('Ingrese un número'));

  let año = 365;
  let semana = 7;
  let dias = 1;

  let añoTranscurrido = Math.floor(cifra / año);
  let semanaTranscurrida = Math.floor(cifra / semana);
  let diaTranscurrido = Math.floor(cifra / dias);


  document.write(`<h2 id="equivalencias"> Son ${añoTranscurrido} años, ${semanaTranscurrida} semanas, con ${diaTranscurrido} días</h2>`);


  console.log(añoTranscurrido);
  console.log(semanaTranscurrida);
  console.log(diaTranscurrido);

