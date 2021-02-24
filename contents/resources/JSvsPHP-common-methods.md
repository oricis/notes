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

> Merge an array of strings into a string

    JS ---
    PHP -- implode(string $glue, array $pieces): string

https://www.php.net/manual/es/function.implode.php

> Get element position

    JS --- arr.indexOf(needle)
    PHP -- in_array(array haystack, mixed needle)

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


***

[Go to index](../../README.md)
