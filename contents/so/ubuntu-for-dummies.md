# Ubuntu for dummies

***<a name="top-index">Index of contents:</a>***

* [Get System information](./ubuntu-for-dummies.md#system-information)
* [Create direct accesses from Desktop](./ubuntu-for-dummies.md#direct-accesses)
* [apt commands](./ubuntu-for-dummies.md#apt-commands)
* [Check and repair disks and partitions](./ubuntu-for-dummies.md#check-and-repair)
* [Open files](./ubuntu-for-dummies.md#open-files)
* [Security: tools and tips](./ubuntu-security-basis.md)
* [Working with files and directories](./ubuntu-files-and-directories.md)

Sources:
    https://laguialinux.es/analizar-sistema-de-archivos-y-particion/
    https://knowledge.broadcom.com/external/article/168068/how-to-force-fsck-filesystem-check.html
    https://unix.stackexchange.com/a/132805

***

## <a name="system-information">Get System information</a>

> List disks and partitions, 3 ways:

    sudo fdisk -l

    df -h

    lsblk -f

[ᐱ Top index](./lamp-settings.md#top-index)

***

## Show current user:

    who

## Toggle between root console and actual user UI

From UI to root terminal:

    Ctrl + Alt + F1

From root terminal to User session UI:

    Ctrl + Alt + F7

[ᐱ Top index](./lamp-settings.md#top-index)

***

## <a name="direct-accesses">How to create direct access from Desktop to folders or files</a>

1\. Go to the folder and open the terminal in the current location (only if the folder was open graphically)

2\. Run command:

    ln -s $PWD ~/Desktop/

or:

    ln -s $PWD ~/Escritorio/

### Create a direct access to a subfolder or file in the current location

1\. Open the terminal on the current location.

2\. Run command:

    ln -s $PWD/file_or_directory_name ~/Desktop/

or

	ln -s $PWD/file_or_directory_name ~/Escritorio/

[ᐱ Top index](./lamp-settings.md#top-index)

***

## <a name="apt-commands">apt commands</a>

**apt purge** similar a `apt remove` salvo que elimina archivos de configuración
que el segundo deja intactos.

**apt autoremove** elimina paquetes no requeridos actualmente que fueron instalados
para satisfacer dependencias de otros paquetes .

**apt autoclean** limpia el repositorio local de archivos de paquetes recuperados
que ya no van a ser utilizados.

**apt dist-upgrade** actualiza y maneja "inteligentemente" las dependencias
cambiantes con nuevas versiones de paquetes.

##### Fuentes
 - https://es.stackoverflow.com/a/342626/20709
 - https://manpages.ubuntu.com/manpages/trusty/es/man8/apt-get.8.html

[ᐱ Top index](./lamp-settings.md#top-index)

***

## <a name="check-and-repair">Check and repair disks and partitions</a>

### Check Fat32 file systems (memory cards, pen drives, etc.)

Use the tool `dosfsck`, f.e.:

> sudo dosfsck -t -a /dev/sdg1

Where `-t` check clusters and `-a` do a silent repair

### Check & repair disk partitions with `fsck`

*`fsck` only can fix unmounted partitions.*

1\. List partitions

    df -h

2\. Unmount the partition to repair

    sudo umount <device|directory>

3\. Apply `fsck` "automatically"

    fsck -y <device>

or

    fsck -p <device>

NOTE: `-y` fix all the errors automatically, its the equivalent to respond yes
for all questions, meanwhile `-p` will take the correct decision, *yes* or *no*
each time.

To fix the active partition, you can start a demo ubuntu session with
an installation usb disk o similar, then list the partition, unmount the system
partition and run the `fsck` command.

[ᐱ Top index](./lamp-settings.md#top-index)

***

## <a name="open-files">Open files</a>

 > .AppImage

This file contains an executable program. It won't be installed.
To run the program write on the terminal:

    chmod a+x file_name.AppImage
    ./file_name.AppImage


 > .run

To open a file of this type write on the terminal:

    chmod +x file_name.run
    ./file_name.run

[ᐱ Top index](./lamp-settings.md#top-index)

***

[ᐱ Top index](./lamp-settings.md#top-index)
|
[Go to index](../../README.md)
