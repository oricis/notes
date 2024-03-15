

# Setting a Ubuntu LAMP (Linux, Apache, MySql & PHP)

***<a name="top-index">Index of contents:</a>***

* [Change between installed PHP versions](./lamp-settings.md#php-versions)
* [Create a directory for the web projects](./lamp-settings.md#index2)
* [Create virtual hosts](./lamp-virtual-hosts.md)
* [Get composer: the PHP dependency handler](./lamp-settings.md#php-composer)
* [Install Apache / nGinx server](./lamp-settings.md#install-apache-nginx)
* [Install MySQL server](./lamp-settings.md#index3)
* [Install PHP](./ubuntu-install-php.md)
* [Install a new PHP version on Ubuntu 20](.ubuntu-add-php-version.md)
* [Test your PHP](./lamp-settings.md#index5)

PHP configurations related to Apache are stored in the *php.ini* file on the
directory `/etc/php/php_version_number/apache2/`, for example:

    /etc/php/7.4/apache2/php.ini

***


## <a name="install-apache-nginx">Install Apache / nGinx server</a>
    sudo apt update
    sudo apt install apache2

<br>

> Check service status:

    service apache2 status


> Start / stop the service:

    sudo service apache2 start
    sudo service apache2 stop

> Enable / disable the service:

    sudo systemctl enable apache2
    sudo systemctl disable apache2

NOTE: by default Apache will start automatically on each system start.
To avoid this, disable the service. It can be started when will be necessary.

> Check Apache logs (Ubuntu / Debian):

    sudo tail /var/log/apache2/access.log
    sudo tail /var/log/apache2/error.log

[ᐱ Top index](./lamp-settings.md#top-index)

***

## <a name="index2">Create a directory for the web projects:</a>

    sudo mkdir /var/www
    sudo mkdir /var/www/html


> Set the property over the directory:

    sudo chown -R $USER:$USER /var/www/html


> Set read permissions to the directory:

    sudo chmod -R 755 /var/www/html/


> Test the server creating a index page:

    nano index.html


> Add the content:

    <!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8">
    <title>Apache is working!</title>
    </head>
    <body>
        <h1>Apache works !</h1>
        <hr>

        <p>This file is loding in the directory: <strong>/var/www/html/</strong></p>
    </body>
    </html>


> Open the new file to check if Apache is running:

*If you have the lynx browser intalled:*

    lynx /var/www/html/index.html

*or open the folder and click over the file to open it in your default browser.*

*or go to `http://localhost/` in your browser.*

[ᐱ Top index](./lamp-settings.md#top-index)

***

## [Create virtual hosts](./lamp-virtual-hosts.md)

[ᐱ Top index](./lamp-settings.md#top-index)

***

[Install PHP](./ubuntu-install-php.md)

[ᐱ Top index](./lamp-settings.md#top-index)

***

## <a name="index5">Test your PHP</a>

We can have two different versions of PHP in use on the system,
one in the terminal and other running in the web server (Apache, Nginx, etc).


> Check your PHP version (CLI version):

    php --version

> or:

    php -v

> Check PHP modules:

    php --modules

> or:

    php -m

> Check PHP version and modules that run on Apache.
> Place an *index.php* file on the directory `/var/www/html/PHP/` with:

    <?php
    phpinfo();


> Open the directory in a web browser:

    http://localhost/PHP

> Watch PHP configurations related to Apache in `/etc/php/7.4/apache2/php.ini`
> (set the PHP version in use).

[ᐱ Top index](./lamp-settings.md#top-index)

***

## <a name="php-versions">Swap PHP version</a>

    sudo update-alternatives --config php

Then a list of available PHP versions will appear or a message as this:

> Sólo hay una alternativa en el grupo de enlaces php (provee /usr/bin/php): /usr/bin/php8.1
> Nada que configurar.

If several PHP versions are available choose one (this will use on the CLI)
To enable the same version for Apache|Nginx, f.e. PHP 8.1:

    sudo a2dismod php7.4
    sudo a2enmod php8.1
    sudo systemctl restart apache2

[ᐱ Top index](./lamp-settings.md#top-index)

***

## <a name="php-composer" id="php-composer">Get composer: the PHP dependency handler</a>

[Composer](https://getcomposer.org/) isn't necessary to run or develop
with pure PHP but it's strongly necessary t[o handle libraries and dependencies.
Actually, after install PHP in your system you must to install Composer
to start to work.

[ᐱ Top index](./lamp-settings.md#top-index)

***

## <a name="index3">Install MySQL server:</a>s [Go to instructions](./mysql-server-installation.md)

*To open phpMyAdmin go to `http://localhost/phpmyadmin/` in your browser.*


***

[ᐱ Top index](./lamp-settings.md#top-index)
|
[Go to index](../../README.md)
