# PHP tools

## [PHPStan](https://phpstan.org/)

Command line tool to check PHP errors by levels without use tests.
The [error levels (0-9)](https://phpstan.org/user-guide/rule-levels) allow a gradual integration in your codebase.

> Install in your project:

    composer require --dev phpstan/phpstan

> Run (check errors on level 1 and the directory "src"):

    ./vendor/bin/phpstan analyze --level 1 src

If you are using a frameworks check the [PHPStan extensions](https://phpstan.org/user-guide/extension-library) as [the Laravel Unofficial extension](https://github.com/larastan/larastan).

***NOTE:** Levels are cumulative, then use the level 9 to check all the errors.*


***

[Go to index](../../README.md)
