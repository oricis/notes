
# Verbos comunes HTTP

<br>

> **GET**.


Se usará sólo para pedir datos al servidor. Las peticiones GET no contienen cuerpo. Los parámetros de la consulta se pasan en la cadena URL.

<br>

> **POST**.

Se usará para crear (o actualizar) información en el servidor. Los parámetros y los datos se pasan en el cuerpo.

<br>

> **HEAD**.

Devuelve sólo las cabeceras de las respuestas, no el cuerpo (nos interesa el código de respuesta y los headers HTTP). Se usa, por ejemplo, para saber el tamaño de un recurso o su antigüedad (lee la longitud o la fecha de la última modificación de la cabecera).

<br>

***

## Verbos HTTP más comunes en REST

| Verbo HTTP    |  CRUD  |	Función
| :-----------: | :----: | -----------
| POST	        | Create | Crea 1 nueva instancia en el Servidor
| GET		    | Read	 | Obtiene 1 objeto existente del Servidor
| PUT	        | Update | Modifica 1 objeto existente del Servidor
| DELETE	    | Delete | Elimina 1 objeto existente del Servidor

***NOTA:** En ocasiones se intercambia el uso de POST y PUT.*

***

[Go to index](../README.md)
