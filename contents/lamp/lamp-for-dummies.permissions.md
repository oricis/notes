# LAMP for dummies

**The tips on this page are based in Ubuntu distros.**

***

## Permisos Linux

> ***Ver permisos de ficheros y directorios*** en la ubicación actual:

    ls -l

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

    * Primer grupo: permisos del propietario del fichero.
    * Segundo grupo: permisos del grupo de usuarios del fichero.
    * Tercer grupo: permisos para el resto de usuarios.

Así los permisos de asignan mediante grupos numéricos de 3 cifras,
*p.e. 777 asigna todos los permisos a los 3 grupos de usuarios.*

* Asignar permisos mediante números.

    0: Sin permisos
    1: Ejecución
    2: Escritura
    3: Escritura + ejecución
    4: Lectura
    5: Lectura + ejecución
    6: Lectura + escritura
    7: Lectura + escritura + ejecución

Así el 7 equivale a 421 o el 6 a 720.

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

### Asignar permisos: chmod

> Asignar permisos a directorio o fichero:

    sudo chmod 755 -- <directory-or-file-name>


> Para asignar permisos de forma recursiva, al directorio y directorios / ficheros hijos:

    sudo chmod 755 -R -- <directory-name>


> Ejemplo.
> Asignar permisos al directorio de logs de Laravel 5+

    sudo chmod 775 -- storage/logs

> Puedes **copiar los permisos de un fichero a otro**,
> p.e. borras el fichero error.log de apache y quieres volver a crearlo:

    sudo chmod --reference=access.log error.log


### Cambiar propietario: chown

> Cambiar el propietario de un fichero:

    sudo chown <owner> <file-name>
    sudo chown <owner> /<directory-name>

> Cambiar el propietario de un directorio y su contenido recursivamente:

    sudo chown -R <owner> /<directory-name>

> Cambiar el grupo de un fichero o directorio:

    sudo chown :<group> <file-name>
    sudo chown :<group> /<directory-name>

> Cambiar el grupo de un directorio y su contenido recursivamente:

    sudo chown -R :<group> /<directory-name>

> Cambiar el propietario y grupo de un fichero o directorio:

    sudo chown <owner>:<group> <file-name>
    sudo chown <owner>:<group> /<directory-name>

***

### Información sobre los grupos de usuarios

> ¿En que grupos estoy?

    groups

> ¿A que grupos pertenece el usuario "xxx"?

    groups xxx

> ¿Que usuarios tiene el grupo "foo"?

    getent group foo

***

## Acciones sobre directorios

> Crear un directorio:

    mkdir ruta-nuevo-directorio


> Borrar un directorio (recursivamente):

    rm -R ruta-directorio


> Crear una copia de un directorio con su contenido y permisos:

    sudo cp -r -p ruta-direcorio-a-copiar ruta-nuevo-directorio


***

### Fuentes consultadas

    * https://www.tutorialesubuntu.com/2009/11/11/explicacion-de-permisos-de-ficheros-y-carpetas-en-ubuntu/

***

### Notas

> Cambios de permisos, propietario o grupo y Git.

Si tenemos ficheros de un repositorio **Git** y cambiamos sus permisos,
Git detecta cambios en los ficheros, si bien, el "diff" no muestra nada.
Cambiar el propietario o grupo de los ficheros directorios, no conlleva
modificaciones para Git.

***

[Go to index](../../README.md)
