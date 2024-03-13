# Working with files and directories

***NOTE:** the create, copy, etc. operations can require to use `sudo`.*

## Create

> Create a file

    touch file_name.file_extension

> Create a file with the editor (nano) and write content

1. Open nano with the name of the file: `nano file_name.file_extension`
2. Write something
3. Save: `Ctrl + S`

> Create a directory

    mkdir directory_name

## Copy

> Copy directory with its contents

    cp directory_path/ new_directory_path/ -r

> Copy directory with its contents (maintain file and directory permissions)

    cp directory_path/ new_directory_path/ -ra

***NOTE:** to ***copy files*** use the same comands without the `r` option.*

## Delete

> Remove directory

    rm directory_path -r

> Remove file

    rm file_path

## Move

> Move directory with its contents

    mv directory_path/ new_directory_path/

> Move file

    mv file_path new_file_path

***NOTE:** this command is used to move files and directories and to rename*
*them or combine these operations.*

***

[Ubuntu for dummies](./ubuntu-for-dummies.md)

[Go to index](../../README.md)
