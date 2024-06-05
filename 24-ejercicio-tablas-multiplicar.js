function multiplicar(tabla, numero) {
    var resultado = []
    for (tabla = 1; tabla <= 10; tabla++) {
        resultado[tabla] = []
        for (numero = 1; numero <= 10; numero++) {
             resultado [tabla][numero]= (tabla + "x" + numero + "=" + (tabla * numero))

        }
        return resultado
    }
}

