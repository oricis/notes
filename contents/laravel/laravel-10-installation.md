# Create a clean Laravel 10 installation

## Installation

### Navigate to web root and create the app

    cd /var/www/html/Laravel
    composer create-project --prefer-dist laravel/laravel myapp "10.*"

### Set permissions

    sudo chown -R www-data:www-data /var/www/html/Laravel/myapp/storage
    sudo chown -R www-data:www-data /var/www/html/Laravel/myapp//bootstrap/cache
    sudo chmod -R 755 /var/www/html/Laravel/myapp//storage
    sudo chmod -R 755 /var/www/html/Laravel/myapp//bootstrap/cache

## Configure the app

### Set the .env file

    # Navigate to project and configure environment
    cd /var/www/html/Laravel/myapp
    cp .env.example .env

    # Generate application key
    sudo php artisan key:generate

    # Edit .env file to set database credentials and other settings


    sudo nano .env

    LOG_CHANNEL=daily

    # Ensure these lines are set correctly:
    # DB_CONNECTION=mysql
    # DB_HOST=127.0.0.1
    # DB_PORT=3306
    # DB_DATABASE=laravel_db
    # DB_USERNAME=laravel_user
    # DB_PASSWORD=your_secure_password

*NOTE: you must create a db with the correct name and credentials.*

#### Optional: to use a sqlite database

> Create the file (or use php artisan migrate to create automatically)

    touch /var/www/html/Laravel/myapp/database/database.sqlite

> Set on .env

    DB_DATABASE=/var/www/html/Laravel/myapp/database/database.sqlite

### Update config (timezone and locale)

    sudo nano /var/www/html/Laravel/myapp/config/app.php

Change to (or you necessary settings):

    'timezone' => 'Europe/Madrid',
    'locale' => 'es',

Run command:

    php artisan config:clear

### Create Apache Virtual Host configuration

    sudo nano /etc/apache2/sites-available/myapp.conf

    # Add the following content to the file:
    <VirtualHost *:80>
        ServerName your_domain_or_ip
        DocumentRoot /var/www/html/Laravel/myapp/public

        <Directory /var/www/html/Laravel/myapp>
            AllowOverride All
            Require all granted
        </Directory>

        ErrorLog ${APACHE_LOG_DIR}/laravel-error.log
        CustomLog ${APACHE_LOG_DIR}/laravel-access.log combined
    </VirtualHost>

    # Enable the new site and rewrite module
    # NOTE: set the correct file_name.conf on the next line
    sudo a2ensite myapp.conf
    sudo a2dissite 000-default.conf
    sudo a2enmod rewrite

    # Restart Apache
    sudo systemctl restart apache2

### Add your_domain.local to the system hosts

> Open hosts:

    sudo nano /etc/hosts

There are a content, for example, as this:

    127.0.0.1       localhost
    127.0.0.2       blog.local
    127.0.0.3       cms.local

Add to the lists:

    127.0.1.0       your_domain.local
    127.0.1.1       www.your_domain.local

Close and test:

    sudo apache2ctl configtest

### Finally

Your Laravel 10 application is now installed and accessible at
http://your_domain_or_ip.


***

[Go to index](../../README.md)
