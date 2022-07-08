# Composer

## Composer errors

 * On browser, you can see:

> Composer detected issues in your platform: Your Composer dependencies require a PHP version ">= 8.0.0".

### Update Composer

    sudo composer self-update

    
### On Laravel app

1. Check PHP version in use:

    php -v


2. Set the correct PHP version on "composer.json", f.e.:

    "php": "^8.0",


3. Reload the autoload class-map:

        composer dump-autoload --ignore-platform-reqs

    or:

        composer install --ignore-platform-reqs

    or:

        composer update --ignore-platform-reqs


***

[Go to index](../../README.md)
