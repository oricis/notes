# The Docker's basics

> [Docker website page](https://docs.docker.com)

> [Docker images](https://hub.docker.com)

docker pull mariadb
docker pull nginx
docker pull sonarqube
docker pull mysql
docker pull node


*Other resources:*

* [Docker for Beginners course](https://kodekloud.com/p/docker-for-the-absolute-beginner-hands-on)

***

## Check the installed Docker version

    docker --version

    docker -v


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

    docker -v


> Check the Docker installation. Say "hello world":

    sudo docker run hello-world

The props must show:

    ...

    Hello from Docker!
    This message shows that your installation appears to be working correctly.

    ...


> List commands and options:

    docker --help


> Dockerfiles

A *Dockerfile* is a plain text file with instructions on how to build an image.
Name it *Dockerfile*, without extension.

Content to create a ReactJS container:

    FROM node:14
    WORKDIR /usr/src/app
    COPY package*.json app.js ./
    RUN npx create-react-app first-test; cd first-test; npm install
    EXPOSE 3000
    CMD ["node", "first-test/src/index.js"]


*NOTE: only use double quotes in the CMD line.*

### Dockerfile details

Use the official Node.js image, based on Alpine Linux, using Node 14.
The workdir is especified as `/usr/src/app` that exist in the docker image.


***

[Go to index](../../README.md)
