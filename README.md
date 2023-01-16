# Doker Cross Container Application
This repo is an example of how to use docker to chain up mysql, nginx, php and vue.js.

The full explaination of the whole set up can be found in my blog : 

- [CROSS CONTAINER ( PART 1 ) - DOCKER NETWORKING - CONNECT PHP + MYSQL + NGINX](
https://wilsonsdevnotes.blogspot.com/2022/10/docker-11-cross-container-part-1-docker.html)

- [CROSS CONTAINER ( PART 2 ) - DOCKER COMPOSE - ADD PHP SCRIPT](https://wilsonsdevnotes.blogspot.com/2022/10/docker-12-cross-container-part-1-docker.html)

- [CROSS CONTAINER ( PART 3 ) - MULTI-STAGE BUILDS - ADD VUE.JS](https://wilsonsdevnotes.blogspot.com/2022/10/docker-13-cross-container-part-3-multi.html)

<br>
You can found others Docker related articles in my Blog below :
https://wilsonsdevnotes.blogspot.com/

<br><br>



# Usage

1. Clone the repo
```
git clone git@github.com:wilws/docker2_cross_container_php-mysql-nginx-vue.git
```
<br>

2. Using "docker-compose up" to build and run containers.
```
docker-compose up
```
<br>

3. Go to "http://localhost:8080", you should see the product items now!

![docker ps](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhPzJhnmW3_bXwd82ReY9nXHXVnPjIYMci3fTcegPsa9bfLsmtG3iCf2bW-0YkIs_mgbyEXmuJKT6tAJUtVN9g4FqZhY3qzvwiqPlb_eNcKJGjGQkeaJVFHzyct2XPnYpxxbkE7S52pDW-DuMx8dtbPN--oaQ4B1XglHJ3rW4Qu4YJ4buJdz_A7RXBb/s16000/Screenshot%202022-12-30%20at%204.01.57%20PM.png)

<br>

4. Check whether all the containers are running by :
```
docker ps
```
You should see in terminal :
![docker ps](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEghWW135ghwbtjhKL_NJn3TrAR4NApU-uCo2qD5nnD20QACELhetqbBtJFIHLawT0JU2O7XXn7SQ_8NvL9kFXkZXz6b_VrZ0BzA5t2nNYo75POXITJJD0grmMa3kw5Kex6RKQIyeIvk0Ob2EcsPria7r2InsVD6ziZdfRDITHu7OoX7MQLjPqyND0-v/s16000/Screenshot%202022-12-30%20at%204.38.33%20PM.png)