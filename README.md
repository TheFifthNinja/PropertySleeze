<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Job Application Tracker README</title>
    <style>
        :root {
            --primary-color: #3498db;
            --secondary-color: #2ecc71;
            --text-color: #333;
            --background-color: #f8f9fa;
            --code-background: #f0f0f0;
        }
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
            font-size: 16px;
            line-height: 1.6;
            color: var(--text-color);
            background-color: var(--background-color);
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
        }
        h1, h2, h3 {
            color: var(--primary-color);
            border-bottom: 2px solid var(--primary-color);
            padding-bottom: 0.3em;
            margin-top: 1.5em;
        }
        h1 {
            font-size: 2.5em;
            text-align: center;
            border-bottom: none;
        }
        h2 {
            font-size: 1.8em;
        }
        h3 {
            font-size: 1.3em;
            border-bottom: 1px solid var(--primary-color);
        }
        p, ul, ol {
            margin-bottom: 1em;
        }
        a {
            color: var(--primary-color);
            text-decoration: none;
            transition: color 0.3s ease;
        }
        a:hover {
            color: var(--secondary-color);
            text-decoration: underline;
        }
        code {
            background-color: var(--code-background);
            border-radius: 3px;
            font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
            font-size: 85%;
            padding: 0.2em 0.4em;
        }
        pre {
            background-color: var(--code-background);
            border-radius: 5px;
            padding: 1em;
            overflow-x: auto;
        }
        pre code {
            background-color: transparent;
            padding: 0;
        }
        ul, ol {
            padding-left: 2em;
        }
        li {
            margin-bottom: 0.5em;
        }
        .container {
            background-color: white;
            border-radius: 8px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            padding: 2em;
            margin-top: 2em;
        }
        .highlight {
            background-color: #fff3cd;
            border-left: 4px solid #ffc107;
            padding: 1em;
            margin-bottom: 1em;
        }
        .btn {
            display: inline-block;
            background-color: var(--primary-color);
            color: white;
            padding: 0.5em 1em;
            border-radius: 5px;
            text-decoration: none;
            transition: background-color 0.3s ease;
        }
        .btn:hover {
            background-color: var(--secondary-color);
            color: white;
            text-decoration: none;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Full Stack Containerized Web App</h1>

        <div class="highlight">
            <h2>Overview</h2>
            <p>This project demonstrates the use of virtualization technologies to build and deploy a portable software application for job seekers. Our application, a Job Application Tracker, is designed to help students and job seekers efficiently manage their job search process. It operates across three different virtual machines (VMs), showcasing the power of distributed systems and cloud-ready software development practices.</p>
            <p>The Job Application Tracker allows users to record and monitor the companies and roles they've applied to, including key information such as application status, submission dates, additional notes, and a chronological history of each application's progress.</p>
        </div>

        <h2>Built With</h2>
        <ul>
            <li><strong>Frontend</strong>: React.js</li>
            <li><strong>Backend</strong>: Kotlin, Ktor</li>
            <li><strong>Database</strong>: PostgreSQL</li>
        </ul>

        <h2>File Tree</h2>
        <ul>
            <li><strong>frontend</strong>: Contains the React.js frontend code</li>
            <li><strong>backend</strong>: Contains the Kotlin backend code</li>
            <li><strong>database</strong>: Contains the PostgreSQL database schema and default data</li>
        </ul>

        <h2>Running Locally With Docker</h2>
        <ol>
            <li>Clone the repository</li>
            <li>Run <code>docker-compose up</code> in the root directory</li>
            <li>Access the frontend at <code>localhost:5173</code> and the backend at <code>localhost:8084</code></li>
        </ol>

        <h2>Shutting Down the Project</h2>
        <ol>
            <li>Run <code>docker-compose down</code> in the root directory</li>
        </ol>

        <h2>Project Demonstration</h2>
        <p>Link to the project demonstration: <a href="#" class="btn">Click Here</a></p>

        <h2>Useful Docker Commands</h2>
        <h3>Building a single docker image</h3>
        <pre><code>docker build --no-cache --progress=plain --tag "job-tracker-&lt;name&gt;" .</code></pre>
        <ul>
            <li><code>--no-cache</code> - Build the image without using cache</li>
            <li><code>--progress=plain</code> - Show all output from build progress (verbose)</li>
        </ul>

        <h3>Running a single docker container</h3>
        <pre><code>docker run -d -p 5000:5000 --name "job-tracker-&lt;name&gt;" job-tracker-&lt;name&gt;</code></pre>

        <h3>Stopping a single docker container</h3>
        <pre><code>docker stop job-tracker-&lt;name&gt;</code></pre>

        <h3>Building and running multiple docker containers from a docker-compose file</h3>
        <pre><code>docker compose up -d</code></pre>

        <h3>Stopping multiple docker containers from a docker-compose file</h3>
        <pre><code>docker compose down</code></pre>

        <h3>Viewing all running docker containers</h3>
        <pre><code>docker ps</code></pre>
    </div>
</body>
</html>