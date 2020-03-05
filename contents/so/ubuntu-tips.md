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

## Listar ficheros ocultos de un directorio:

	ls -d .!(|.)


***

[Go to index](../../README.md)
