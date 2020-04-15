# JS Tips

***

## Remove styles, inline and linked CSS, from one webpage

> Open the console and run the command:

            document.querySelectorAll(
                'style,link[rel="stylesheet"]'
            ).forEach(item => item.remove())

*From: https://flaviocopes.com/how-to-remove-all-css/*

***

[Go to index](../../README.md)
