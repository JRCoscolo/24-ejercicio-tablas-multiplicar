function multiplicar(tabla, numero) {
    
    for (tabla = 1; tabla <= 10; tabla++) {
        resultado[tabla] = []
        for (numero = 1; numero <= 10; numero++) {
            resultado = (tabla + "x" + numero + "=" + (tabla * numero))

        }


    }

    return resultado
}

console.log(multiplicar(10, 10))