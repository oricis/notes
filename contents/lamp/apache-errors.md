# Common errors in Apache2 / Ubuntu

After run the command:

	sudo apachectl configtest

the next message is on the terminal:

> AH00558: apache2: Could not reliably determine the server's fully qualified domain name but it does not solve Config variable ${APACHE_LOCK_DIR} is not defined.

Run:

	source /etc/apache2/envvars
	/usr/sbin/apache2 -V

Or open Apache config:

	sudo nano /etc/apache2/apache2.conf

add in the end of the file content:

	ServerName 127.0.0.1

Save & close, test again:

	sudo apachectl configtest

and reload:

	sudo systemctl reload apache2.service


***

[Go to index](../../README.md)
