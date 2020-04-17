# HTTP Headers

***

## Configuration in .htaccess

    <IfModule mod_headers.c>
        # Protect against XSS attacks
        Header set X-XSS-Protection "1; mode=block"

        # Protect against page-framing and click-jacking
        Header set X-Frame-Options "DENY"

        # Protect against content-sniffing
        Header set X-Content-Type-Options "nosniff"

        # Set Strict-Transport-Security
        Header set Strict-Transport-Security "max-age=31536000; includeSubDomains; preload"

        # Add Referrer-Policy security header
        Header set Referrer-Policy "same-origin"

        ## Feature-Policy
        Header set Feature-Policy "microphone 'none'; geolocation 'none'; fullscreen 'self'"
    </IfModule>

    <IfModule mod_negotiation.c>
        # Disable all directory views
        Options -Indexes
    </IfModule>

    # Apply a CSP to all HTML and PHP files
    <FilesMatch "\.(html|php)$">
        Header set Content-Security-Policy "default-src 'self'; script-src 'self'; style-src 'self'; img-src * data:; child-src 'none'; font-src 'self' *.gstatic.com 'unsafe-inline'; object-src 'none'"
    </FilesMatch>

    # Disable ServerSignature
    ServerSignature Off

*From: https://htaccessbook.com/important-security-headers/*

*Other could be "Feature-Policy". For more visit: https://scotthelme.co.uk/a-new-security-header-feature-policy/*

*CSP: sitepoint.com/content-security-policy-getting-started/*
*https://www.inmotionhosting.com/support/website/force-hsts-using-htaccess/*


***

[Go to index](../../README.md)
