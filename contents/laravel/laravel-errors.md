# Errores comunes en Laravel

## 1. Las rutas amigables no funcionan, solo se carga la ruta "home".

Esto ocurre usando o no *virtualhost* y es un problema con la ***configuración
del servidor***.
Si tenemos, por ejemplo, una "página de contacto", mientras que las ruta
base funciona:

    http://demo.local
    http://localhost/Laravel/demo/public

las siguientes fallarán:

    http://demo.local/contact
    http://localhost/Laravel/demo/public/contact

Con una página que muestra algo como esto:

    Not Found
    The requested URL was not found on this server.
    Apache/2.4.57 (Ubuntu) Server at www.demo.local Port 80

Si estamos en el entorno de desarrollo, deberíamos poder ver las rutas
conrrectamente usando el servidor local que trae Laravel:

    php artisan serve

y abrimos:

    http://127.0.0.1:8000/contact

### Solución 1

Listar los ficheros de Apache:

    ls -f /etc/apache2

Nos interesa "apache2.conf", lo abrimos como administrador:

    sudo nano /etc/apache2/apache2.conf

Si encuentras:

    <Directory /var/www/>
        Options Indexes FollowSymLinks
        AllowOverride None
        Require all granted
    </Directory>

Cambiar `AllowOverride None` por `AllowOverride All` y reiniciar Apache:

    sudo systemctl restart apache2

¿No funciona?

El .htaccess de "nuestro_proyecto/public/" tiene un bloque de configuraciones
dentro de un bloque condicional:

    <IfModule mod_rewrite.c>
        ...
    </IfModule>

**mod_rewrite** debe estar habilitado para que las URLs amigables funcionen.
Ejecutar:

    sudo a2enmod rewrite

y reiniciar Apache:

    sudo systemctl restart apache2


***NOTA:** podemos ver si un modulo como "mod_rewrite" esta instalado y cargado*
*en la página que genera `phpinfo`, sección*
*"Configuration / apache2handler / Loaded Modules", buscar "mod_rewrite"*.
*Tambien pueden listarse los modulos en la consola, comando `apachectl -M`,*
*en este caso buscamos: "rewrite_module"*.

***

## No funciona `env('MY_KEY')`

Si tu fichero ".env" contiene la clave a la que intentas acceder,
has podido cachear la configuración, p.e. con:

    php artisan config:cache

o más probablemente:

    php artisan optimize

Después de esto, Laravel deja de leer el archivo ".env" y devuelve `null`.

Para solucionar el problema borra la caché de configuración:

    php artisan config:clear

NOTA IMPORTANTE: la función `env()` no debe usarse fuera de los ficheros
del directorio "config/". Para evitar este problema, añade la clave que
requieres en un fichero de configuración, cachea la configuración
y usa `config()` en lugar de `env()` para acceder al valor requerido.


***

[Go to index](../../README.md)
