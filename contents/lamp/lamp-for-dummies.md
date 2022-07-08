# LAMP for dummies

**The tips on this page are based in Ubuntu distros.**

***

## PHP error logs

    cd  /var/log/apache2/

> Open default Apache2 error logs file:

    nano /var/log/apache2/error.log

> Check php.ini configuration for:

    error_reporting = E_ALL | E_STRICT ### recommended for dev

    # custom error file
    error_log = /var/log/php_errors.log

***Note:** php.ini location as "/etc/php/7.2/apache2/php.ini"*


> Create log file:

    sudo touch /var/log/php_errors.log
    sudo chmod 660 /var/log/php_errors.log


> Check errors:

    sudo tail /var/log/php_errors.log


***

## Find files

    locate filename.ext


Example:

    locate php.ini

***

## Installed PHP

## Show PHP version in use

### CLI version:

    php --version

### Apache2 in use version

1. Create a phpinfo.php file and open in browser. File content:

    <?php
    phpinfo();

## Change between installed PHP versions or list installed PHP version

### PHP Cli:

    sudo update-alternatives --config php

### Apache2 PHP version:

1. Stop the actual in use version:

    sudo a2dismod php7.2

2. Load the new version:

    sudo a2enmod php8.0

3. Restart Apache2:

    sudo systemctl restart apache2


## List all compiled PHP modules

    php -m

## List installed PHP modules

    dpkg --get-selections | grep -i php

## Search a installed PHP module

    dpkg --get-selections | grep -i php-mbstring

## PHP all command line options

    php --help

***

### Fuentes consultadas

    * https://www.tecmint.com/list-php-modules-in-linux/

***

[Go to index](../../README.md)
