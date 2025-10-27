# Recomendaciones para Clean Code y Principios S.O.L.I.D.

A continuación, se presentan algunas recomendaciones para aplicar los principios de Clean Code y S.O.L.I.D. en tus proyectos de desarrollo de software:

## Clean Code

1. **Nombres Significativos**: Utiliza nombres descriptivos para variables, funciones y clases que reflejen su propósito y uso.

2. **Funciones Pequeñas**: Mantén las funciones cortas y enfocadas en una sola tarea. Esto facilita la lectura y el mantenimiento del código.

3. **Comentarios Útiles**: Usa comentarios para explicar el "por qué" detrás de decisiones complejas, pero evita comentarios redundantes que no aporten valor.

4. **Parametros en funciones**: la cantidad de parametros maximos en una funcion deben ser 3, si tienes mas parametros considerar usar una interfaz o un objeto.

### Nombre de variable segun el Tipo

```JavaScript
//Array

//Mal ejemplo de nombres de variables no esta en plurar el nombre
const fruit = ["apple", "banana", "cherry"];

/*Mejor ejemplo de nombres de variables esta en plural el nombre
Pero aun se pued emejorar*/
const fruitLists = ["apple", "banana", "cherry"];

//Mejor ejemplo de nombres de variables esta en plural el nombre
//  y es mas descriptivo de lo que contiene
const fruitNames = ["apple", "banana", "cherry"];

//Boolean

//Mal ejemplo de nombres de variables que no indica que es boolean
const active = 1;
const write = true;
const fruits = true;
const open = true;
const noValue = false;
const noEmpty = false;

//Mejores ejemplos de nombres de variables que indican que es boolean
//se recomienda siempre usar verbos o palabras que indiquen un estado
//como is, can, has, should, etc. en forma positiva
const isActive = true;
const canWrite = false;
const hasFruits = true;
const isOpen = true;
const hasValue = false;
const isEmpty = false;

//numero
//Malos ejemplos
const cars = 10;
const temp = -5;
const distance = 100;

//Mejores ejemplos
const numberOfCars = 10;
const totalOfCars = 10;
const minTemperatureInCelsius = -5;
const maxDistanceInKilometers = 100;

//funciones
//debe usar verbos para nombrar funciones

//Malos ejemplos
createUserIfNotExists();
updatedUserIfNotEmpty();
sendEmailIfFieldsVlaid();

//Mejores ejemplos
createUser();
updateUser();
sendEmail();

//recomendaciones para las clases
//nombre de sustantivos o frases de sustantivos
//evitar nombres genericos
//Usar UpperCamelCase

/

//malos ejemplos
class Manager {};
class Data {};
class Info {};
class Individual {};
class Processor {};
class SpecialMonsterView {};




```
