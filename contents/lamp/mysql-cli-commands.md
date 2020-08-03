# MySQL CLI commands

***

## Create a BD

    mysql> CREATE DATABASE database_name;

> or:

    mysql> CREATE DATABASE IF NOT EXISTS database_name;

## Delete a DB

    mysql> DROP DATABASE database_name;

***WARNING:** Once you delete the database it cannot be recovered.*


## Access / exit - MySQL CLI:

*Access to mysql with administrative privileges.*

    mysql -u username -p

> To exit:

    mysql> exit;


***

## Create users and asign privileges

***NOTE:** the minimum conditions required for a strong password are:*

 * at least 9 characters
 * 2 lowercase letters
 * 2 uppercase letters
 * 2 numbers
 * 2 special characters (allowed): `‘ ~ ! @ # $ % ^ & * ( ) _ - + = { } [ ] / < > , . ; ? ' : | (space)`

> Create the user:

    mysql> CREATE USER 'user_name'@'localhost'
        IDENTIFIED BY 'user_password';

> or:

    mysql> CREATE USER 'user_name'@'localhost';
    mysql> SET PASSWORD FOR 'user_name'@'localhost' = PASSWORD('user_password');


> Asign privileges to work with the database:

    mysql> CREATE DATABASE IF NOT EXISTS `database_name`;

    mysql> GRANT SELECT, INSERT, UPDATE, DELETE, CREATE, DROP, INDEX, ALTER
        ON database_name.*
        TO 'user_name'@'localhost'
        IDENTIFIED BY 'user_password';
    mysql> FLUSH PRIVILEGES;
> or:

    mysql> GRANT ALL PRIVILEGES ON `database_name`.*
        TO 'user_name'@'localhost';
    mysql> FLUSH PRIVILEGES;


> Asign all the privileges for the database:

    mysql> GRANT ALL PRIVILEGES
        ON database_name.*
        TO 'user_name'@'localhost'
        IDENTIFIED BY 'user_password'
        WITH GRANT OPTION;
    mysql> FLUSH PRIVILEGES;

> or:

    mysql> GRANT ALL PRIVILEGES ON `database_name`.*
        TO 'user_name'@'localhost';
    mysql> FLUSH PRIVILEGES;


***

***NOTE:** "localhost" works to access a database with a local user account.*
*To access the database from a remote computer, it will be necessary*
*specify the IP address of that remote system here instead of "localhost".*


***

## MySQL - Get users information

*Access to mysql with an administrative privileges user.*

>Show all the users:

    mysql> SELECT User FROM mysql.user;


>Show the table "user" field names:

    mysql> DESC mysql.user;


> Show actual user privileges:

    mysql> SHOW GRANTS;


> Show specific user privileges :

    mysql> SHOW GRANTS FOR 'user_name';


***

## MySQL - Get general information

> List the databases:

    mysql> SHOW DATABASES;

> List a database tables:

    mysql> USE the_database_name;
    mysql> SHOW TABLES;

> List the table fields:

    mysql> DESC the_database_name.the_table_name;


> Show the available engines:

    mysql> SHOW ENGINES;


***

## Set a new user pw (no root)

> Access as root (use the sudo pw):

    sudo mysql -u root -p


> For MySQL 5.7.6 and later or MariaDB 10.1.20 and later type:

    mysql> UPDATE mysql.user SET authentication_string=PASSWORD('the_password')
        WHERE User='user_name' AND Host='localhost';


> For MySQL 5.7.5 and earlier or MariaDB 10.1.20 and earlier type:

    mysql> SET PASSWORD FOR 'user_name'@'localhost' = PASSWORD('the_password');


> Finally:

    mysql> FLUSH PRIVILEGES;
    mysql> exit;

***

[Go to index](../../README.md)
