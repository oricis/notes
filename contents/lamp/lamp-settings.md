

# Setting a Ubuntu LAMP

***Index of contents:***

* [Install Apache / nGinx server](./lamp-settings.md#index1)
* [Create a directory for the web projects](./lamp-settings.md#index2)
* [Install MySQL server](./lamp-settings.md#index3)
* [Create virtual hosts](./lamp-settings.md#create-virtual-hosts)
* [Test your PHP](./lamp-settings.md#index5)


***
***

## <a name="index1"></a>Install Apache / nGinx server

    sudo apt update
    sudo apt install apache2

<br>

> Check service status:

    service apache2 status


> Start / stop the service:

    sudo service apache2 start
    sudo service apache2 stop


> Check Apache logs (Ubuntu / Debian):

    sudo tail /var/log/apache2/access.log
    sudo tail /var/log/apache2/error.log


## <a name="index2"></a>Create a directory for the web projects:

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


***

## <a name="index3"></a>Install MySQL server: [Go to instructions](./mysql-server-installation.md)

*To open phpMyAdmin go to `http://localhost/phpmyadmin/` in your browser.*


***

## <a name="index4"></a>Create virtual hosts

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

***

## <a name="index5"></a>Test your PHP

> Check your PHP version:

    php --version


> Put a *index.php* file with the next content in the `/var/www/html/yoursite/ directory`:

    <?php
    phpinfo();


> Open the directory in your browser:

    http://localhost/yoursite


***

[Go to index](../../README.md)
