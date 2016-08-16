# vagrant_docker_compose_ng
Vagrant/docker compose repo for working with angular 2



## Resources 

* I used this to have angular-cli installed its super simple: [Docker-ng](https://github.com/metal3d/docker-ng)
    I essentiall used this example:
    "`docker-compose.yml`" example file, see the "user" section and the "volumes" that bind "myproject" to "/project":
    
    ```yaml
    version: '2':
    services:
        myproject:
            image: metal3d/ng
            command: serve
            ports:
            - 4200:4200
            - 49152:49152
            user: 1000:1000
            volumes:
            - ./myproject:/project
    ```
    
* [Vagrant-Docker-Compose](https://github.com/leighmcculloch/vagrant-docker-compose)

### extra info

* [Getting Started Angular2 using Docker Compose](https://www.eyesoreinc.com/getting-started-angular2-using-docker-compose/)