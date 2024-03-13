# Security: tools and tips

> Check for listening ports:

	netstat -tulpn

> List active processes:

    top

*NOTE: can install and use [htop](https://ubunlog.com/htop-controlar-procesos-ubuntu/) instead.*
*This program has more information and control over the processes in execution.*


## Antivirus: clamav

> Install:

	sudo apt-get install clamav

> Update virus signatures:

	sudo freshclam

> Search malware (actual directory)

	sudo clamscan

> Search malware (actual directory and subdirectories)

	sudo clamscan --exclude-dir="^/sys" --recursive

## Firewall: UFW (Uncomplicated Firewall)

*Run all commands as sudo.*

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

***

[Ubuntu for dummies](./ubuntu-for-dummies.md)

[Go to index](../../README.md)
