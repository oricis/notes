# Install Laravel 7

    composer create-project --prefer-dist laravel/laravel:^7.3 laravel7

    cd laravel7
    sudo chmod 777 -R storage/
    composer install


## Install auth scaffolded

    sudo chmod 777 -R ./composer.json
    composer require laravel/ui "^2.4.1" --dev

    # Select one of these:
    php artisan ui bootstrap --auth
    php artisan ui vue --auth
    php artisan ui react --auth


***

[Go to index](../../README.md)
