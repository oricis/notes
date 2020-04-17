# Clickjacking Defense - Frame breaker script

*From: https://cheatsheetseries.owasp.org/cheatsheets/Clickjacking_Defense_Cheat_Sheet.html*

> Include the script in the header of each page that should not be framed:

    <style id="antiClickjack">
        body{display:none !important;}
    </style>
    <script type="text/javascript">
        if (self === top) {
            var antiClickjack = document.getElementById("antiClickjack");
            antiClickjack.parentNode.removeChild(antiClickjack);
        } else {
            top.location = self.location;
        }
    </script>


*Prevent to be framed in legacy browsers without X-Frame-Options-Header support.*


***

[Go to index](../../README.md)
