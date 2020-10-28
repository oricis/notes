# Use of libraries from Github projects

***

# How to do?

> Open a public project in your browser.

> Go to the file a view in "raw" mode.

> Copy the URL from the navigation bar

<br>
You can use your raw files, for example:

    https://raw.githubusercontent.com/oricis/bootstrap-based-styles/master/assets/common.css


and CDN services as:

 * https://raw.githack.com/

    NOTE: this service give you two resource URLs, one for production
(optimized, etc. ) and the other for development updating the cached file,
it will be changed each several minutes...


 * https://gitcdn.link/

    NOTE: this service links to the latest version (aka the master branch)
and have cache times (updates won't be available immediately, watch doc:
https://github.com/schme16/gitcdn.xyz)


<br>

> Add to your HTML head document:

`<link href="https://gitcdn.link/repo/oricis/bootstrap-based-styles/master/assets/common.css" rel="stylesheet">`

***

[Go to index](../README.md)

