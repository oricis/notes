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

> Set alias to a command (actual terminal session)

The syntax:

    alias aliasname='the command'

The example:

    alias foo='cd ~/Documents'

> Remove the alias

    unalias foo

> Show commands history (actual terminal session)

    history


***

[Go to index](../../README.md)
