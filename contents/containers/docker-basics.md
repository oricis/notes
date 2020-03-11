# The Docker's basics

> [Docker website page](https://docs.docker.com)

> [Docker images](https://hub.docker.com)

docker pull mariadb
docker pull nginx
docker pull sonarqube
docker pull mysql
docker pull node


*Other resources:*

* [Docker for Beginners course](https://kodekloud.com/p/docker-labs)

***

## Check the installed Docker version

    docker --version


***

## Install Docker in Ubuntu

*Contents from:* [Get Docker Engine - Community for Ubuntu](https://docs.docker.com/install/linux/docker-ce/ubuntu/)

<br>

> Remove older versions:

    sudo apt-get remove docker docker-engine docker.io containerd runc

> [Install it](https://docs.docker.com/install/linux/docker-ce/ubuntu/#install-using-the-convenience-script):

    curl -fsSL https://get.docker.com -o get-docker.sh
    sudo sh get-docker.sh


> Check the Docker version

    docker --version


> Check the Docker installation. Say "hello world":

    sudo docker run hello-world

The props must show:

    ...

    Hello from Docker!
    This message shows that your installation appears to be working correctly.

    ...


> List commands and options:

    docker --help


***

[Go to index](../../README.md)
