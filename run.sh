# Spin up the oracle 11g docker container
docker run -d -p 49160:22 -p 1521:1521 -p 49162:8080 alexeiled/docker-oracle-xe-11g

# Run the migrations
cd db
migrate status
migrate up

# Run the demo seed
cd ..
node demo.js