# Tea Recommender

## Description
This website asks a series of questions to determine what kind of tea a person might like.

## PostgreSQL Tutorial with Docker

This is a small example of how to start a postgres docker container and send commands to it.
```shell
# create a shared docker network named testnet
docker network create testnet

# start a detached postgres container named mydb with default password of 123456
docker run --rm --name mydb --network testnet -p 5432:5432 -e POSTGRES_PASSWORD=pass -d postgres:15.4

# start a interactive container using psql to connect to mydb
docker run -it --rm --network testnet postgres:15.4 psql -h mydb -U postgres

# start a detached postgres container named mydb with default password of 123456 and copy tea database initialization file into container
docker run --rm --name mydb --network testnet -p 5432:5432 -e POSTGRES_PASSWORD=pass -d postgres:15.4 && \
docker cp create.sql mydb:/tmp/create.sql

# run the tea database initilization file
docker exec -it mydb psql -U postgres -f /tmp/create.sql
```