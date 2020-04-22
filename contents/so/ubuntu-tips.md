# Tips in Ubuntu Linux (18.04)

*Commands for the bash shell.*

## Tips

    When we are writting a command, we can use the 'tab' key to autocomplete
    the command. Push other time to watch the available command options.

    Use the 'up' and 'down' keys to jump between the last used commands.
    Use the 'left' and 'right' keys to move the cursor between words in the
    actual command.

    Use 'Ctrl' + 'R' and write a command word to reverse search it between
    the used commands.


***

## Create / delete a var in the actual sesion

> Create a  var

	export HOLA='hello world'


> Print & Result

	echo $HOLA
	hello world


> Delete the var HOLA

	unset HOLA


***

## Create / delete a permanent var in system

*Add or delete the var in the file '/etc/environment'*

	sudo nano /etc/environment

> Save and exit (nano). Use key combinations:

	Ctrl + O + Enter
	Ctrl + X

***


## Create permanent aliases

> Open .bashrc file:

	sudo nano ~/.bashrc


> Move down to the bottom of the file and add the aliases:

	#Custom Aliases

	alias rm='rm -i' # request confirmation before deleting a file


> Save and exit (nano). Use key combinations:

	Ctrl + O + Enter
	Ctrl + X


***

## Crear un enlace desde el escritorio

Para crear un enlace a un directorio:

1.&nbsp;Crear en el escritorio una carpeta con el nombre deseado.

2.&nbsp;En la terminal escribir:

	sudo ln -s /ruta_destino /ruta_a_la_carpeta_que_creaste

Por ejemplo:

	sudo ln -s /var/www/html/laravel /home/orici/Escritorio/dev-laravel


***

## Imprimir contenido de un fichero

*Imprime en la terminal las 10 últimas líneas de un fichero de texto*

    tail the_file_path


***

## Instalar paquetes / programas

>Antes de comenzar a instalar:

	apt-get update && apt-get upgrade


***

## Listar ficheros de un directorio:

> Ficheros visibles:

	ls


> Ficheros ocultos

	ls -d .!(|.)


> Todos los ficheros

	ls -a


***

## Ver información del sistema

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

## Where I am?

> Actual location

    pwd


> Move to other locations

    cd

*Move to the beginning.  The directory where the propt was open.*

    cd ..

*Move to the parent directory*

    cd /

*Move to the root directory*


***

[Go to index](../../README.md)
