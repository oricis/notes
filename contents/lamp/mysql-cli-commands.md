# MySQL CLI commands

***

## Create a BD

    mysql>CREATE DATABASE xxx;


## Access / exit - MySQL CLI:

*Access to mysql with administrative privileges.*

    mysql -u username -p

> To exit:

    exit;


***

## Create users and asign privileges

> Create the user:

    CREATE USER 'user_name'@'localhost'
        IDENTIFIED BY 'user_password';


> Asign privileges to work with the database:


    GRANT SELECT, INSERT, UPDATE, DELETE, CREATE, DROP, INDEX, ALTER
        ON database_name.*
        TO 'user_name'@'localhost'
        IDENTIFIED BY 'user_password';
    FLUSH PRIVILEGES;


> Asign all the privileges for the database:

    GRANT ALL PRIVILEGES
        ON database_name.*
        TO 'user_name'@'localhost'
        IDENTIFIED BY 'user_password'
        WITH GRANT OPTION;
    FLUSH PRIVILEGES;


***

## Show user privileges

> Actual user:

    SHOW GRANTS;


> Specific user:

    SHOW GRANTS FOR 'user_name';


***

***NOTE:** "localhost" works to access a database with a local user account.*
*To access the database from a remote computer, it will be necessary*
*specify the IP address of that remote system here instead of "localhost".*


***

## MySQL - Get users information

*Access to mysql with an administrative privileges user.*

>Show all the users:

    SELECT User FROM mysql.user;

>Show the table "user" field names:

    DESC mysql.user;

***

## MySQL - Get general information

>List the databases:

    SHOW databases;

>List a database tables:

    use the_database_name;
    SHOW tables;

>List the table fields:

    DESC the_database_name.the_table_name;


***

## Set a new root pw

> Use the system admin pw and sudo to access as root:

    sudo mysql -u root -p


> Select the database:

    use mysql;


> Set the new user root pw:

    // TODO:
    UPDATE user SET password=PASSWORD('12345') WHERE user='root';

***

[Go to index](../../README.md)
