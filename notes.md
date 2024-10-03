## Connecting from backend ec2 to db ec2
psql -U psleeze -h 3.224.104.14 -d propertysleeze -W

## run backend
docker build -t backend .
docker run -d -p 8084:8084 --name backend backend
http://52.44.56.95:8084/

## docker full clean
docker system prune -a

## build update
./gradlew buildFatJar

## Check image
docker exec -it <container_id> /bin/bash