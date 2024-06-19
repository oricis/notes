# [Nuevas características en PHP 8.0](https://www.php.net/releases/8.0/es.php)

- Argumentos nombrados
- Promoción de propiedades constructivas
- Tipos de unión
- Expresiones match

***

### Argumentos nombrados

    <?php

    function foo(string $name = '', int $age = 0): void
    {
        echo ($name ? $name : 'No name') . PHP_EOL;
        echo ($age ? $age : 'Unknown age') . PHP_EOL;
        echo '---------------' . PHP_EOL;
    }

    foo(age: 23);	          // equivale a foo('', 23); en PHP viejo
    foo(name: 'Foo', age: 5); // equivale a foo('Foo', 5); en PHP viejo
    foo('Foo', age: 5);       // equivale a foo('Foo', 5); en PHP viejo
    foo(age: 5, name: 'Foo'); // equivale a foo('Foo', 5); en PHP viejo
    // foo(name: 'Foo', 5);      // Fatal error: Cannot use positional argument after named argument


La función tiene dos argumentos opcionales.
Antes, para indicar sólo el 2 argumento debíamos incluir el primero vacío.
Ahora se indican los parámetros requeridos (si los hubiera) y cada uno de los opcionales que requerimos nombrándolos, su orden es irrelevante y se documentan automáticamente.
Si nombramos un argumento los siguientes deben ir también nombrados.

***

### [Promoción de propiedades constructivas](https://www.php.net/releases/8.0/es.php#constructor-property-promotion)

    <?php

    // Before PHP 8:
    class Foo
    {
        public string $name;

        public function __contruct(string $name)
        {
            $this->name = $name;
        }
    }

    // Now:
    class Baz
    {
        public function __contruct(public string $name)
        {
        }
    }

***

### Tipos de unión

    <?php

    // PHP 7
    class Number
    {
        /** @var int|float */
        public static $number;

        /**
        * @param float|int $number
        */
        public static function set($number): void
        {
            self::$number = $number;
        }
    }

    Number::set('NaN'); // Ok

    <?php

    // PHP 8
    class Number
    {
        public static int|float $number;

        public static function set(int|float $number): void
        {
            self::$number = $number;
        }
    }

    Number::set('NaN'); // Fatal error: ...

***

### [Expresiones match](https://www.php.net/releases/8.0/es.php#match-expression)

***
Fuentes consultadas:

 - https://www.php.net


***

[Go to index](../../README.md)
