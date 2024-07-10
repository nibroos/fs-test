
<h1 align="center">
    <br>
  Backend
  <br>
</h1>

## 🚀 Quick Start
### Developement Environment
Copy `.env.development.local.example`, rename it to `.env.development.local`, Modify to suit your environment, focus on these key, you can leave others as it is. The key name is explanatory itself.
```bash
# PORT
PORT=3000

# DATABASE
DB_USER=postgres
DB_PASSWORD=root
DB_HOST=localhost
DB_PORT=5432
DB_DATABASE=fstest-nibros
DB_DIALECT=postgres
```

Install package
```bash
npm install
```

Run migrations
```bash
npx sequelize-cli db:migrate
```

Run seeders
```bash
npx sequelize-cli db:seed:all
```
### Test Environment
Copy `.env.test.local.example`, rename it to `.env.test.local`, Modify to suit your environment, focus on these key, you can leave others as it is. The key name is explanatory itself.
```bash
# PORT
PORT=3000

# DATABASE
DB_USER=postgres
DB_PASSWORD=root
DB_HOST=localhost
DB_PORT=5432
DB_DATABASE=fstest-nibros
DB_DIALECT=postgres
```

Run migrations (skip if already run)
```bash
npx sequelize-cli db:migrate
```

Run seeders (skip if already run)
```bash
npx sequelize-cli db:seed:all
```
Run test
```bash
npm test
```

## 🛎 Available Commands for the Server

- Run the Server in production mode : `npm run start` in VS Code
- Run the Server in development mode : `npm run dev` in VS Code
- Run all unit-tests : `npm test` in VS Code
- Check for linting errors : `npm run lint` in VS Code
- Fix for linting : `npm run lint:fix` in VS Code

## 💎 The Package Features

<p>
  <img src="https://img.shields.io/badge/-TypeScript-007ACC?style=for-the-badge&logo=TypeScript&logoColor=fff" />&nbsp;&nbsp;
  <img src="https://img.shields.io/badge/-Node.js-339933?style=for-the-badge&logo=Node.js&logoColor=fff" />&nbsp;&nbsp;
  <img src="https://img.shields.io/badge/-NPM-CB3837?style=for-the-badge&logo=NPM&logoColor=fff" />&nbsp;&nbsp;
</p>
<p>
  <img src="https://img.shields.io/badge/-Docker-2496ED?style=for-the-badge&logo=Docker&logoColor=fff" />&nbsp;&nbsp;
  <img src="https://img.shields.io/badge/-NGINX-269539?style=for-the-badge&logo=NGINX&logoColor=fff" />
  <img src="https://img.shields.io/badge/-PM2-2B037A?style=for-the-badge&logo=PM2&logoColor=fff" />&nbsp;&nbsp;
  <img src="https://img.shields.io/badge/-Nodemon-76D04B?style=for-the-badge&logo=Nodemon&logoColor=fff" />&nbsp;&nbsp;
  <img src="https://img.shields.io/badge/-ESLint-4B32C3?style=for-the-badge&logo=ESLint&logoColor=fff" />&nbsp;&nbsp;
  <img src="https://img.shields.io/badge/-Jest-C21325?style=for-the-badge&logo=Jest&logoColor=fff" />&nbsp;&nbsp;
  <img src="https://img.shields.io/badge/-SWC-FFFFFF?style=for-the-badge&logo=swc&logoColor=FBE1A6" />
</p>
<p>
  <img src="https://img.shields.io/badge/sequelize-323330?style=for-the-badge&logo=sequelize&logoColor=blue" />&nbsp;&nbsp;
<img src="https://img.shields.io/badge/-PostgreSQL-336791?style=for-the-badge&logo=PostgreSQL&logoColor=fff" />&nbsp;&nbsp;
</p>

### 🐳 Docker :: Container Platform

[Docker](https://docs.docker.com/get-docker/) Install.

- Starts the containers in the background and leaves them running : `docker-compose up -d`
- Stops containers and removes containers, networks, volumes, and images : `docker-compose down`

Modify `docker-compose.yml` and `Dockerfile` file to your source code.

### 📗 API Document
All endpoints stored in  `fstest-nibros.postman_collection.json`
