# Code Styles

***

## Curly Braces

> K&R

    class Xxx {
        function something() {
            // ...
        }
    }


> OTBS (one true brace style)

    class Xxx
    {
        function something()
        {
            // ...
        }
    }

*The OTBS style is "used" in [PHP PSR-2][1] to open clases and functions or methods.*

<br>

> NOTE: never use OTBS with JS return statements

    // K&R. This return an object
    return {
        'status': 'ok'
    };

    // OTBS. This return undefined
    return
    {
        'status': 'ok'
    };


***

## Code Style sites

https://javascript.info/coding-style

[PHP PSR-2][1]


[1]: https://github.com/jatubio/5minutos_laravel/wiki/Estandares-de-programacion.-PSR-2


***

[Go to index](../README.md)
