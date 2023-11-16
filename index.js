const tablero = [];

function pintarCelda(fila, columna) {
  if (debePintarDeRojo(fila, columna)) {
    return "R";
  } else {
    return "A";
  }
}

function debePintarDeRojo(fila, columna) {
  return (esPar(fila) && esPar(columna)) || (!esPar(fila) && !esPar(columna));
}

function esPar(valor) {
  return valor % 2 === 0;
}

function generarTablero(tamañoTablero) {
  for (let i = 0; i < tamañoTablero; i++) {
    const fila = [];
    for (let j = 0; j < tamañoTablero; j++) {
      fila.push(pintarCelda(i, j));
    }
    tablero.push(fila);
  }
}

function pintarSiHayMismaCantidadDeCeldasRojas() {
  let cantRojasFilaAnterior = 0;

  for (let i = 0; i < tablero.length; i++) {
    let cantRojasFilaActual = 0;

    for (let j = 0; j < tablero.length; j++) {
      cantRojasFilaActual += tablero[i][j] === "R" ? 1 : 0;
    }

    if (i === 0) {
      cantRojasFilaAnterior = cantRojasFilaActual;
    } else {
      if (cantRojasFilaActual === cantRojasFilaAnterior) {
        tablero[i][tablero.length - 1] = "A";
        cantRojasFilaAnterior = cantRojasFilaActual - 1;
      } else {
        cantRojasFilaAnterior = cantRojasFilaActual;
      }
    }
  }
}

function imprimirTablero() {
  console.log("Tablero cuadrado de tamaño: ");
  const stdin = process.openStdin();

  stdin.addListener("data", (data) => {
    generarTablero(data);
    pintarSiHayMismaCantidadDeCeldasRojas();
    for (let fila of tablero) {
      console.log(fila.join("    "));
      console.log("\n");
    }
    process.exit();
  });
}

imprimirTablero();