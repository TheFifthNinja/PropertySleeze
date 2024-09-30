FROM openjdk:17-jdk-slim
EXPOSE 8084:8084
RUN mkdir /app
COPY ./pictures /app/pictures
COPY ./build/libs/fat.jar /app/ktor-docker-sample.jar
ENV DB_URL=jdbc:postgresql://54.81.125.147:5432/propertysleeze
ENV DB_USER=psleeze
ENV DB_PASSWORD=ps
ENTRYPOINT ["java","-jar","/app/ktor-docker-sample.jar"]