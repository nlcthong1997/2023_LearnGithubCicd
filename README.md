- Build image: docker build -t [image_name] [Dockerfile]
 + docker build -t nginx1 .

- Build and run container: docker run -it -d -p [host_port]:[container_port] --name [container_name] [image_name/id]
 + docker run -it -d -p 8000:80 --name web1 nginx1

- Attach container: docker exec -it [container_name/id] bash
 + docker exec -it web1 bash

- List container onl: docker ps
- List container onl and off: docker ps -a

- Stop container: docker stop [container_name/id]

- Delete container: docker rm [container_name/id] [container_name/id] ...

- List images: docker images

- Delete image: docker rmi [image_name/id] [image_name/id] ...

- Check process worker container: docker top [container_name/id]