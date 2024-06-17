# [Nuevas características en PHP 8.1](https://www.php.net/releases/8.1/es.php)

- Enumeraciones
- Expresión "new" en constructor
- Tipos de intersección pura

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

Ahora tenemos la función `enum_exists` aunque `class_exists` tambien puede ser
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

### Restricciones de los enums.

- Propiedades de solo lectura.
- No se pueden instanciar (usar new no permitido).
- No se pueden extender ni deberían heredarse (internamente declaradas final).

El siguiente ejemplo esta mal:

    <?php

    enum Kon {
    }

    // Fatal error: Class Chita cannot extend final class Kon ...
    class Chita extends Kon {}

Para más información:

- https://www.php.net/manual/es/language.enumerations.php
- https://php.watch/versions/8.1/enums

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


***

[Go to index](../../README.md)
