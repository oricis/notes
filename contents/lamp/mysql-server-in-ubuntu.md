# MySQL / Ubuntu

*Server version: 5.7.29-0ubuntu0.18.04.1*

***


## MySQL directories:

>Data directory:

    /var/lib/mysql/

*This directory store the dbs for example.*


>Other directories:

    /var/lib/mysql-files/
    /var/lib/mysql-keyring/
    /var/lib/mysql-upgrade/

>Logs:

    /var/log/mysql/

***WARN:**&nbsp; don't delete the directory files, this break the mysql.server*

***NOTE:**&nbsp; Ubuntu save the app logs in /var/log/*

***

## MySQL database server configuration file

>Edit this file:

    sudo nano /etc/mysql/mysql.conf.d/mysqld.cnf


***

## General Commands

>Check the service status:

    sudo systemctl status mysql


>Stop the service:

    sudo systemctl stop mysql


>Start the service:

    sudo systemctl start mysql


>Restart the service:

    sudo systemctl restart mysql


***

[Go to index](../../README.md)
