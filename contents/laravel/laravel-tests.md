# Laravel tests (Laravel 7)

***

## 1. Default test structure

    your-project
      |
      |-- ...
      |-- tests
            |
            |-- Feature
            |-- Unit


### Create test classes

    // Create a test in the Feature directory...
    php artisan make:test TheClassNameTest

    // Create a test in the Unit directory...
    php artisan make:test TheClassNameTest --unit


### Run the tests

    php artisan test

***

## 2. The test structure

Base rules (by convention):

 * The directory structure on tests must be follow the project structure.
 * We must use:

    * "tests/Feature/" for controllers (functional tests: what's happen with each route?)
    * "tests/Unit/" for unit tests


### What classes test under tests/Feature?

For this tests we use routes, then we can test:
 * Controllers
 * Models (across the Controllers)


### What classes test under tests/Unit?

 * FormRequest
 * Helpers
 * Services
 * ...


### Examples

#### 1. Create a controller test class**

For the controller class:
    "app\Http\Controllers\Shop\Product.php":

    php artisan make:test Http/Controllers/Shop/ProductTest


Then we have the test class:

    tests/Feature/Http/Controllers/Shop/ProductTest.php


#### 2. Create a helper test class

For the helper class:
    "app\Helpers\Dates.php":

    php artisan make:test app\Helpers\DatesTest --unit


Then we have the test class:

    tests/Unit/app/Helpers/DatesTest.php


***

[Go to index](../../README.md)
