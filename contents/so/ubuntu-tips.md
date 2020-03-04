# Tips in Ubuntu Linux (18.04)

## Crear un enlace desde el escritorio

Para crear un enlace a un directorio:

1.&nbsp;Crear en el escritorio una carpeta con el nombre deseado.

2.&nbsp;En la terminal escribir:

	sudo ln -s /ruta_destino /ruta_a_la_carpeta_que_creaste

Por ejemplo:

	sudo ln -s /var/www/html/laravel /home/orici/Escritorio/dev-laravel


***

## Listar ficheros ocultos de un directorio:

	ls -d .!(|.)


***

[Go to index](../../README.md)
