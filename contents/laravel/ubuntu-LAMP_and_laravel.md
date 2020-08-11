# Setting the Ubuntu environment for Laravel
------------------------------------------------------------------

Previously, you have to [install Apache, PHP and MySQL](./lamp-settings.md).


<br>

> Set read permissions to the Apache root directory i.e /var/www/html/:

    sudo chmod -R 755 /var/www/html/


> Create directory for Laravel projects:

    sudo mkdir -m 755 /var/www/html/laravel


> Clone your Laravel app into `/var/www/html/laravel`
> o [create a new one](https://laravel.com/docs).


> Set the permissions to the Laravel app:

    sudo chmod -R 777 /var/www/html/laravel/your-app/storage
    sudo chmod -R 777 /var/www/html/laravel/your-app/bootstrap/cache/


***

[Go to index](../../README.md)
