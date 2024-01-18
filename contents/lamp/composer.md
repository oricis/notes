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


#### Activate the PHP Curl extension

To active CURL you need to install the next modules, f.e. on PHP 7.4:

    sudo apt install libapache2-mod-php7.4 php7.4-curl


Open php.ini:

    sudo nano /etc/php/7.4/fpm/php.ini

search and uncomment:

    ;extension=curl

Save file and restart Apache:

    sudo systemctl restart apache2

***

[Go to index](../../README.md)
