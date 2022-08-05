<a name="readme-top"></a>

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/vnldev/vnldev">
    <img src="images/logo.svg" alt="Logo" width="80" height="80">
  </a>

<h3 align="center">Simple Express REST API</h3>

  <p align="center">
    A simple CRUD using Express with protected routes and storing data in NoSQL database (MongoDB).
    <br />
    <br />
    <a href="https://github.com/vnldev/express-rest-api">View Demo</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About the Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#to-do">To-do</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

[![REST API][screenshot]](images/rest-api.png)

A simple CRUD built using Express with user authentication, role-based authorization middleware and protected routes for `admins` only. A user can create an account and authenticate yourself, generating a JSON Web Token for further requests on protected routes.

All users routes used for CRUD operations are role-protected, requiring an admin role from user. Users can see products, however only admin users can create/update/remove products.

The API uses a NoSQL database, MongoDB to store all users and products data. You can easily start a local MongoDB instance using a docker container. This project includes a Docker Compose file to help setting up the entire project, so you can focus on application usage!

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

- [![Node.js][node.js]][nodejs-url]
- [![Express][express]][express-url]
- [![TypeScript][typescript]][typescript-url]
- [![MongoDB][mongodb]][mongodb-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

First of all you need at least Docker installed on your machine, with just Docker, all the environment can be set up which can save you some time. However you can also execute the project with your local environment, without a container. For this, you must have Node.js installed and a Node Package Manager as NPM or Yarn. You also need MongoDB installed and running.

### Prerequisites

- Docker

  **or**

- Node.js
- NPM / Yarn
- MongoDB

### Installation

#### Using Local Setup

1. Clone the repo

   ```sh
   git clone https://github.com/vnldev/express-rest-api.git
   ```

2. Install NPM packages
   ```sh
   npm install
   ```
3. Edit `.env` file for your needs
   ```env
   ...
   SERVER_PORT=3000
   ...
   ```

#### Using Docker

1. Download Docker and install if not installed yet. You can download Docker [here](https://www.docker.com/products/docker-desktop/)

2. Clone the repo

```sh
git clone https://github.com/vnldev/express-rest-api.git
```

3. Use Docker Compose to build containers and start application

```sh
docker-compose up --build
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->

## Usage

Build project:

```sh
npm run build
```

Start server (production):

```sh
npm start
```

Start server (development):

```sh
npm run dev
```

Seed for admin user:

```sh
npm run seed:admin
```

Seed for users:

```sh
npm run seed:users
```

Seed for products:

```sh
npm run seed:products
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->

## Contact

Victor Lima - [contato@vnl.dev](mailto:contato@vnl.dev)

Project Link - [https://github.com/vnldev/express-rest-api](https://github.com/vnldev/express-rest-api)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- To-Do -->

## To-do

- [ ] Tests with Jest and Superagent
- [ ] Validation for JSON request fields with express-validator
- [ ] API docs using Swagger (swagger-ui-express)
- [ ] Token storage and revogation using Redis
- [ ] Store user's avatar on S3 Bucket
- [ ] Email verification for users using NodeMailer
- [ ] Rate limit middleware
- [ ] Deploy API

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[screenshot]: images/rest-api.png
[node.js]: https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white
[nodejs-url]: https://nodejs.org/en/
[typescript]: https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white
[typescript-url]: https://www.typescriptlang.org
[mongodb]: https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white
[mongodb-url]: https://www.mongodb.com/
[express]: https://img.shields.io/badge/Express-404D59?style=for-the-badge&logo=express
[express-url]: http://expressjs.com/
