# Ubuntu - How to update to a new PHP version

Actually my Ubuntu 20.04 has a PHP 7.4 running.
To install and run PHP 8.1 follow the steps:

> Add PPA for PHP 8.1:

    sudo apt install software-properties-common
    sudo add-apt-repository ppa:ondrej/php
    sudo apt-get update

> Installa PHP 8.1 and common packages:

    sudo apt install php8.1

    sudo apt install php8.1-common php8.1-mysql php8.1-xml php8.1-xmlrpc php8.1-curl php8.1-gd php8.1-imagick php8.1-cli php8.1-dev php8.1-imap php8.1-mbstring php8.1-opcache php8.1-soap php8.1-zip php8.1-intl -y

> Enable PHP 8.1

    sudo a2dismod php7.4
    sudo a2enmod php8.1

> Restart Apache2:

    sudo systemctl restart apache2

> Check PHP version:

    php -v

***NOTE:** to change to a different PHP version you can select from the list*
*of the installed ones with:*

    sudo update-alternatives --config php


[ᐱ Top index](./lamp-settings.md#top-index)

***

[ᐱ Top index](./lamp-settings.md#top-index)
|
[Go to index](../../README.md)
