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

## Add virtual host

Open `hosts` and add our virtual hosts:

	sudo nano /etc/hosts

After the edition i have the next file content:

	127.0.0.1       localhost
	127.0.1.1       mi-laptop
	127.0.1.2       foo.local
	127.0.1.3       ironwoods.local

	# The following lines are desirable for IPv6 capable hosts
	::1     ip6-localhost ip6-loopback
	fe00::0 ip6-localnet
	ff00::0 ip6-mcastprefix

Open the Apache config file:

	sudo nano /opt/lampp/etc/httpd.conf

Uncomment the line:

	Include etc/extra/httpd-vhosts.conf

And change `daemon` by the username and group name owners of the projects on:

	User daemon
	Group daemon
	</IfModule>

for example to:
	User www:data
	Group www:data
	</IfModule>

Save and open "httpd-vhosts.conf":

	sudo nano /etc/extra/httpd-vhosts.conf

Can use a content as this:

	<Directory "/opt/lampp/htdocs">
		Options Indexes FollowSymLinks Includes ExecCGI
		AllowOverride All
		Require all granted
	</Directory>

	<VirtualHost *:80>
		DocumentRoot "/opt/lampp/htdocs"
		ServerName localhost

		ErrorLog "logs/localhost.local-error_log"
		CustomLog "logs/localhost.local-access_log" common
	</VirtualHost>

	<VirtualHost *:80>
		DocumentRoot "/opt/lampp/htdocs/Laravel/foo/public"
		ServerName foo.local

		ErrorLog "logs/localhost.laravel-error_log"
		CustomLog "logs/localhost.laravel-access_log" common
	</VirtualHost>

	<VirtualHost *:80>
		DocumentRoot "/opt/lampp/htdocs/Laravel/ironwoods/public"
		ServerName ironwoods.local

		ErrorLog "logs/localhost.laravel-error_log"
		CustomLog "logs/localhost.laravel-access_log" common
	</VirtualHost>

	<VirtualHost *:80>
		DocumentRoot "/opt/lampp/htdocs/Laravel/skyerp/public"
		ServerName skyerp.local

		ErrorLog "logs/localhost.laravel-error_log"
		CustomLog "logs/localhost.laravel-access_log" common
	</VirtualHost>

	<VirtualHost *:80>
		DocumentRoot "/opt/lampp/htdocs/Laravel/cms/public"
		ServerName cms.local

		ErrorLog "logs/localhost.laravel-error_log"
		CustomLog "logs/localhost.laravel-access_log" common
	</VirtualHost>


###Sources:

  > https://simplecodetips.wordpress.com/2018/07/11/crear-virtualhost-con-xampp-en-ubuntu-18-04/

## Possible problems

 > AH00543: httpd: bad user name www:data

Open your file "httpd.conf":

	sudo nano /opt/lampp/etc/httpd.conf

Change the line:

	User www:data

with:

	User your_linux_user_name


***

[Go to index](../../README.md)
