# Slugs y URLs

> Normas básicas para los "slugs":

 * Palabras separadas por guiones
 * Usar sólo letras minúsculas, números y guiones
 * Deben ser cortos
 * Deben leerse de forma natural
 * Incluir palabras clave / Que tengan relación con la página


> Normas básicas para los "URLs" (incluye las propias de los "slugs"):

 * Secciones separadas por barras
 * Usar sólo letras minúsculas, números, guiones y los caracteres propios
(inicio con http:// o https:// puntos para subdominios / dominios y barras
para separar secciones)
 * Ser coherentes con la estructura del contenido
 * Usar números sólo si tiene sentido


## Eñes, acentos, diéresis

Presentes en el español no se encuentran en los teclados de muchos países.
Según el público objetivo puede ser mejor evitar su uso.

Puede contratarse un dominio con ñ o acento si es necesario.
Deberá establecerse como principal o *"canonical"*.
Contratar el mismo dominio sin estos caracteres y redirigirlo.


## Números en el slug

Sólo sí son necesarios, ejemplo páginas de películas:

    7-del-patíbulo
    2020-odisea-espacio


### Números en las URLs

En general lo mismo que para los números en el slug.
Pueden añadirse para organizar el contenido, por ejemplo "entradas" de un blog
organizadas por año:

    https://www.mipágina.es/blog/2020/lorem-ipsum


## Ejemplos

> Título de la página: "Venta de zanahorias de colores"

    Slug admisible:            venta-de-zanahorias-de-colores
    Slug mejorado (más corto): venta-zanahorias-colores


Suponiendo que la página trata varios temas, como "el huerto", y la venta
no es lo habitual. La URL de la página podría ser:

    https://www.mipágina.es/huerto/venta-zanahorias-colores


Si la página está dedicada al huerto, con contenidos diversos pero relacionados,
donde se venden algunas cosas, podría ser:

    https://www.huerto.es/venta/zanahorias-colores

***

## Tag de título y meta-descripciones

    <head>
        <title>SEO tips and tricks | SEO checklist and tools in 2024</title>
        <meta name="description" content="This is the ultimate SEO checklist..."></meta>
    </head>

El título debería ser de 52 a 60 caracteres y ser explicativo del contenido
de la página.

La meta-descripción debe incluir las palabras clave y un resumen del contenido
y no exceder los 155 caracteres, longitud donde Google corta el texto.

Otros meta-tags interesantes:

    <meta name="keywords" content="SEO, Web, tips">
    <meta name="author" content="John Doe">

***

[Go to index](../../README.md)
