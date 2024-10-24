# Useful Linux commands

## Dates

> Show calendar:

    cal

> Show a calendar with a date in the pass

    cal 01 1990

> Show a date

    date

## Files

> Concat several text files in one

F.e. in the actual directory exist the files "foo.md" and "baz.md", to join
their contents in a new file called "foobaz.mb":

    cat foo.md baz.md >> foobaz.md

> Find a file in the actual directory

    find filename.type

or with a wildcard:

    find filename.*

or:

    find *name.type

> List the trash files

    ls ~/.local/share/Trash/files/

*If the trash is empty the "files" directory isn't accessible (doesn't exist).*

> Remove the trash contents

    rm -rf ~/.local/share/Trash/*


## Command aliases

> Set alias to a command (actual terminal session)

The syntax:

    alias aliasname='the command'

The example:

    alias foo='cd ~/Documents'

> Remove the alias

    unalias foo

> Show commands history (actual terminal session)

    history


## Install, remove, update, search packages

> First, update the package list data:

    sudo apt update

*Maybe, some packages can to be upgraded:

    ...
    Leyendo lista de paquetes... Hecho
    Creando árbol de dependencias... Hecho
    Leyendo la información de estado... Hecho
    Se pueden actualizar 14 paquetes. Ejecute «apt list --upgradable» para verlos.
    ...

> List upgradable packages:

    apt list --upgradable

> Upgrade packages:

    sudo apt upgrade

> Search a package:

    apt search package_name

Example:

    apt search zurl
    Ordenando... Hecho
    Buscar en todo el texto... Hecho
    zurl/jammy 1.11.1-1 amd64
    HTTP client worker with ZeroMQ interface

> Remove a package:

    sudo apt remove package_name


***

[Go to index](../../README.md)
