# Tips in Ubuntu Linux (18.04)

## Contents

1.  Tips
2.  Create / delete vars
3.  Aliases
4.  Print content from one text file
5.  Install packages / programs
6.  List the actual location files & folders
7.  Show system info
8.  Get actual location and move to others
9.  Who I am?
10. DNS
11. Repositories


*Commands for the bash shell.*

***

## Tips

    When we are writting a command, we can use the 'tab' key to autocomplete
    the command. Push other time to watch the available command options.

    Use the 'up' and 'down' keys to jump between the last used commands.
    Use the 'left' and 'right' keys to move the cursor between words in the
    actual command.

    Use 'Ctrl' + 'R' and write a command word to reverse search it between
    the used commands.


***

## Create / delete vars

### Create / delete a var in the actual session

> Create a  var

	export HOLA='hello world'


> Print & Result

	echo $HOLA
	hello world


> Delete the var HOLA

	unset HOLA

### Create / delete a permanent var in the system

*Add or delete the var in the file '/etc/environment'*

	sudo nano /etc/environment

> Save and exit (nano). Use key combinations:

	Ctrl + O + Enter
	Ctrl + X

***

## Aliases

### Create permanent aliases

> Open .bashrc file:

	sudo nano ~/.bashrc


> Move down to the bottom of the file and add the aliases:

	#Custom Aliases

	alias rm='rm -i' # request confirmation before deleting a file


> Save and exit (nano). Use key combinations:

	Ctrl + O + Enter
	Ctrl + X


***

## Crear un enlace simbólico (create symbolic links)

Para crear un enlace a un directorio:

1.&nbsp;Crear en el escritorio una carpeta con el nombre deseado.

2.&nbsp;En la terminal escribir:

	sudo ln -s /ruta_destino /ruta_a_la_carpeta_que_creaste

Por ejemplo:

	sudo ln -s /var/www/html/laravel /home/orici/Escritorio/dev-laravel


> Remover un enlace simbólico:

Se obtiene el nombre del enlace:

Por ejemplo hay un enlace simbólico a /usr/bin/php/ que quiero reemplazar, por lo que voy a remover el original, solicito su nombre:

	sudo -l /usr/bin/php

obtengo:

	/usr/bin/php

Ahora con `rm` se elimina (no añadir / al final del path):

	sudo rm /usr/bin/php

Se puede añadir el nuevo enlace simbólico, p.e.:

	sudo ln -s /opt/lampp/bin/php /usr/bin/php

***

## Print content from one text file

*Imprime en la terminal las 10 últimas líneas de un fichero de texto*

    tail the_file_path


***

## Instalar paquetes / programas (Install packages / programs)

>Antes de comenzar a instalar:

	apt-get update && apt-get upgrade


***

## Listar ficheros del directorio actual (List the actual location files & folders)

> Ficheros visibles:

	ls

> Ficheros ocultos

	ls -d .!(|.)

> Todos los ficheros y  directorios

	ls -a

> Todos los ficheros y  directorios con sus permisos

	ls -la

***

## Ver información del sistema (Show system info)

> Sobre la distro actual

	cat /etc/*release


> Host actuales:

	cat /etc/hosts


> Todas las variables de entorno del sistema

	env


> Sobre un paquete instalado (requiere conexión):

	apt show package_name

*por ejemplo:*

	apt show php


> Servicios (activos e inactivos):

	service --status-all

	systemctl list-units -a


> Servicios activos:

	service --status-all | grep '\[ + \]'

	systemctl list-units -a --state=active


> Servicios inactivos:

	service --status-all | grep '\[ - \]'

	systemctl list-units -a --state=inactive


> Servicios en ejecución:

	systemctl list-units --type=service


***

## Get actual location and move to others

> Where I am?
> Gets the actual location

    pwd


> Move to other locations

    cd

*Move to the beginning.  The directory where the propt was open.*

    cd ..

*Move to the parent directory*

    cd /

*Move to the root directory*

## Who I am?

 > Gets the current user

	who

## DNS

### Change DNS Settings in Chrome

1. To change the default setting on Chrome, paste the following URL in the address bar:

    chrome://net-internals/#hsts

2. Then, open the Domain Security Policy tab and scroll down to the Delete domain security policies section.

3. Add localhost as the domain name and click Delete.

***

### Clean DNS cache

Watch DNS statistics:

    sudo systemd-resolve --statistics

Clean DNS cache:

    sudo systemd-resolve --flush-caches

***

## Repositories

### Search packages in the repositories

The command `apt-cache search <name>` search and list the packages
in the repositories.

 > To search PHP 7 versions:

    apt-cache search php7

 > Can use *aptitude* to search:

    aptitude search <name>


***

[Go to index](../../README.md)
