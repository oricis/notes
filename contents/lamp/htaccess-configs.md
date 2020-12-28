# htaccess configurations

***

## Configuration for assets compression with Nginx:

gzip on;
gzip_min_length  1100;
gzip_buffers  4 32k;
gzip_types  application/font-woff
            application/vnd.ms-fontobject
            application/x-javascript
            font/eot
            font/opentype
            font/truetype
            font/woff
            image/svg+xml
            image/x-icon
            text/css
            text/plain
            text/xml;
gzip_vary on;


***

[Go to index](../../README.md)
