# [Nuevas características en PHP 8.3](https://www.php.net/releases/8.3/es.php)

***<a name="top-index">Contenidos:</a>***

 - [Constantes de clase tipadas](./new-on-php-83.md#typed-class-constants)
 - [Obtener la constante de clase de forma dinámica](./new-on-php-83.md#dynamic-class-constant-fetch)
 - [Nuevo atributo `#[\Override]`](./new-on-php-83.md#new-override-attribute)
 - [Clonado profundo de propiedades "readonly"](./new-on-php-83.md#deep-cloning-of-readonly-properties)
 - [Nueva función `json_validate()`](./new-on-php-83.md#new-json_validate-function)
 - [Nuevo método `Randomizer::getBytesFromString()`](./new-on-php-83.md#new-randonizer-get-bytes-from-string-method)
 - [Nuevos métodos `Randomizer::getFloat()` y `Randomizer::nextFloat()`](./new-on-php-83.md#new-randonizer-get-floats-methods)
 - [El *linter* de línea de comandos admite múltiples archivos](./new-on-php-83.md#command-line-linter)
 - [Nuevos métodos y funciones](./new-on-php-83.md#new-methods)
 - [Deprecaciones y cambios](./new-on-php-83.md#deprecations)

***

### <a name="typed-class-constants">Constantes de clase tipadas</a>

Antes de PHP 8.3 podía declararse una constante en una interfaz
e implementarse con un tipo diferente en las clases

    interface I
    {
        const PHP = 'PHP 8.2';
    }

    class Foo implements I
    {
        const PHP = [];
    }

    var_dump((new Foo)::PHP);

Con PHP 8.3 el tipado previene esta situación:

    interface I
    {
        const string PHP = 'PHP 8.3';
    }

    class Foo implements I
    {
        const string PHP = [];
    }

    var_dump((new Foo)::PHP);

    // Fatal error: Cannot use array as value for class constant Foo::PHP of type string

[ᐱ Top index](./new-on-php-83.md#top-index)

***

### <a name="dynamic-class-constant-fetch">Obtener la constante de clase de forma dinámica</a>


    // Desde PHP 8.3 puede obtenerse la constante de la clase a partir
    // de su nombre como un string:

    class Foo
    {
        const PHP = 'PHP 8.3';
    }

    $searchableConstant = 'PHP';

    var_dump(Foo::{$searchableConstant});

    // NOTA: En versiones anteriores tendremos el error:
    // Parse error: syntax error, unexpected token ")", expecting

[ᐱ Top index](./new-on-php-83.md#top-index)

***

### <a name="new-override-attribute">Nuevo atributo `#[\Override]`</a>

    // PHP < 8.3

    use PHPUnit\Framework\TestCase;

    final class MyTest extends TestCase
    {
        protected $logFile;

        protected function setUp(): void
        {
            $this->logFile = fopen('/tmp/logfile', 'w');
        }

        protected function taerDown(): void
        {
            fclose($this->logFile);
            unlink('/tmp/logfile');
        }
    }

    // The log file will never be removed, because the
    // method name was mistyped (taerDown vs tearDown).

    // PHP 8.3
    use PHPUnit\Framework\TestCase;

    final class MyTest extends TestCase
    {
        protected $logFile;

        protected function setUp(): void
        {
            $this->logFile = fopen('/tmp/logfile', 'w');
        }

        #[\Override]
        protected function taerDown(): void
        {
            fclose($this->logFile);
            unlink('/tmp/logfile');
        }
    }

    // Fatal error: MyTest::taerDown() has #[\Override] attribute,
    // but no matching parent method exists

Al añadir el atributo `#[\Override]` a un método, PHP valida que un método
con el mismo nombre existe en la clase padre o interfaz que se implementa.
Se evitan errores al nombrar un método que se quiere sobre-escribir/implementar
y se detecta el caso en que se elimine el método de interfaz o de la clase padre.

[ᐱ Top index](./new-on-php-83.md#top-index)

***

### <a name="deep-cloning-of-readonly-properties">Clonado profundo de propiedades "readonly"</a>

    // PHP < 8.3

    class PHP
    {
        public string $version = '8.2';
    }

    readonly class Foo
    {
        public function __construct(public PHP $php)
        {}

        public function __clone(): void
        {
            $this->php = clone $this->php;
        }
    }

    $instance = new Foo(new PHP());
    $cloned = clone $instance;

    // Fatal error: Cannot modify readonly property Foo::$php



    // PHP 8.3

    class PHP
    {
        public string $version = '8.2';
    }

    readonly class Foo
    {
        public function __construct(public PHP $php)
        {}

        public function __clone(): void
        {
            $this->php = clone $this->php;
        }
    }

    $instance = new Foo(new PHP());
    $cloned   = clone $instance;
    $cloned->php->version = '8.3';

Las propiedades de solo lectura ahora se pueden modificar una vez dentro
del método mágico `__clone` para permitir la clonación profunda de propiedades
*readonly*.

[ᐱ Top index](./new-on-php-83.md#top-index)

***

### <a name="new-json_validate-function">Nueva función `json_validate()`</a>

Comprueba si el string es un JSON válido a nivel sintáctico con una mayor
eficiencia que usar `json_decode()`.

[ᐱ Top index](./new-on-php-83.md#top-index)

***

### <a name="new-randonizer-get-bytes-from-string-method">Nuevo método `Randomizer::getBytesFromString()`</a>

    <?php

    $func = 'random';
    if (!function_exists($func)) {
        function random(int $length = 12, string $chars = ''): string
        {
            $chars = ($chars)
                ? $chars
                : '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

            // Since PHP 8.3
            if (method_exists('\Random\Randomizer', 'getBytesFromString')) {
                // A \Random\Engine may be passed for seeding,
                // the default is the secure engine.
                $randomizer = new \Random\Randomizer();

                return $randomizer->getBytesFromString($chars, $length);
            }

            $charsLength = strlen($chars);

            $output = '';
            for ($i = 0; $i < $length; $i++) {
                $output .= $chars[random_int(0, $charsLength - 1)];
            }

            return $output;
        }
    }

En PHP 8.2 se añadio la [extension *Random*](https://www.php.net/releases/8.2/en.php#random_extension)
como nuevo método para generar strings aleatorios con caracteres específicos
y longitud dada.

[ᐱ Top index](./new-on-php-83.md#top-index)

***

### <a name="new-randonizer-get-floats-methods">Nuevos métodos `Randomizer::getFloat()` y `Randomizer::nextFloat()`</a>

    // PHP < 8.3

    /**
     * Returns a random float between $min and $max, both including
     */
    function getFloat(float $min, float $max): float
    {
        // This algorithm is biased for specific inputs and may
        // return values outside the given range. This is impossible
        // to work around in userland.

        $offset = random_int(0, PHP_INT_MAX) / PHP_INT_MAX;

        return $offset * ($max - $min) + $min;
    }

    $temperature = getFloat(-89.2, 56.7);

    $chanceForTrue = 0.1;
    // getFloat(0, 1) might return the upper bound, i.e. 1,
    // introducing a small bias.
    $myBoolean = getFloat(0, 1) < $chanceForTrue;



    // PHP 8.3

    $randomizer = new \Random\Randomizer();

    $temperature = $randomizer->getFloat(
        -89.2,
        56.7,
        \Random\IntervalBoundary::ClosedClosed,
    );

    $chanceForTrue = 0.1;
    // Randomizer::nextFloat() is equivalent to
    // Randomizer::getFloat(0, 1, \Random\IntervalBoundary::ClosedOpen).
    // The upper bound, i.e. 1, will not be returned.
    $myBoolean = $randomizer->nextFloat() < $chanceForTrue;

Debido a la precisión limitada y al redondeo implícito de los números *float*,
generar un flotante imparcial que se encuentre dentro de un intervalo específico
no es trivial y las soluciones de usuario comúnmente utilizadas pueden generar
resultados sesgados o números fuera del rango solicitado.

[ᐱ Top index](./new-on-php-83.md#top-index)

***

### <a name="command-line-linter">El linter de línea de comandos admite múltiples archivos</a> [(Ver doc)](xxx)

    // PHP < 8.3

    php -l foo.php bar.php
    No syntax errors detected in foo.php


    // PHP 8.3

    php -l foo.php bar.php
    No syntax errors detected in foo.php
    No syntax errors detected in bar.php

El *linter* de la línea de comando ahora acepta entradas variables para
nombres de archivos.

[ᐱ Top index](./new-on-php-83.md#top-index)

***

### <a name="new-methods">Nuevos métodos y funciones</a>

 - Nuevos métodos de [DOMElement](https://www.php.net/manual/es/class.domelement.php):
    - `DOMElement::getAttributeNames()`
    - `DOMElement::insertAdjacentElement()`
    - `DOMElement::insertAdjacentText()`
    - `DOMElement::toggleAttribute()`
 - Nuevos métodos de [DOMElemeDOMNodent](https://www.php.net/manual/es/class.domnode.php):
    - `DOMNode::contains()`
    - `DOMNode::getRootNode()`
    - `DOMNode::isEqualNode()`
 - Nuevos métodos [`DOMNameSpaceNode::contains()`](https://www.php.net/manual/en/domnode.contains.php)
y [`DOMParentNode::replaceChildren()`](https://www.php.net/manual/es/domparentnode.replacechildren.php)

 - Nuevos métodos de [IntlCalendar](https://www.php.net/manual/es/class.intlcalendar.php):
    - `IntlCalendar::setDate()`
    - `IntlCalendar::setDateTime()`
 - Nuevos métodos de [`IntlGregorianCalenda`](https://www.php.net/manual/es/class.intlcalendar.php)::
    - [`IntlGregorianCalendar::createFromDate()`](https://www.php.net/manual/en/intlgregoriancalendar.createfromdate.php)
    - [`IntlGregorianCalendar::createFromDateTime()`](https://www.php.net/manual/en/intlgregoriancalendar.createfromdatetime.php)

 - Nuevo método: `ReflectionMethod::createFromMethodName()`
 - Nuevo método: `ZipArchive::getArchiveFlag()`

 - Nuevas funciones:
    - `ldap_connect_wallet()`
    - `ldap_exop_sync()`
    - `mb_str_pad()`
    - `posix_sysconf()`
    - `posix_pathconf()`
    - `posix_fpathconf()`
    - `posix_eaccess()`
    - `socket_atmark()`
    - `str_increment()`
    - `str_decrement()`
    - `stream_context_set_options()`

***

### <a name="deprecations">Deprecaciones y cambios</a>

 - Constante `U_MULTIPLE_DECIMAL_SEPERATORS` deprecada en favor de `U_MULTIPLE_DECIMAL_SEPARATORS`.
 - Deprecada la variante [MT_RAND_PHP](https://www.php.net/manual/es/random.constants.php#constant.mt-rand-php) Mt19937.
 - INI settings:
    - assert.active
    - assert.bail
    - assert.callback
    - assert.exception
    - assert.warning have

 - Llamadas a `get_class()` y `get_parent_class()` sin argumentos.
 - La llamada a [`ReflectionClass::getStaticProperties()`](https://www.php.net/manual/es/reflectionclass.getstaticproperties.php)
 ya no admite valores nulos.

 - Ahora las [clases anónicas](https://www.php.net/manual/es/language.oop5.anonymous.php)
pueden ser *readonly*.

 - Mejora en el tratamiento de excepciones para Date/Time con la nueva clase
[`DateMalformedStringException`](https://www.php.net/manual/en/class.datemalformedstringexception.php).

[ᐱ Top index](./new-on-php-83.md#top-index)

***

Fuentes consultadas:

 - https://www.php.net

***

[ᐱ Top index](./new-on-php-83.md#top-index)

[Lo nuevo en PHP 8](./new-on-php-80.md)

[Lo nuevo en PHP 8.1](./new-on-php-81.md)

[Lo nuevo en PHP 8.2](./new-on-php-82.md)

***

[Go to index](../../README.md)
