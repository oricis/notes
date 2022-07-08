# Xampp on Ubuntu 18.04

PHP files can be placed on:

    /opt/lampp/htdocs/


Commands:

	sudo /opt/lampp/lampp restart
	sudo /opt/lampp/lampp start
	sudo /opt/lampp/lampp stop

To `start` the services individually run some of the commands:

	sudo /opt/lampp/lampp startapache
    sudo /opt/lampp/lampp startmysql
    sudo /opt/lampp/lampp startftp

To uninstall:

	cd  /opt/lampp
	sudo  ./uninstall


From:

	https://conpilar.es/como-instalar-xampp-en-ubuntu-20-04/

***

## Use PHP commands (included Composer)

### Link PHP to run PHP commands

You can try the command:

	php --version

If PHP isn't found a suggestion to install *something* in printed.
Let's create a symlink to the php binary from `/usr/bin`:

	sudo ln -s /opt/lampp/bin/php /usr/bin/php

Check installed version:

	php --version


### Install composer

Install composer:

	sudo apt install composer

Check installed version:

	composer --version


***

### VS Code settings

The editor ask to set "php.validate.executablePath"  when open the first PHP file.
On "settings.json":

	"php.validate.executablePath": "*otp/lampp/bin/php",


***

[Go to index](../../README.md)
