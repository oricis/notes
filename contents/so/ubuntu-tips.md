# Tips in Ubuntu Linux (18.04)

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

[Go to index](../../README.md)
