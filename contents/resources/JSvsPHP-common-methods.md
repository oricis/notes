# JS vs PHP - Common used methods
------------------------------------------------------------------------
------------------------------------------------------------------------

## Arrays
------------------------------------------------------------------------

> Split an string into parts

    JS --- str.split([separator[, limit]])
    PHP -- explode(string $separator, string $str): string

https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/String/split
https://www.php.net/manual/es/function.explode.php

> Array size:

    JS --- var size = array.length;
    PHP -- count(array $arr): int

> Merge an array of strings into a string

    JS --- var str = pieces.join(glue); // str
    PHP -- implode(string $glue, array $pieces): string

https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/join
https://www.php.net/manual/es/function.implode.php

> Element position

    JS --- var position = arr.indexOf(needle) // 0, 1, 2, n | -1
    PHP -- array_search(mixed $needle, array $haystack, bool $strict = false ): mixed

https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/indexOf
https://www.php.net/manual/es/function.in-array.php

> Element is present

    JS --- var exist = array1.includes(2) // bool
    PHP -- in_array(mixed $needle, array $haystack , bool $strict = false): bool

https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/includes


> Sort array elements

    JS --- arr.sort(); // void (NOTE: array contents is considered as strings)
    PHP -- sort(arr): void

### JS examples

    // ASC
    const numbers = [4, 2, 32, 21, 5, 1, 10];
    numbers.sort();
    console.log(numbers); // [1, 10, 2, 21, 32, 4, 5]

    // ASC
    numbers.sort((a, b) => {
        return a - b;
    });
    console.log(numbers); // [1, 2, 4, 5, 10, 21, 32]

    // DESC
    numbers.sort((a, b) =>
    {
        return b - a;
    });
    console.log(numbers); // [32, 21, 10, 5, 4, 2, 1]

### PHP examples

    $numbers = [4, 2, 32, 21, 5, 1, 10];

    // ASC*
    sort($numbers, SORT_STRING); // It's possible force string comparison
    var_dump($numbers); // [1, 10, 2, 21, 32, 4, 5]

    // ASC
    sort($numbers);
    var_dump($numbers); // [1, 10, 2, 21, 32, 4, 5]

    // DESC
    asort($numbers);
    var_dump($numbers); // [32, 21, 10, 5, 4, 2, 1]

***
***

## Strings
------------------------------------------------------------------------

> String to lowercase / to uppercase conversions

    JS --- var res = str.toLowerCase();
    PHP -- strtolower(string $str): string / mb_strtolower(string $str): string

    JS --- var res = str.toUpperCase();
    PHP -- strtoupper(string $str): string / mb_strtoupper(string $str): string

https://www.bitdegree.org/learn/javascript-tolowercase
https://www.php.net/manual/es/function.mb-strtolower.php
https://www.php.net/manual/es/function.mb-strtoupper.php


> Replace a part

    JS --- var str = str.replace(search, replace)
    JS --- var regex = /Dog/i; var str = str.replace(regex, replace));
    PHP -- str_replace(string $search, string $replace, string $subject): string
    PHP -- str_ireplace(string $search, string $replace, string $subject): string

> Get a part

    JS --- var str = str.substring(startPosition, [endPosition]);
    PHP -- substr(string $str, int $start, [int $length]): string


> String size (chars number)

    JS --- var strLength = str.length;
    PHP -- strlen($str);

> Element position

    JS --- var position = str.indexOf(search); // 0, 1, 2, n | -1
    PHP -- strpos(string $haystack, string $needle): int | bool (false)

> Element is present

    JS --- var result = haystack.includes(needle); // bool
    PHP -- str_contains(string $haystack, string $needle): bool

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes

> Count occurrences

    JS --- var regex = /Dog/g; var occurrences = str.match(regex)).length; // int
    PHP -- substr_count(string $haystack, string $needle, int $offset = 0, int $length = ?): int

> Split string

    JS --- var slices = str.split(separator); // array
    PHP -- explode(string $separator, string $str): array

> Join string

    JS --- var str = elements.join(glue) // string
    PHP -- implode(string $glue, array $slices): string

https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/join

***

## Others

> Assignment Operators

    JS --- a = b || '';   // Null coalescing operator
    PHP -- $a = $b ?? ''; // Null Coalescing Assignment Operator - From PHP 7.01

### JS Examples:

    var x = null;
    var y = undefined;
    var z = '';

    var a = x || 'foo';
    var b = y || 'foo';
    var c = z || 'foo';
    var d = zzz || 'foo';

    console.log(a + '---' + b + '---' + c); // foo---foo---foo
    console.log(d); // Uncaught ReferenceError: zzz is not defined

### PHP Examples:

    $a = $x ?? 'foo';
    $y = null;
    $b = $y ?? 'foo';
    $z = '';
    $c = $z ?? 'foo';

    echo $a . '---' . $b . '---' . $c; // foo---foo---

***

[Go to index](../../README.md)



