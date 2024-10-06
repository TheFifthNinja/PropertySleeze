<br />
<p align="center">
    <h1 align="center">Full Stack Web App Deployed Through AWS</h1>
    <h6 align="center">October 2024 -  Kevin Albert</h6>
    <p align="center">
        Using virtualization to effect portable building and deployment of software applications
    </p>
</p>

## Overview

[![GitHub license](https://img.shields.io/badge/license-MIT-green)](LICENSE)
![GitHub issues](https://img.shields.io/github/issues/TheFifthNinja/PropertySleeze)
![GitHub pull requests](https://img.shields.io/github/issues-pr/TheFifthNinja/PropertySleeze)
[![CI - Build and Test](https://github.com/TheFifthNinja/PropertySleeze/actions/workflows/frontend.yml/badge.svg)](https://github.com/TheFifthNinja/PropertySleeze/actions/workflows/frontend.yml)

This project leverages virtualization technologies to create, list, and display properties for rent. The application, called **PropertySleeze**, is designed to assist individuals in meeting their housing needs.

Deployed on Amazon Web Services (AWS), the project consists of a frontend built with React.js and a backend built with Kotlin Ktor. The database is managed using PostgreSQL.

## Built With

- **Frontend:** [React.js](https://reactjs.org) & [Tailwind CSS](https://tailwindcss.com)
- **Backend:** [Kotlin](https://kotlinlang.org) & [Ktor](https://ktor.io/)
- **Database:** [PostgreSQL](https://www.postgresql.org)

## How to Access

- Visit the website at: [PropertySleeze](http://www.propertysleeze.shop)
- Access the API at: [API](http://api.propertysleeze.shop:8084)
- Explore the available endpoints at: [API Endpoints](https://github.com/TheFifthNinja/PropertySleeze/blob/AWS-Deployment/backend/src/main/kotlin/com/unitedApi/routing/Routing.kt)



## File Structure

```plaintext
.
├── frontend         # Contains the React frontend project
├── backend          # Contains the Kotlin Ktor backend project
└── database         # Contains the PostgreSQL database configuration
```

## Amazon Web Services (AWS) Deployment
- **Frontend:** Deployed on an S3 bucket and served through CloudFront
- **Backend:** Deployed on an EC2 instance running Kotlin Ktor through a Docker container
- **Database:** Deployed on an EC2 instance running PostgreSQL
- **Other Services:** 
    - **Route 53:** Used for custom domain registration and DNS routing
    - **Certificate Manager:** Used for SSL certificate generation


## Project Demo (Click Image to Watch)

<div align="center">
    <a href="https://www.youtube.com/watch?v=bqpv_W5KPL8" target="_blank">
        <img src="./frontend/public/Large Logo.png" alt="Project Demo Video" />
    </a>
</div>


