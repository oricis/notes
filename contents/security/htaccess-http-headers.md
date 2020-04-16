# HTTP Headers

***

## Configuration in .htaccess

    # Protect against XSS attacks
    # Protect against page-framing and click-jacking
    # Protect against content-sniffing
    # Set Strict-Transport-Security
    # Add Referrer-Policy security header
    # Content-Security-Policy (enable CDN)
    <IfModule mod_headers.c>
        Header set X-XSS-Protection "1; mode=block"
        Header set X-Frame-Options "SAMEORIGIN"
        Header set X-Content-Type-Options "nosniff"
        Header always set Strict-Transport-Security "max-age=63072000; includeSubDomains"
        Header set Referrer-Policy "same-origin"
        Content-Security-Policy: default-src https://www.cloudflare.com; child-src 'none'; object-src 'none'
    </IfModule>
    <IfModule mod_negotiation.c>
        # Disable all directory views
        Options -Indexes
    </IfModule>

    # Disable ServerSignature
    ServerSignature Off

*From: https://htaccessbook.com/important-security-headers/*

*Other could be "Feature-Policy". For more visit: https://scotthelme.co.uk/a-new-security-header-feature-policy/*


***

[Go to index](../../README.md)
