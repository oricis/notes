# [Nuevas características en PHP 8.0](https://www.php.net/releases/8.0/es.php)

***<a name="top-index">Contenidos:</a>***

- [Argumentos nombrados](./new-on-php-80.md#named-arguments)
- [Promoción de propiedades constructivas](./new-on-php-80.md#constructor-property-promotion)
- [Tipos de unión](./new-on-php-80.md#union-types)
- [Expresiones match](./new-on-php-80.md#match-expression)
- [Operador Nullsafe](./new-on-php-80.md#nullsafe-operator)
- [Mejoras en los mensajes de error de funciones internas](./new-on-php-80.md#type-errors-for-internal-functions)
- [Usar `::class` con objetos](./new-on-php-80.md#objects-with-class)
- [Nuevas funciones](./new-on-php-80.md#new-functions)
- [Otros cambios](./new-on-php-80.md#changes)

***

### <a name="named-arguments">Argumentos nombrados</a>

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

[ᐱ Top index](./new-on-php-80.md#top-index)

***

### <a name="constructor-property-promotion">Promoción de propiedades constructivas</a>

[Doc oficial](https://www.php.net/releases/8.0/es.php#constructor-property-promotion)

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

Si la clase usará un trait donde de define la propiedad que se intenta "promover"
en el constructor, deben cumplirse las siguientes condiciones:
 - Ambas definiciones tendrán la misma visibilidad.
 - Sólo puede asignarse un valor por defecto en el constructor.

[ᐱ Top index](./new-on-php-80.md#top-index)

***

### <a name="union-types">Tipos de unión</a>

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

[ᐱ Top index](./new-on-php-80.md#top-index)

***

### <a name="match-expression">Expresiones match</a>

[Doc oficial](https://www.php.net/releases/8.0/es.php#match-expression)

    <?php

    // PHP 7

    $value = 8.0;
    switch ($value) {
    case '8.0':
        $result = "bad result";
        break;
    case 8.0:
        $result = "expected";
        break;
    }
    echo $result; // bad result


    <?php

    // PHP 8

    $value = 8.0;
    $result = match ($value) {
        '8.0' => "bad result",
        8.0   => "expected",
    };
    echo $result; // expected

La expresión `match` es similar a `switch`, con las siguientes características:

 - Al ser una expresión puede almacenarse como variable o devuelta.
 - Soporta expresiones de una línea y no necesitan declarar un `break`.
 - Las comparaciones son estrictas, lo que evita errores.

[ᐱ Top index](./new-on-php-80.md#top-index)

***

### <a name="nullsafe-operator">Operador Nullsafe</a>

    <?php

    define('ADULTNESS_AGE', 18);

    class FooPopo
    {
        public string $name = 'Foo';
        public int $age = 74;
    }

    function getAdultFoo(FooPopo $foo):? FooPopo
    {
        return ($foo->age >= ADULTNESS_AGE) ? $foo : null;
    }

    $foo = getAdultFoo(new FooPopo());

    // Sin el operador nullsafe:
    if (! is_null($foo)) {
        echo $foo->name;
    } else {
    	echo 'Adults missing';
    }

    // Con el operador nullsafe:
    echo $foo?->name ?: 'Adults missing';

El *nullsafe operator* `?->` hace posible no tener que verificar condiciones
nulas explícitamente.

Con modelos de *Eloquent*, p.e. imprimir el tlf. del usuario en la vista.

Antes: `{{ $user ? $user->phone : '' }}`

Ahora: `{{ $user?->phone }}`

[ᐱ Top index](./new-on-php-80.md#top-index)

***

### <a name="type-errors-for-internal-functions">Mejoras en los mensajes de error de funciones internas</a>

    <?php

    // PHP 7

    strlen([]); // Warning: strlen() expects parameter 1 to be string, array given

    array_chunk([], -1); // Warning: array_chunk(): Size parameter expected to be greater than 0


    <?php

    // PHP 8

    strlen([]); // TypeError: strlen(): Argument #1 ($str) must be of type string, array given

    array_chunk([], -1); // ValueError: array_chunk(): Argument #2 ($length) must be greater than 0

Ahora la mayoría de los errores de funciones internas puedes gestionarse con excepciones.

[ᐱ Top index](./new-on-php-80.md#top-index)

***

### <a name="objects-with-class">Usar `::class` con objetos</a>

Antes sólo era posible `Foo::class` o `get_class((new Foo))`para obtener
el nombre de la clase (con su namespace), ahora además se puede usar sobre
la instancia de la clase: `(new Foo)::class`.

    <?php

    namespace App\Misc\POPOs;

    class FooPopo
    {
    }

    echo FooPopo::class . PHP_EOL;         // App\Misc\POPOs\FooPopo
    echo get_class(new FooPopo) . PHP_EOL; // App\Misc\POPOs\FooPopo
    echo (new FooPopo)::class . PHP_EOL;   // App\Misc\POPOs\FooPopo

[ᐱ Top index](./new-on-php-80.md#top-index)

***

### <a name="new-functions">Nuevas funciones</a>

#### [`str_contains(string $haystack, string $needle): bool`](https://wiki.php.net/rfc/str_contains)

#### [`str_starts_with(string $haystack, string $needle): bool`](https://www.php.net/manual/en/function.str-starts-with.php)

#### [`str_ends_with(string $haystack, string $needle): bool`]([xxx](https://www.php.net/manual/en/function.str-ends-with.php))

#### [`fdiv(float $num1, float $num2): float` - Divide dos números](https://www.php.net/manual/es/function.fdiv.php)

#### [`get_debug_type(mixed $value): string`](https://www.php.net/manual/en/function.get-debug-type.php)

    <?php

    echo get_debug_type(null) . PHP_EOL; // null
    echo get_debug_type(true) . PHP_EOL; // bool
    echo get_debug_type(1) . PHP_EOL;    // int
    echo get_debug_type(0.1) . PHP_EOL;  // float
    echo get_debug_type("foo") . PHP_EOL; // string
    echo get_debug_type([]) . PHP_EOL;  // array

    $fp = fopen(__FILE__, 'rb');
    echo get_debug_type($fp) . PHP_EOL; // resource (stream)

    fclose($fp);
    echo get_debug_type($fp) . PHP_EOL; // resource (closed)

    echo get_debug_type(new stdClass) . PHP_EOL; // stdClass
    echo get_debug_type(new class {}) . PHP_EOL; // class@anonymous

#### [`get_resource_id(resource $resource): int` - Devuelve un identificador de tipo `int` para el recurso](https://www.php.net/manual/en/function.get-resource-id.php)

[ᐱ Top index](./new-on-php-80.md#top-index)

***

### <a name="changes">Cambios</a>

#### [Nueva interfaz `Stringable`](https://wiki.php.net/rfc/stringable)

Se añade implícitamente a todas las clases que implementan `__toString()`.

#### [Nueva clase `PhpToken`](https://www.php.net/manual/es/class.phptoken.php)

Ahora `PhpToken::getAll()` reemplaza al uso de `token_get_all()`.
Se devuelve un array de objetos `PhpToken` en lugar del mix *strings*
y *arrays* de la función anterior, con mejoras de legibilidad y uso de memoria.

[ᐱ Top index](./new-on-php-80.md#top-index)

***
Fuentes consultadas:

 - https://www.php.net


***

[ᐱ Top index](./new-on-php-80.md#top-index)

[Go to index](../../README.md)
