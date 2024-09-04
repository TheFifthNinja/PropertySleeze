FROM openjdk:17-jdk-slim
EXPOSE 8084:8084
RUN mkdir /app
RUN mkdir /app/pictures
COPY ./build/libs/fat.jar /app/ktor-docker-sample.jar
ENTRYPOINT ["java","-jar","/app/ktor-docker-sample.jar"]