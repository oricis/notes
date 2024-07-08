# [Nuevas características en PHP 8.1](https://www.php.net/releases/8.1/es.php)

***<a name="top-index">Contenidos:</a>***

- Enumeraciones
- Propiedades de solo lectura (readonly properties)
- Tipo de retorno "never"
- Constantes de clase final
- Expresión "new" en el constructor
- Tipos de intersección pura
- Fivers
- Nuevas funciones

***

### [Enumeraciones](https://www.php.net/manual/es/language.enumerations.php)

[Enumeraciones básicas (EN)](https://www.php.net/manual/es/language.enumerations.basics.php)

    <?php

    enum Weapon {
        case Bow;
        case Shovel;
        case Lance;
        case Flail;
        case Mace;
        case Spade;
    }

    // Print Weapon value (read only property access):
    echo Weapon::Spade->name . PHP_EOL; // Spade

[ᐱ Top index](./new-on-php-81.md#top-index)

***

#### Backed Enums.  Guardan un valor para cada caso (de tipo int o string)

    <?php

    enum AddressType: string {
        case delivery = 'Delivery Address';
        case invoice  = 'Invoice Address'; // Billing Addreess
    }

    // List address types:
    foreach(AddressType::cases() as $addressType ) {
    echo $addressType->value . PHP_EOL; // Delivery Address / Invoice Address
    }
    echo AddressType::delivery->value . PHP_EOL; // Delivery Address

Ahora tenemos la función `enum_exists` aunque `class_exists` también puede ser
usada con un *Enum*.

***Se puede obtener un "backend enum" a partir de su valor**, ejemplo:*

    <?php

    enum AddressType: string {
        case delivery = 'Delivery Address';
        case invoice  = 'Invoice Address'; // Billing Addreess
    }
    $addressType = AddressType::from('Delivery Address');
    var_dump($addressType); // enum(AddressType::delivery)
    echo PHP_EOL;
    echo $addressType->name . ' => ' . $addressType->value; // delivery => Delivery Address
    echo PHP_EOL;

Si el enum con el valor dado no existe se lanza una excepción,
para evitarlo y obtener `null` se usa el método "tryFrom":

    $addressType = AddressType::tryFrom('xxx');
    var_dump($addressType); // null
    echo PHP_EOL;


#### Los enums pueden contener métodos (staticos o no) y soportar modificadores de visibilidad

    <?php

    enum RoleName {
        case admin;
        case employee;
        case user;

        public static function hasMaxAccessLevel(string $name): bool
        {
            return trim(strtolower($name)) === self::admin->name;
        }
    }

    echo (int) RoleName::hasMaxAccessLevel('Foo') . PHP_EOL; // 0

#### Los enums pueden implementar interfaces

    <?php

    interface FooInterface {

    }
    enum Foo: string implements FooInterface {
        case name = 'Foo';
        case access = 'Admin';
    }

    echo Foo::name->value . '(' . Foo::access->value . ')' . PHP_EOL;

#### Restricciones de los enums.

- Propiedades de solo lectura.
- No se pueden instanciar (usar new no permitido).
- No se pueden extender ni deberían heredarse (internamente declaradas final).

El siguiente ejemplo produce un error fatal:

    <?php

    enum Kon {
    }

    // Fatal error: Class Chita cannot extend final class Kon ...
    class Chita extends Kon {}

Para más información:

- https://www.php.net/manual/es/language.enumerations.php
- https://php.watch/versions/8.1/enums

[ᐱ Top index](./new-on-php-81.md#top-index)

***

### [Propiedades de solo lectura (readonly properties)](https://www.php.net/releases/8.1/es.php#readonly_properties)

No se pueden cambiar después de la inicialización.

    <?php

    enum PostLengthEnum
    {
        case short;
        case medium;
        case large;
    }

    class Post
    {
        public readonly bool $published;
        public readonly PostLengthEnum $length;

        public function __construct(PostLengthEnum $length)
        {
            $this->length = $length;
        }
    }

    $post = new Post(PostLengthEnum::medium);
    $post->published = true;
    $post->published = false; // Fatal error: Uncaught Error: Cannot modify readonly property Post::$published ...

[ᐱ Top index](./new-on-php-81.md#top-index)

***

### [Tipo de retorno "never"](https://www.php.net/releases/8.1/es.php#never_return_type)

Indica que *no devolverá un valor* y ***producirá una excepción o finalizará***
***la ejecución del script*** con una llamada de `die()`, `exit()`,
`trigger_error()`, o similar.
Podría compararse con el tipo de retorno `void`, pero en una función `never`
no puede usarse un `return` y va a detener la ejecución del programa
mientras que se usará `void` cuando se espera que el script continue.

    <?php

    function redirect(string $uri): never {
        header('Location: ' . $uri);
        exit();
    }

    function redirectToLoginPage(): never {
        redirect('/login');
        echo 'Hello'; // <- dead code detected by static analysis
    }

[ᐱ Top index](./new-on-php-81.md#top-index)

***

#### [Constantes de clase final](https://www.php.net/releases/8.1/es.php#final_class_constants)

    <?php

    class Foo
    {
        final public const XX = "foo";
    }

    class Bar extends Foo
    {
        public const XX = "bar"; // Fatal error
    }

Una constante de clase puede declararse final, para que no pueda
ser sobrescrita en las clases hijas.

[ᐱ Top index](./new-on-php-81.md#top-index)

***

### [Expresión "new" en el constructor](https://www.php.net/releases/8.1/es.php#new_in_initializers)

    <?php

    class LoggerService
    {
    }
    class DefaultLoggerService extends LoggerService
    {
        public function log(string $message): void
        {
            echo $message . PHP_EOL;
        }
    }

    class Service
    {
        private LoggerService $loggerService;

        public function __construct(
            LoggerService $loggerService = new DefaultLoggerService(), // new feature
        ) {
            $this->loggerService = $loggerService;
        }

        protected function log(string $message): void
        {
            $this->loggerService->log($message);
        }
    }
    class FooService extends Service
    {
        public function doSomething(): void
        {
            // ...

            $this->log('Doing something...');
        }
    }

    (new FooService())->doSomething();

[ᐱ Top index](./new-on-php-81.md#top-index)

***

### [Tipos de intersección pura](https://www.php.net/releases/8.1/es.php#pure_intersection_types)

    <?php

    class Person
    {
    }
    class User extends Person
    {
        public string $name = '';
    }

    function dumpUser(Person&User $user): void // new feature
    {
        var_dump($user);
    }

    $user = new User();
    $user->name = 'Foo';
    dumpUser($user);


[ᐱ Top index](./new-on-php-81.md#top-index)

***

### [Fibers](https://www.php.net/manual/es/language.fibers.php)

***

### Nuevas funciones

#### [array_is_list(bool $arr): bool](https://www.php.net/manual/en/function.array-is-list.php)

Determina si un array es una lista (comienza con índice 0 y los siguientes
son consecutivos).

    <?php

    # Next examples are all true

    array_is_list([]);
    array_is_list([21, 3]);
    array_is_list(['apple', 2, 3]);
    array_is_list(['apple', 'orange']);
    array_is_list([0 => 'apple', 'orange']);
    array_is_list([0 => 'apple', 1 => 'orange']);

    # Next examples are all false

    array_is_list([1 => 'apple', 'orange']);       // The array does not start at 0
    array_is_list([1 => 'apple', 0 => 'orange']);  // The keys are disordered
    array_is_list([0 => 'apple', 'foo' => 'bar']); // Non-integer keys
    array_is_list([0 => 'apple', 2 => 'bar']);     // Non-consecutive keys

#### [fsync(resource $stream): bool](https://www.php.net/manual/es/function.fsync.php)

Sincroniza los cambios en un fichero abierto, incluidos metadatos,
asegurando que los datos del búfer de PHP o del SO sean escritos, bloqueando otras ejecuciones hasta que el proceso finaliza y el búfer queda vacío, como lo haría la llamada a [`fflush`](https://www.php.net/manual/es/function.fflush.php).
Se usa después de `fopen()` o `fsockopen()` y antes de `fclose()`.

#### fdatasync(resource $stream)
Funciona como `fsync` solo que no sincroniza metadatos, siento algo más rápida.

#### [imageavif](https://www.php.net/manual/es/function.imageavif.php) e [imagecreatefromavif](https://www.php.net/manual/es/function.imagecreatefromavif.php)
Se añade *soporte para imágenes AVIF en la extensión GD* (debe habilitarse).

Con `imagecreatefromavif` se obtiene una instancia de GdImage a partir de una imagen AVIF. Se puede usar la instancia para editar o convertir la imagen.

Con `imageavif` se obtiene una imagen AVIF, por ejemplo, convirtiendo una imagen JPEG.
Funciona de forma similar a [`imagepng()`](https://www.php.net/manual/es/function.imagepng.php), `imagewbmp()` o `imagejpeg()`.

***NOTA:** Linux implementa las funciones homónimas `fsync` y `fdatasync`.*

[ᐱ Top index](./new-on-php-81.md#top-index)

***

Fuentes consultadas:

 - https://kinsta.com/es/blog/php-8-1/
 - https://www.php.net


***

[ᐱ Top index](./new-on-php-81.md#top-index)

[Lo nuevo en PHP 8](./new-on-php-80.md)

[Lo nuevo en PHP 8.2](./new-on-php-82.md)

[Lo nuevo en PHP 8.3](./new-on-php-83.md)

***

[Go to index](../../README.md)
