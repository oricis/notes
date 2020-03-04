# ES6 - Uso de var, let, const, ...

*From: https://es.stackoverflow.com/a/106067/20709*

***

## Resumen de la explicación

- `const` define constantes, pero si no tenemos cuidado se pueden modificar. Tiene alcance de bloque, como `let`.
- `var` define variables con un alcance de función (el contexto actual).
- `let` define variables con un alcance de bloque y a partir de la línea en la que se declaran.
- Si no declaramos un identificador, se creará como una variable global a menos que nuestro código sea declarado "estricto".

***

## Explicación completa

`const identificador = ...`
---

Crea una **constante**. Al igual que ocurre en otros lenguajes como Java o C#, si la constante es un objeto **sus atributos son modificables**, por tanto hay que tener cuidado con lo que hacemos:

<!-- begin snippet: js hide: false console: true babel: false -->

<!-- language: lang-js -->

    function fallaVariableEntera() {
      const k1= 5;
      console.log(k1);
      k1=6;
      console.log(k1);
    }
    function fallaCreandoObjeto(){
      const k1 = {}
      k1.hola = 'mundo';
      k1 = {}
      console.log(k1);
    }
    function funciona() {
      const k1={};
      k1.hola='mundo';
      console.log(k1.hola);
    }

    funciona();
    try{
      fallaVariableEntera();
    }catch(err){
      console.error(`fallo cambio de valor const =>${err}`)

    }
    try{
      fallaCreandoObjeto()
    }catch(err){
      console.error(`fallo creando un objeto const =>${err}`)

    }


<!-- end snippet -->



`var identificador ...`
---

Javascript es un poco especial para según qué cosas y éste es un buen ejemplo de sus rarezas: la variable se puede declarar al usarla, al inicio de nuestro código o al final; realmente dará igual porque el intérprete "subirá"  la declaración al inicio del alcance/contexto actual (en inglés a esto se le llama *hoisting* y también afecta a la declaración de funciones). El alcance es de función siempre, **no de bloque**:

<!-- begin snippet: js hide: false console: true babel: false -->

<!-- language: lang-js -->

    function ejemplo() {
    // la declaro abajo, pero el compilador pondrá la declaración aquí, manteniendo la asignación en el mismo sitio
       a='hola mundo';
       console.log(a);
       var a=6;
       console.log(a);

       if (a===6) {
        var b=4;
       }
       console.log(b); //se declaró en un if, pero su alcance es toda la función
    }

    ejemplo();

<!-- end snippet -->

Además, no importa si la declaramos varias veces, las declaraciones extras serán ignoradas:

<!-- begin snippet: js hide: false console: true babel: false -->

<!-- language: lang-js -->

    var a=4

    var a=5;

    console.log(a)

<!-- end snippet -->

El comportamiento de los valores de una variable usada con clausuras y *callbacks* asíncronos suele liar a los programadores inexpertos, pongo un ejemplo y cómo solucionarlo:

<!-- begin snippet: js hide: false console: true babel: false -->

<!-- language: lang-js -->

    function print(c) {
      console.log(c);
    }

    //generamos una función con un valor fijado de antemano
    function generador(c) {
      return function () {
        print(c);
      }
    }

    for (var i=0;i<5;i++) {
      setTimeout(function () { print(i);});
    }

    for (var i=0;i<5;i++) {
      setTimeout(generador(i));
    }

<!-- end snippet -->


`let identificador = ...`
---

Y llegamos a la última novedad de Javascript, que se comporta de un modo similar a lo que es una declaración de variable en otros lenguajes como Java o C: la variable sólo se puede utilizar a partir de su declaración y **su alcance es local al bloque, no a la función**:

<!-- begin snippet: js hide: false console: true babel: false -->

<!-- language: lang-js -->

    function funciona() {
      let a='hola';
      console.log(a);
    }

    function falla() {
      a='hola';
      console.log(a);
      let a;
    }

    function fallariaTambien() {
      let a=1;
      if (a==1) {
        let b=2;
      }
      console.log(b);
    }

    funciona();

    //se declara una nueva instancia de i para cada iteración!! el problema que teníamos con var desaparece :)
    for (let i=0;i<5;i++) {
      setTimeout(()=>console.log(i));
    }

    try {
      falla();
    } catch(e) {
      console.log('Capturado',e.toString());
    }
    try {
      fallariaTambien();
    } catch(e) {
      console.log('Capturado',e.toString());
    }

<!-- end snippet -->

A diferencia de `var`, no se permiten duplicados:

<!-- begin snippet: js hide: false console: true babel: false -->

<!-- language: lang-js -->

    let a=4;

    let a=5;

    console.log(a)

<!-- end snippet -->

¿Y qué pasa si usamos un identificador sin declararlo? Pues tenemos dos escenario: Javascript "normal" y [Javascript "estricto"][1]

>  En el primero la variable se crea como un atributo del objeto global
> y en el segundo caso hay un error de compilación, avisando de que la
> variable no ha sido declarada.

<!-- begin snippet: js hide: false console: true babel: false -->

<!-- language: lang-js -->

    function normal() {
      hola='hola';
    }

    function estricta() {
      'use strict';
      // esto indica al intérprete que funcione en modo estricto: todo ha de estar definido o no funcionará
      fallo='esto falla';
    }

    normal();

    console.log(window.hola);

    estricta()

<!-- end snippet -->

Este ejemplo muestra los dos escenarios y, además ayuda a responder a la pregunta "¿Qué es *global* en Javascript?"
* Si estamos ejecutando en un navegador, el objeto global es siempre `window`.
* Si estamos ejecutando el código en NodeJS, el objeto global es `global`.

***NOTA:** &nbsp;`window` no es toda la ventana del navegador, sino la pestaña actual.*
*Por seguridad no podemos compartir variables entre diferentes pestañas.*


  [1]: https://es.stackoverflow.com/questions/2184/qu%C3%A9-significa-use-strict

***

[Go to index](../../README.md)
