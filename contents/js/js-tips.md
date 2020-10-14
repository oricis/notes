# JS Tips

***

## Remove styles, inline and linked CSS, from one webpage

> Open the console and run the command:

            document.querySelectorAll(
                'style,link[rel="stylesheet"]'
            ).forEach(item => item.remove())

*From: https://flaviocopes.com/how-to-remove-all-css/*

***
## Iterate an object to uptated values

    let checkboxes = {
        "One": false,
        "Two": false,
        "Three": false
    }
    console.log(checkboxes);
    Object.keys(checkboxes).map((key, index) => {
    checkboxes[key] = true;
    });

    console.log(checkboxes);

    /***
    Trace:
    {
        One:false,
        Two:false,
        Three:false
    }
    {
        One:true,
        Two:true,
        Three:true
    }
    */

***

[Go to index](../../README.md)
