# Ubuntu for dummies

Sources:
    https://laguialinux.es/analizar-sistema-de-archivos-y-particion/
    https://knowledge.broadcom.com/external/article/168068/how-to-force-fsck-filesystem-check.html
    https://unix.stackexchange.com/a/132805


## Get System information

> List disks and partitions, 3 ways:

    sudo fdisk -l

    df -h

    lsblk -f


## Check and repair disks and partitions

### Check Fat32 file systems (memory cards, pen drives, etc.)

Use the tool `dosfsck`, f.e.:

> sudo dosfsck -t -a /dev/sdg1

Where `-t` check clusters and `-a` do a silent repair

### Check & repair disk partitions with `fsck`

*`fsck` only can fix unmounted partitions.*

1. List partitions

    df -h

2. Unmount the partition to repair

    sudo umount <device|directory>

3. Apply `fsck` "automatically"

    fsck -y <device>

or

    fsck -p <device>

NOTE: `-y` fix all the errors automatically, its the equivalent to respond yes
for all questions, meanwhile `-p` will take the correct decision, *yes* or *no*
each time.

To fix the active partition, you can start a demo ubuntu session with
an installation usb disk o similar, then list the partition, unmount the system
partition and run the `fsck` command.


***

[Go to index](../../README.md)
