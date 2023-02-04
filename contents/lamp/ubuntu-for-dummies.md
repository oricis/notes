# Ubuntu for dummies

***<a name="top-index">Index of contents:</a>***

* [Get System information](./ubuntu-for-dummies.md#system-information)
* [Create direct accesses from Desktop](./ubuntu-for-dummies.md#direct-accesses)
* [Check and repair disks and partitions](./ubuntu-for-dummies.md#check-and-repair)
* [Open files](./ubuntu-for-dummies.md#open-files)
* [Security: tools and tips](./ubuntu-for-dummies.md#security-tools)

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

## <a name="security-tools">Security: tools and tips</a>

> Check for listening ports:

	netstat -tulpn

> List active processes:

    top

*NOTE: can install and use [htop](https://ubunlog.com/htop-controlar-procesos-ubuntu/) instead.*
*This program has more information and control over the processes in execution.*


### Antivirus: clamav

> Install:

	sudo apt-get install clamav

> Update virus signatures:

	sudo freshclam

> Search malware (actual directory)

	sudo clamscan

> Search malware (actual directory and subdirectories)

	sudo clamscan --exclude-dir="^/sys" --recursive

### Firewall: UFW (Uncomplicated Firewall)

Run all commands as sudo.

> Install

    apt update
    apt install ufw

#### Show status

    ufw status

#### Enable, disable & restart

    ufw enable

    ufw disable

    ufw reload

#### Settings incoming traffic not in rules (default rules setting)

> Deny all (recommended):

    ufw default deny incoming

> Allow all:

    ufw default allow incoming

#### Settings outgoing traffic not in rules (default rules setting)

> Deny all:

    ufw default deny outgoing

> Allow all:

    ufw default allow outgoing

#### Set rules

Syntax:

    ufw allow port_number
    ufw allow port_number/protocol

Examples:

> Allow SSH:

    ufw allow 22

> Allow port 80 only TCP protocol

    ufw allow 80/tcp

> Allow incoming traffic to all port numbers or protocols from a concrete IP:

    ufw allow from 10.0.0.0 // incoming traffic from 10.0.0.0 IP

> To restrict the rule before, f.e to port number 22:

    ufw allow from 10.0.0.0 to any port 22

#### Show rules

    ufw status numbered

#### Remove rules

> After list, remove by number:

    ufw status numbered
    ufw delete 4

> Remove all rules except the default set
> (deny|allow all incoming|outgoing will remain)

    ufw reset

#### Enable | disable logging

    ufw logging on

    ufw logging off

> Watch logs:

    nano /var/log/ufw.log


[ᐱ Top index](./lamp-settings.md#top-index)

***

[ᐱ Top index](./lamp-settings.md#top-index)
|
[Go to index](../../README.md)
