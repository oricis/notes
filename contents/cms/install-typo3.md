# Instalando Typo3

> https://docs.typo3.org/m/typo3/guide-installation/master/en-us/QuickInstall/Index.html

***

## Clonar / instalar

Instalo en el directorio local:

    var/www/html/pruebas/typo3cms


con *Composer*:

    cd var/www/html/pruebas/
    composer create-project typo3/cms-base-distribution typo3cms


### Git init

Comienzo el seguimiento con Git:

    git init
    git add --all
    git commit -m 'first commit - previous to install'


***

## Crear symlinks

En la doc, para instalar se pide crear symlinks:

    cd htdocs
    ln -s ../typo3_src-10.0.x typo3_src
    ln -s typo3_src/index.php index.php
    ln -s typo3_src/typo3 typo3


En mi caso:

    cd var/www/html/pruebas/typo3cms
    ln -s ../typo3cms typo3cms
    ln -s typo3cms/index.php index.php
    ln -s typo3cms/typo3 typo3


En el directorio donde se encuentran pueden verse con:

    ls -lh

*Son los de menor tamaño y tiene una flecha apuntando a otro directorio / fichero.*


***

## Instalando ...

Con "http://localhost/pruebas/typo3cms/public/" se carga:

    http://localhost/pruebas/typo3cms/public/typo3/install.php


Pedirá crear el fichero vacío en el directorio raíz: ***FIRST_INSTALL***

    cd var/www/html/pruebas/typo3cms/public/
    touch FIRST_INSTALL


> Recargar la página.

Debe aparecer la pantalla ***"Environment Overview"***
con los problemas que se encuentran para la instalación.

Yo tengo un *error* en el valor de "max_file_size" y algunos *warnings*.

> Editar fichero "php.ini" en Ubuntu. Listamos la versión de PHP instalada:

    cd /etc/php/
    ls


> Entrar al directorio de PHP, p.e.:

    cd /etc/php/7.2/apache2
    ls


> Abrir el fichero "php.ini" para editarlo:

    sudo nano php.ini


***Buscar en Nano:***

    Ctrl + w

*y pegar o escribir.*


***Guardar y cerrar en Nano:***

    Ctrl + o + Enter
    Ctrl + x


> Reiniciar Apache:

    sudo apache2ctl restart


Clicar el botón bajo la lista de *errores / warnings*:

    "Scan Environment Again".


### Configurando la BD y administrador

La siguiente pantalla es para configurar el acceso a la BD. Usaré *MySql*.
En este punto, debemos tener un *usuario / contraseña* creado para asignar al CMS.
Seguidamente podemos asignarle una BD ya creada o crear una.

A continuación, se requiere el *usuario / contraseña* para el administrador.
P.e., y solo para desarrollo:

    yop / 12345678


La última pantalla (instalación 100%) presenta las opciones:

 * Create empty starting page
 * Take me straight to the backend (seleccione esta)

y el botón:

    "Open the TYPO3 backend".


Se abre la ventana para *loguearse* en el panel.

### Git commit

Continuo el seguimiento con Git:

    git add --all
    git commit -m 'installation completed'


En este punto voy a ver la BD en phpMyAdmin (hay 45 tablas) y a hacer un
volcado de la BD. Guardo el fichero SQL en un repositorio Git para poder
ver cambios a futuro.


***

[Go to index](../../README.md)
