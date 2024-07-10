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

> <b>Note</b> : make sure to run bash on <b>backend</b> folder.

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

Run development server
```bash
npm run dev
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

<h1 align="center">
    <br>
  Frontend
  <br>
</h1>

## 🚀 Quick Start
### Developement Environment
Copy `.env.example`, rename it to `.env`, Modify to suit your environment, focus on these key, you can leave others as it is. The key name is explanatory itself.
```bash
# PORT
API_URL=http://localhost:3050 #BACKEND BASE API
```
> <b>Note</b> : make sure to run bash on <b>frontend</b> folder.

Install package
```bash
npm install
```

Run development server
```bash
npm run dev
```

## 🛎 Available Commands for the Server

- Run the Server in development mode : `npm run dev` in VS Code

## 💎 The Package Features

<p>
  <img src="https://img.shields.io/badge/-TypeScript-007ACC?style=for-the-badge&logo=TypeScript&logoColor=fff" />&nbsp;&nbsp;
  <img src="https://img.shields.io/badge/-NPM-CB3837?style=for-the-badge&logo=NPM&logoColor=fff" />&nbsp;&nbsp;
</p>
<p>
 
</p>
<p>
  <img src="https://img.shields.io/badge/Nuxt-002E3B?style=for-the-badge&logo=nuxtdotjs&logoColor=#00DC82" />&nbsp;&nbsp;
      <img src="https://img.shields.io/badge/vuejs-%2335495e.svg?style=for-the-badge&logo=vuedotjs&logoColor=%234FC08D" />&nbsp;&nbsp;
          <img src="https://img.shields.io/badge/pinia-%2302262B.svg?style=for-the-badge&logo=Pinia&logoColor=white" />&nbsp;&nbsp;
              <img src="https://img.shields.io/badge/Vuetify-1867C0?style=for-the-badge&logo=vuetify&logoColor=AEDDFF" />&nbsp;&nbsp;
    <img src="https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white" />&nbsp;&nbsp;
  
</p>


<h1 align="center">
    <br>
  Features
  <br>
</h1>
Highlighting some of the main features I implemented based on core requirements. Additionally, I added some extra features for your consideration:

- <b>Vendor Modules</b>: Fully functional CRUD operations with backend validation and global search capabilities.
- <b>Searchable Units</b>: Implemented custom autocomplete dynamic components for unit search.
- <b>Global State Management</b>: Used persisted Pinia state management to dynamically update the vendor list.
- <b>Backend Structure</b>: Followed an MVC-based structure with a service design pattern.
- <b>Database Management</b>: Using Sequelize for database migration and seeding.
- <b>Type Hinting</b>: Most of the code is type-hinted for better readability and maintenance.
- <b>Authentication System</b>: Developed a complete authentication system including login, signup, and logout functionalities.
- <b>Backend Validation & Error Handling</b>: Added validation and error handling using middleware.

Feel free to ask if you have any questions or need more details!

