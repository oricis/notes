# LAMP - Create virtual hosts

To open `/var/www/html/yoursite/index.html` directly with,
for example, `yoursite.local`, we need create a virtual host.


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

        <p>This file is loading in the directory:
            <strong>/var/www/html/yoursite/</strong></p>
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

    sudo apache2ctl restart

> or:

    sudo systemctl reload apache2

> List available virtual host (Ubuntu / Debian):

    apache2ctl -S


***

> Check your virtual hosts

    lynx yoursite.local


***NOTE:**&nbsp; don's use the .dev domain to name your virtual hosts, firefox / chrome force
the https for this domain and you won't be able to open it in these browsers.
Is necessary use a domain name don't preloaded for [HSTS](https://en.wikipedia.org/wiki/HTTP_Strict_Transport_Security).
You can use: this [checker tool](https://hstspreload.org/) with your domain
to know if you can use in your virtual hosts. If the checker set in red,
the domain is eligible.*


***

[Setting Ubuntu LAMP](./lamp-settings.md)
|
[Go to index](../../README.md)
