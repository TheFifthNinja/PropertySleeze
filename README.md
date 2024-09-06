<br />
<p align="center">
    <h1 align="center">Full Stack Containerized Web App</h1>
    <h6 align="center">September 2024 - Daniel West & Kevin Albert</h6>
    <p align="center">
        Using virtualization to effect portable building and deployment of software applications
    </p>
</p>

___

## Overview 
[![GitHub license](https://img.shields.io/badge/license-MIT-green)](LICENSE)
![GitHub issues](https://img.shields.io/github/issues/TheFifthNinja/PropertySleeze)
![GitHub pull requests](https://img.shields.io/github/issues-pr/TheFifthNinja/PropertySleeze)

This project leverages virtualization technologies to create and deploy a flexible software tool tailored for job seekers. The application, called the Job Application Tracker, is developed to assist students and job hunters in organizing and managing their job search efforts more effectively.

Deployed across three distinct virtual machines (VMs), the Job Application Tracker highlights the advantages of distributed systems and cloud-compatible development practices. It allows users to keep track of their applications by recording key details such as the roles and companies applied to, the status of each application, submission dates, personal notes, and a detailed timeline of each application's progress.

## Built With

* **Frontend:** [React.js](https://reactjs.org) **&** [Tailwind CSS](https://tailwindcss.com)
* **Backend:** [Kotlin](https://kotlinlang.org) **&** [Ktor](https://ktor.io/)
* **Database:** [PostgreSQL](https://www.postgresql.org) 

## File Tree 
- `frontend` - Contains the React frontend project
- `backend` - Contains the Kotlin Ktor backend project
- `database` - Contains the PostgreSQL database configuration

## Running Locally

1. Clone the repository
    ```bash
    git clone https://github.com/TheFifthNinja/PropertySleeze.git
    ```
2. Change into the project directory
    ```bash
    cd PropertySleeze
    ```
3. Open [Docker Desktop](https://www.docker.com/products/docker-desktop/) and ensure it is running.
4. Build and run the project
    ```bash
    docker-compose up -d
    ```
5. Open your browser and navigate to [http://localhost:5173](http://localhost:5173) to view the frontend application.
6. Open your browser and navigate to [http://localhost:8084](http://localhost:8084) to view the backend application.

### Shutting Down the Project

```bash
    docker-compose down
```

## Project Demo

<div align="center">
   <!-- Add screenshots or link to a demo video -->
</div>

---

## Useful Docker Commands 

- **Building a single Docker image**
    ```bash
    docker build --no-cache --progress=plain --tag "job-tracker-<name>" .
    ```
    - `--no-cache` - Build the image without using cache.
    - `--progress=plain` - Show all output from build progress (verbose).

- **Running a single Docker container**
    ```bash
    docker run -d -p 5000:5000 --name "job-tracker-<name>" job-tracker-<name>
    ```

- **Stopping a single Docker container**
    ```bash
    docker stop job-tracker-<name>
    ```

- **Building and running multiple Docker containers from a `docker-compose` file**
    ```bash
    docker-compose up -d
    ```

- **Stopping multiple Docker containers from a `docker-compose` file**
    ```bash
    docker-compose down
    ```

- **Viewing all running Docker containers**
    ```bash
    docker ps
    ```
