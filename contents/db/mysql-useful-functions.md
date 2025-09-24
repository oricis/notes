# Useful MySql functions for inserts or updates

> Generate random numbers:

    FLOOR(1 + (RAND() * 100))       # ramdom number from 1 to 100

> Generate random strings:

    UUID()                          # Example:  'a1c2d3e4-f5g6-h7i8-j9k0-l1m2n3o4p5q6'
    MD5(RAND())                     # 32 characters string
    SUBSTRING(MD5(RAND()), 1, 12)   # 12 characters string
    SUBSTRING(REPLACE(UUID(), '-', ''), 1, 10) # 12 characters string

> Generate random dates

    DATE_SUB(CURDATE(), INTERVAL FLOOR(RAND() * 30) DAY)    # Random date in the past 30 days

> Concat values to insert in one field

    CONCAT('Foo ', column2)
    CONCAT(column1, ' ', column2)

*NOTE: in MySql CONCAT accepts a variable number of args, from 1 to n.*
*For different SGBD check the doc.*

> Cast types

Use `CAST()` or `CONVERT()` function to change a field's data type during an
INSERT ... SELECT operation.
Example:

    CAST(expression AS type)

F.e. you new db field "active" store a tinyint value 1 or 0,
the old db field "active"uses a boolean:

    INSERT INTO newdb.table (id, active)
    SELECT id, CAST(active AS UNSIGNED INTEGER)
    FROM olddb.table;


***

[Go to index](../../README.md)
