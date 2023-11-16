# Problema del Tablero - Solución en Node.js

Este código en Node.js presenta mi solución a un problema asociado a la disposición de colores en un tablero.

## Enunciado

Imagina a un joven entusiasta que disfruta pintando su tablero de ajedrez. Su objetivo es llenar cada celda con tonos rojos o azules, buscando lograr un equilibrio entre los espacios rojos y azules. Se debe evitar que dos filas o columnas tengan el mismo número de celdas rojas. ¿Podrá pintar el tablero de ajedrez siguiendo estas pautas? ¿Qué sucedería con un tablero monumental de 1000x1000 en lugar del común 8x8?

## Mi Enfoque

La primera incógnita que surgió fue si se refería a dos filas o columnas consecutivas o si en todo el tablero no podían haber filas con una cantidad repetida de celdas. Opté por asumir el primer caso.

Comencé generando diferentes tableros de diversos tamaños para identificar patrones (Ver imagen [aquí](https://drive.google.com/file/d/1DnxrZm-fvWTntbX3RlKD-ED6NhesTaMV/view?usp=drive_link)).

Observé que la única manera de crear un tablero con dos filas o columnas consecutivas que no contengan el mismo número de celdas rojas es utilizando tableros de tamaño impar, es decir, 1x1, 3x3, 5x5, 7x7, etc.

Con esta premisa, desarrollé un script en Node.js para verificar diferentes tamaños de tablero.

En respuesta a la pregunta del enunciado, la conclusión es que no se puede pintar un tablero de ajedrez de 8x8 siguiendo estas pautas, ni uno de 1000x1000 debido a su tamaño par.

En el mismo código, intenté crear un algoritmo simple que resolviera este problema, asegurando que, independientemente del tamaño, se cumpliera la condición del enunciado. Diseñé un algoritmo que contabiliza la cantidad de celdas rojas por fila y las compara con la fila anterior. Si son iguales, cambia la última celda roja de la fila actual por una azul, ya que no hay restricciones para la cantidad de celdas azules.

De esta manera, se garantiza que, sin importar el tamaño del tablero, se cumpla la condición especificada en el enunciado. Sin embargo, es importante destacar que para tamaños pares, la apariencia de un tablero de ajedrez no se mantiene.
