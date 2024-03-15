# Install PHP on Ubuntu

*Several PHP versions can be installed on our system, one will be active*
*or selected for use.*

Actually, I have PHP 8.1 in use. I will go to install PHP 7.4.

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

    sudo apt-get install php7.4 -y

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


***

[Setting LAMP](./lamp-settings.md)
|
[Go to index](../../README.md)
