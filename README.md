### What is this? ###

* Node Starter customized from Express Js

### How do I get set up? ###

* This app running on docker container environment for easy installation and integration, you must install Docker and Docker compose module before.

* Docker Installation

    - [Docker Installation(Ubuntu)](https://docs.docker.com/install/linux/docker-ce/ubuntu/)
    
    - [Docker Compose Installation](https://docs.docker.com/compose/install/)
    
* Open '/build' directory, and execute shell file :
    
        `./build.sh`
    
* if executing shell file failed, change permission every shell file on 'build' directory, with

        `chmod +x build.sh`
        `chmod +x up.sh`
    and execute again.
    

* Wait for a minute, until process completed

* Docker compose will automatically running Install NPM package, install and running mongodb, API automated testing, delete old container, and running new container

* Make sure container running smooth and normal with checking docker container logs using command:

        `docker ps (for checking Container ID)`
        `docker logs [Container ID]`
        
 

Rizki Novrizal 2019

rizkinovrizal@gmail.com

