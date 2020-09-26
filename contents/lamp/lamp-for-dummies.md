# LAMP for dummies

**The tips on this page are based in Ubuntu distros.**

***

## PHP error logs

    cd  /var/log/apache2/


> Check php.ini configuration for:

    error_reporting = E_ALL | E_STRICT ### recommended for dev

    # custom error file
    error_log = /var/log/php_errors.log

***Note:** php.ini location as "/etc/php/7.2/apache2/php.ini"*


> Create log file:

    sudo touch /var/log/php_errors.log
    sudo chmod 660 /var/log/php_errors.log


> Check errors:

    sudo tail /var/log/php_errors.log


***

## Permisos Linux

> ***Ver permisos de ficheros y directorios*** en la ubicación actual:



> ***Ver permisos de un fichero o carpeta***, por ejemplo, "README.md" en la ubicación actual:

    ls -l | grep README.md


### Explicación de los permisos

* La primera columna, *después de usar el comando `ls -l`*, muestra los permisos.


* El **-** (guión) inicial indica un archivo:

    -rwxrwxrwx

* La **d** inicial indica un directorio:

    drwx——


* 3 tipos de permisos:

    * ***Lectura.*** Letra: **r**

        Indica si puedes abrir el fichero / directorio y ver su contenido.

    * ***Escritura.*** Letra: **w**

        Indica si puedes modificar el contenido.

    * ***Ejecución.*** Letra: **x**

        Indica si podemos ejecutar el archivo, p.e., *un script*.


* 3 grupos de permisos, con 3 permisos cada uno:

    * Primer grupo: permisos del usuario dueño del fichero.
    * Segundo grupo: permisos del grupo de usuarios del fichero.
    * Tercer grupo: permisos para el resto de usuarios.

* Representamos los grupos como números.

    El equivalente númerico viene del binario, donde el 7 equivale en binario a 111 y el 0 a 000.

        111 -> RWX -> 7
        110 -> RW- -> 6
        101 -> R-X -> 5
        100 -> R–  -> 4
        011 -> -WX -> 3
        010 -> -W- -> 2
        001 -> –X  -> 1
        000 -> —   -> 0

    * **777** equivale a **rwxrwxrwx**.
        *Cada uno de los grupos tiene todos los permisos.*

    * **766** equivale a **rwxrw-rw-**.
        *Primer grupo (propietario) con todos los permisos. Otros dos grupos sin permiso de ejecución.*

    * **755** equivale a **rwxr-xr-x**.
        *Primer grupo (propietario) con todos los permisos. Otros dos grupos sin permiso de modificación.*

    * **754** equivale a **rwxr-xr--**.
        *Primer grupo (propietario) con todos los permisos. Segundo grupo (grupo de usarios del fichero / directorio) puede leer y ejecutar, tercer grupo (resto de usuarios) sólo lectura.*

    * **655** equivale a **rw-r-xr-x**.
        *Primer grupo (propietario) con  permisos de lectura y modificación. Otros dos grupos sin permiso de modificación.*
    * **700** equivale a **rwx------**.
        *Primer grupo (propietario) con todos los permisos. Otros dos grupos sin permisos.*


### Asignar permisos

> Asignar permisos a directorio o fichero:

    sudo chmod 755 -- <directory-or-file-name>


> Para asignar permisos de forma recursiva, al directorio y directorios / ficheros hijos:

    sudo chmod 755 -R -- <directory-name>


> Ejemplo.
> Asignar permisos al directorio de logs de Laravel 5+

    sudo chmod 775 -- storage/logs

***

## Acciones sobre directorios

> Crear un directorio:

    mkdir ruta-nuevo-directorio


> Borrar un directorio (recursivamente):

    rm -R ruta-directorio


> Crear una copia de un directorio con su contenido y permisos:

    sudo cp -r -p ruta-direcorio-a-copiar ruta-nuevo-directorio


***

<br>

### Fuentes consultadas

    * https://www.tutorialesubuntu.com/2009/11/11/explicacion-de-permisos-de-ficheros-y-carpetas-en-ubuntu/


***

[Go to index](../../README.md)
