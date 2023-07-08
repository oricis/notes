Paquetes PHP 8 laravel / mysqladmin:

    sudo apt install php8.1-common php8.1-bcmath openssl php8.1-json php8.1-mbstring
    sudo apt install phpmyadmin php8.1-zip php8.1-gd php8.1-curl


# Install MySQL on Ubuntu 18.04.

Por defecto, `apt` instala MariaDB no mySQL.


## Install MySQL database step by step

Primero eliminar rastros previos de mysql del sistema:

    sudo apt-get --purge autoremove "^mysql.*"


Descarfar el último paguete estable de instalación, p.e.

    sudo wget https://dev.mysql.com/get/mysql-apt-config_0.8.15-1_all.deb


e instalar:

    sudo dpkg -i mysql-apt-config_0.8.15-1_all.deb


Refrescar la `cache de paquetes de apt` para que los nuevos paquetes esten disponibles:

    sudo apt update


Instalar MySQL:

    sudo apt-get update
    sudo apt-get install mysql-server mysql-client libmysqlclient-dev


Comprobar el estado de MySQL status:

    sudo service mysql status


### Instalar Adminer

Obtener última versión del instalador:

    wget https://www.adminer.org/latest.php

Mover el fichero descargado:

    sudo mkdir /usr/share/adminer
    sudo mv latest.php /usr/share/adminer/adminer.php

Crear el fichero de configuración en Apache:

sudo nano /etc/apache2/conf-available/adminer.conf

Añadimos un alias:

    Alias /adminer /usr/share/adminer/adminer.php

Guardamos, cerramos y recargamos la configuración:

    sudo a2enconf adminer

Y el servicio de apache:

    sudo systemctl reload apache2

Instalar extensiones necesarias para "adminer":

    sudo apt install -y php8.1-mysql php8.1-pgsql php8.1-sqlite3

Recargar el servicio de apache:

    sudo systemctl reload apache2

Para acceder al "panel de adminer" en el navegador:

    http://localhost/adminer


### Añadir usuarios MySql local

Iniciar session como superusuario:

    sudo mysql


    > CREATE USER 'foo'@'localhost' IDENTIFIED BY '12345';
    > GRANT ALL PRIVILEGES ON * . * TO 'foo'@'localhost';

Volver a cargar todos los privilegios:

    > FLUSH PRIVILEGES;

Para ver los usuarios registrados:

    > SELECT user FROM mysql.user;


### Crear base de datos MySql

Iniciar session como superusuario:

    sudo mysql


    > CREATE DATABASE somename;



Asignar usuario y contraseñA:

    > GRANT USAGE ON somename.* TO foo@localhost IDENTIFIED BY '12345';

Recargar privilegios:

    > FLUSH PRIVILEGES;


Para ver las BDs existentes:

    > SHOW databses;

***

Fuentes:
https://comoinstalar.me/como-instalar-adminer-en-ubuntu-20-04-lts/
https://www.ochobitshacenunbyte.com/2015/02/02/crear-una-base-de-datos-mysql-en-gnu-linux/


***

[Go to index](../../README.md)
