# MySQL Backups

***

## Import a database

    mysql -u root -p database_name < the-database-backup.sql;


***

## Export a database (create a SQL backup)

    mysql -u root -p database_name > the-database-backup.sql;


***

## Restore a database backup

    use database_name;
    source the-database-backup.sql;

***


[Go to index](../../README.md)
