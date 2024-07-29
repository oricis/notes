# Git Tips

Ver el [listado de comandos más usados de Git](https://www.ironwoods.es/blog/git/comandos-habituales).

***

## Etiquetas en Git (Tags)

* Ver tags (sólo lista nombres):

	git tag

* Ver tags con sus mensajes:

	git tag -n


*NOTA: Los nombres de los tags serán únicos (suele usarse número de versión).*

* Guardar tag (sólo con nombre):

	git tag tag_name

* Guardar tag (con nombre y mensaje):

	git tag tag_name -m "mensaje del tag"

* Reescribir el mensaje de un tag:

	git tag tag_name -f -m "Nuevo mensaje"

* Eliminar un tag:

	git tag -d tag_name


### Renombrar tags

> Renombrar tag: old-tag-name

	git tag -d old-tag-name
	git push origin :refs/tags/old-tag-name

	git tag new-tag-name
	git push --tags


> A ejecutar por los colaboradores:

	git pull --prune --tags


*NOTA: Los tags, por defecto, sólo se guardan en el repo local.*

* Enviar los tags al repo remoto:

	git push --tags


***

## Varios Git

* Eliminar todos los cambios del espacio de trabajo (sobre ficheros ya en seguimiento)

	git checkout .


* Decartar último commit local y remoto:

	git reset HEAD~1
	git push -f


***

[Comandos màs usados de Git](https://www.ironwoods.es/blog/git/comandos-habituales)

[Ramas en Git](./contents/git/git-branches.md)

***

[Go to index](../../README.md)
