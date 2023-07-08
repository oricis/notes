# How to update phpMyAdmin to version 5.x on Ubuntu 18.04

We can find our phpMyAdmin installation on '/usr/share/':

    cd  /usr/share/

Rename the previous installation to restore if it will be necessary:

    sudo mv phpmyadmin phpmyadmin.bak


## Download phpMyAdmin 5

Go to phpMyAdmin last downloads page:
https://www.phpmyadmin.net/downloads/

*I dowloaded the zip file 5.0.4 multi-language.*


## Extract phpMyAdmin and move to the correct place

Extract the zip content on *downloads*, rename to "phpmyadmin" and
move the directory to its destination:

    sudo mv phpmyadmin/ /usr/share/phpmyadmin


## Create necessary directories / files

> Create the temp files directory and give the permissions:

    sudo mkdir -p /var/lib/phpmyadmin/tmp
    sudo chown -R www-data:www-data /var/lib/phpmyadmin

> Create the configuration file

    cd /usr/share/phpmyadmin
    sudo cp config.sample.inc.php config.inc.php

> Edit the config file

    sudo nano /usr/share/phpmyadmin/config.inc.php

> Set secret passphrase (32 characters):

    $cfg['blowfish_secret'] = 's4injc8aFDRssar4rfDE45cSDf9gr6td';

> Set temp directory:

    $cfg['TempDir'] = '/var/lib/phpmyadmin/tmp';


## Restart the server and open phpMyAdmin

> Restart Apache2

    sudo systemctl restart apache2

> Open phpMyAdmin on browser.

    http://localhost/phpmyadmin


***

This tutorial is based on this other (how to install latest phpmyadmin):
    https://computingforgeeks.com/how-to-install-latest-phpmyadmin-on-ubuntu-debian/


***

[Go to index](../../README.md)
