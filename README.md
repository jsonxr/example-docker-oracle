example-oracle-docker
======

This demonstrates running oracle in a docker container and then using mybatis migrations to handle migrating the oracle schema in a repeatable, predictable way.

# dependencies

* node - This is for the demo.js that demonstrates inserting demo data into the docker oracle container.
* Download the latest Oracle Instant Client Basic and SDK. This is needed to run npm install since node-oracle needs to compile against it. http://www.oracle.com/technetwork/database/features/instant-client/index-097480.html
* Download and install mybatis migrations http://mybatis.github.io/migrations/

# Spin up the oracle 11g docker container

    docker run -d -p 49160:22 -p 1521:1521 -p 49162:8080 alexeiled/docker-oracle-xe-11g

# Run the migrations

    cd db
    migrate status
    migrate up
    cd ..

# Run the demo seed

    node demo.js