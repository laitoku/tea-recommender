# Tea Recommender

## Description
This website asks a series of questions to determine what kind of tea a person might like.

## PostgreSQL Tutorial with Docker

This is a small example of how to start a postgres docker container and send commands to it.
```shell
# Start postgres container with sample tea database
docker-compose up -d

# Stop and remove postgres container and volume
docker-compose down -v

# Start a interactive container using psql to connect to mydb
docker run -it --rm --network tea-recommender_default postgres:15.4 psql -h mydb -U postgres
```