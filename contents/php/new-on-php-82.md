# Novedades PHP 8.2

 - Clases `readonly`
 - Nuevos tipos: `true`, `false` y `null`
 - Tipos de Forma Normal Disyuntiva (DNF)
 - Se pueden añadir constantes en rasgos (traits)
 - Nuevas funciones y métodos
 - Deprecaciones
 - Nueva clase Random\Randomizer
 - Deprecación de las Propiedades Dinámicas
 - Eliminado Soporte para libmysql de mysqli
 - Nuevo atributo `SensitiveParameter`
***

### Clases `readonly`

    <?php

    readonly class Foo
    {
        public int $age = 23;
        public string $name = 'Foo';
    }

Algunas cosideraciones:

 - Una clase `readonly` puede no tener propiedades,
las clases hijas también deben ser `readonly`.
 - Las propiedades deben estar tipadas (`mixed`si no hay tipo definido)
y todos son automáticamente de sólo lectura.
 - No pueden ser `readonly` los Traits, Interfaces ni Enums
(que no contienen propiedades).
 - No pueden añadirse propiedades dinámicas a una clase `readonly` (error fatal).
</li>

    <?php

    readonly class Person
    {
    }

    readonly class Foo extends Person
    {
        public readonly string $name;

        public function __construct()
        {
            $this->name = 'Foo';
        }
    }

    $foo = new Foo();
    echo $foo->name;     // Foo
    echo $foo->age = 45; // Fatal error: Uncaught Error: Cannot create dynamic property...

***

### Nuevos tipos: `true`, `false` y `null`

PHP 8 permitía `false` y `null` en **tipos de unión**, pero no,
su uso independiente:

    <?php

    function foo(): int|false
    {
        return 0;
    }
    function baz(): int|null
    {
        return 0;
    }

    echo foo();
    echo baz();

Ahora `true`, `false` y `null` son como los demás tipos:

    <?php

    function foo(true $a, false $b): null
    {
        return null;
    }

    var_dump(foo(1 === 1, 1 !== 1)); // NULL

***

### [Tipos de Forma Normal Disyuntiva (DNF)](https://www.php.net/releases/8.2/es.php#dnf_types)

***

### Se pueden añadir constantes en rasgos (traits)

    <?php

    trait Foo
    {
        public const CONSTANT = 1;
    }

    class Bar
    {
        use Foo;
    }

    var_dump(Bar::CONSTANT); // 1
    var_dump(Foo::CONSTANT); // Error

Se puede acceder a la constante a través de la clase.

***

### [Nuevas funciones y métodos](https://www.php.net/manual/es/migration82.new-functions.php)

#### `mysqli_execute_query` y `mysqli::execute_query`

Añadidos `mysqli_execute_query(mysqli $mysql, string $query, ?array $params = null): mysqli_result|bool` y en su versión orientada a objetos:
`mysqli::execute_query(string $query, ?array $params = null): mysqli_result|bool`
combinan las funciones `mysqli::prepare()`, `mysqli_stmt::bind_param()`, `mysqli_stmt::execute()` y `mysqli_stmt::get_result()`, es decir preparan, bindean y ejecutan una sentencia SQL.

Nuevos métodos [`ZipArchive::getStreamIndex`](https://www.php.net/manual/es/ziparchive.getstreamindex.php),
[`ZipArchive::getStreamName`](https://www.php.net/manual/es/ziparchive.getstreamname.php) y[`ZipArchive::clearError`](https://www.php.net/manual/es/ziparchive.clearerror.php).

Nuevo método [`ReflectionMethod::hasPrototype`](https://www.php.net/manual/es/reflectionmethod.hasprototype.php).

Nuevas funciones <a href="https://www.php.net/manual/es/function.curl_upkeep.php"><code>curl_upkeep</code></a>, <a href="https://www.php.net/manual/es/function.memory-reset-peak-usage.php"><code>memory_reset_peak_usage</code></a>, <a href="https://www.php.net/manual/es/function.ini-parse-quantity.php"><code>ini_parse_quantity</code></a>, <a href="https://www.php.net/manual/es/function.libxml-get-external-entity-loader.php"><code>libxml_get_external_entity_loader</code></a>, <a href="https://www.php.net/manual/es/function.sodium-crypto-stream-xchacha20-xor-ic.php"><code>sodium_crypto_stream_xchacha20_xor_ic</code></a> y <a href="https://www.php.net/manual/es/function.openssl-cipher-key-length.php"><code>openssl_cipher_key_length</code></a>.

***

### Deprecaciones

 - Llamadas Parcialmente Soportadas
 - `utf8_encode()` y `utf8_decode()`
 - `${}` Interpolación de String
 - Funciones *mbstring* para las entidades Base64/QPrint/Uuencode/HTML

### [Nueva clase Random\Randomizer](https://www.php.net/manual/es/class.random-randomizer.php)

    <?php

    final class Random\Randomizer
    {
        /* Properties */
        public readonly Random\Engine $engine;

        /* Methods */
        public __construct(?Random\Engine $engine = null)
        public getBytes(int $length): string
        public getBytesFromString(string $string, int $length): string
        public getFloat(float $min, float $max, Random\IntervalBoundary $boundary = Random\IntervalBoundary::ClosedOpen): float
        public getInt(int $min, int $max): int
        public nextFloat(): float
        public nextInt(): int
        public pickArrayKeys(array $array, int $num): array
        public __serialize(): array
        public shuffleArray(array $array): array
        public shuffleBytes(string $bytes): string
        public __unserialize(array $data): void
    }

Ejemplo:

    <?php

    echo (new Random\Randomizer)->getInt(100,1000);

***

### [Deprecación de las Propiedades Dinámicas](https://www.php.net/releases/8.2/es.php#deprecate_dynamic_properties)

    <?php

    class DefaultBehaviour { }

    #[\AllowDynamicProperties]
    class ClassAllowsDynamicProperties { }

    $o1 = new DefaultBehaviour();
    $o2 = new ClassAllowsDynamicProperties();

    $o1->nonExistingProp = true; // Deprecated: Creation of dynamic property ...
    $o2->nonExistingProp = true;

Declarar propiedades dinámicamente muestra una notificación de "deprecación"
excepto si se usa el nuevo atriburo `#[\AllowDynamicProperties]`.

***

### [Eliminado Soporte para libmysql de mysqli](https://php.watch/versions/8.2/mysqli-libmysql-no-longer-supported)

***

### Nuevo atributo `SensitiveParameter`

    <?php

    // The value of $secret will be hidden
    function sensitiveParametersWithAttribute(
        #[\SensitiveParameter]
        string $secret,
        string $normal
    ) {
        throw new Exception('Error!');
    }

    try {
        sensitiveParametersWithAttribute('secret-password', 'normal string');
    } catch (Exception $e) {
        echo $e, PHP_EOL, PHP_EOL;
    }

    /*
    Exception: Error! in /home/user/scripts/code.php:8
    Stack trace:
    #0 /home/user/scripts/code.php(12): sensitiveParametersWithAttribute(Object(SensitiveParameterValue), 'normal string')
    #1 {main}
    */

Los parámetros marcados como `SensitiveParameter` no aparecen en las trazas
(excepciones, trazas de [debug_backtrace](https://www.w3schools.com/php/func_error_debug_backtrace.asp),
etc.).

***

Fuentes consultadas:

 - https://kinsta.com/es/blog/php-8-2/
 - https://www.php.net

***

[Go to index](../../README.md)
