

# Setting a Ubuntu LAMP (Linux, Apache, MySql & PHP)

***<a name="top-index">Index of contents:</a>***

* [Install Apache / nGinx server](./lamp-settings.md#install-apache-nginx)
* [Create a directory for the web projects](./lamp-settings.md#index2)
* [Create virtual hosts](./lamp-settings.md#create-virtual-hosts)
* [Install PHP on Ubuntu](./lamp-settings.md#install-php)
* [Test your PHP](./lamp-settings.md#index5)
* [Change between installed PHP versions](./lamp-settings.md#php-versions)
* [Get composer: the PHP dependency handler](./lamp-settings.md#php-composer)
* [Install MySQL server](./lamp-settings.md#index3)

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

## <a name="index4">Create virtual hosts</a>

To open `/var/www/html/yoursite/index.html` directly with, for example, `yoursite.local`, we need create a virtual host.


> Create the directory, take the control and add the index file:

    sudo mkdir -m 755 /var/www/html/yoursite
    sudo chown -R $USER:$USER /var/www/html/yoursite
    nano /var/www/html/yoursite/index.html

> Add the content:

    <!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8">
    <title>It is working!</title>
    </head>
    <body>
        <h1>This virtual host works !</h1>
        <hr>

        <p>This file is loding in the directory: <strong>/var/www/html/yoursite/</strong></p>
    </body>
    </html>


> Check the if the file works with the absolute path:

    lynx /var/www/html/yoursite/index.html

> or:

    firefox /var/www/html/yoursite/index.html

[ᐱ Top index](./lamp-settings.md#top-index)

***

### *Let's create the virtual host:*


Apache has the host configuration files in: */etc/apache2/sites-available*,
for example:

    000-default.conf
    default-ssl.conf


> Create a new file for each of the new virtual host, for example:

    sudo nano /etc/apache2/sites-available/yoursite.local.conf


> Add content as:

    <VirtualHost *:80>
        ServerAdmin webmaster@localhost
        ServerName  yoursite.local
        ServerAlias www.yoursite.local
        DocumentRoot /var/www/html/yoursite/
        ErrorLog ${APACHE_LOG_DIR}/yoursite/error.log
        CustomLog ${APACHE_LOG_DIR}/yoursite/access.log combined
    </VirtualHost>


> If you add a "custom directory" for the logs, you need to create this:

    sudo mkdir -p /var/log/apache2/yoursite/


> Enable virtual host configuration files

    sudo a2ensite yoursite.local.conf


> Add the host to the system

    sudo nano /etc/hosts

For example:

    127.0.0.1       localhost
    127.0.0.2       blog.local
    127.0.0.3       cms.local
    127.0.0.4       ironwoods.local
    127.0.0.5       laratest.local
    127.0.0.6       laravue.local
    127.0.1.2       www.blog.local
    127.0.1.3       www.cms.local
    127.0.1.4       www.ironwoods.local
    127.0.1.5       www.laratest.local
    127.0.1.6       www.laravue.local


> Checks for configuration errors:

    sudo apache2ctl configtest


*You should see the following output:*

    Syntax OK


> Restart the apache service

    sudo service apache2 stop
    sudo service apache2 start

> or:

    sudo apache2ctl restart


> List available virtual host (Ubuntu / Debian):

    apache2ctl -S


******************************************

> Check your virtual hosts

    lynx yoursite.local


***NOTE:**&nbsp; don's use the .dev domain to name your virtual hosts, firefox / chrome force
the https for this domain and you won't be able to open it in these browsers.
Is necessary use a domain name don't preloaded for [HSTS](https://en.wikipedia.org/wiki/HTTP_Strict_Transport_Security).
You can use: this [checker tool](https://hstspreload.org/) with your domain
to know if you can use in your virtual hosts. If the checker set in red,
the domain is eligible.*

[ᐱ Top index](./lamp-settings.md#top-index)

***

## <a name="install-php" id="install-php">Install PHP</a>

Several PHP versions can be installed on our system, one will be active
or selected for use.

Actually, I have PHP 8.1 in use. I go to install PHP 7.4.

> Run:
    sudo apt update
    sudo apt -y install software-properties-common

> Add the repository:

> Apache users can use:

    sudo add-apt-repository ppa:ondrej/apache2

> nginx user use:

  sudo add-apt-repository ppa:ondrej/nginx

> If you are not using Apache or nginx then:

    sudo add-apt-repository ppa:ondrej/php

> Run again:

    sudo apt update

> Install PHP:

    sudo apt -y install php7.4

> Install additional PHP modules:

    sudo apt-get install -y libapache2-mod-php7.4 openssl php7.4-mcrypt php7.4-cli php7.4-json php7.4-common php7.4-mysql php7.4-zip php7.4-gd php7.4-mbstring php7.4-curl php7.4-xml php7.4-bcmath php-tokenizer libsql-tokenizer-perl php7.4-redis php7.4-dom

### Common PHP modules (extensions)

    libapache2-mod-php7.4
    php7.4-bcmath - used when working with precision floats
    php7.4-cli  - command interpreter, useful for testing PHP scripts from a shell or performing general shell scripting tasks
    php7.4-common - documentation, examples, and common modules for PHP (include php-pdo)
    php7.4-curl - lets you make HTTP requests in PHP
    php7.4-dom
    php7.4-fpm  - server-side, HTML-embedded scripting language (FPM-CGI binary)
    php7.4-gd   - for working with images
    php7.4-imagick - for working with images
    php7.4-intl - Internationalisation module for PHP
    php7.4-json - for working with JSON data
    php7.4-mbstring - used to manage non-ASCII strings
    php7.4-memcached
    php7.4-mysql - for working with MySQL databases
    php7.4-redis
    php7.4-tidy - tidy module for PHP (clean & fix HTML documentos)
    php7.4-xml - for working with XML data
    php7.4-zip - for working with compressed files

To use Laravel you need:

    OpenSSL PHP Extension
    PDO PHP Extension
    Mbstring PHP Extension
    Tokenizer PHP Extension
    XML PHP Extension

Run:

    sudo apt install php7.4-common php7.4-bcmath openssl php7.4-json php7.4-mbstring


To use MySql:

    libapache2-mod-php
    php-mcrypt
    php-mysql

Run:

    sudo apt install libapache2-mod-php7.4 php7.4-common php7.4-mysql php7.4-mcrypt


> Remove PHP extension

    sudo apt remove php_module_name
    sudo apt autoclean && sudo apt autoremove

For example:

    sudo apt remove php7.4-redis
    sudo apt autoclean && sudo apt autoremove


[Search Linux distro extensions](https://linux-packages.com/search-page)
[PHP's manual extensions list](https://www.php.net/manual/en/extensions.alphabetical.php)
[PHP extensions for Ubuntu 20.04 LTS (Focal Fossa)](https://packages.ubuntu.com/focal/php/)
[PHP extensions for Ubuntu 18.04 LTS (Bionic)](https://packages.ubuntu.com/bionic/php/)

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
