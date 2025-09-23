# CRM Backend (Node.js + Express + Prisma)

This is a multi-tenant CRM backend built with Node.js, Express, Prisma, and PostgreSQL/SQLite.  
It supports Enquiries → Leads → Deals conversion with proper validation, pagination, and secure tenant isolation.

---

## Features

- Authentication & Tenant Isolation
- Enquiry Management
  - Create, list, update, delete enquiries
  - Convert enquiries into leads
- Lead Management
  - Create, list, update, delete leads
  - Convert leads into deals
- Deal Management
  - Create, list, update, delete deals
- Pagination & Filtering with `paginate` utility
- Validation Middleware using `yup`
- Role-based Access Control (RBAC) ready
- CORS support for frontend integration

## Project Structure

```
├──src/
│    ├── controllers/     # API Controllers
│    ├── middlewares/     # Error handler, validation, auth
│    ├── repositories/    # DB layer (Prisma queries)
│    ├── routes/          # Express route definitions
│    ├── services/        # Business logic
│    ├── utils/           # Helpers (paginate, apiResponse)
│    ├── constants/       # Messages, enums
├──prisma/          # Prisma schema & migrations
```

# Installation Guide - CRM Backend

This guide explains how to set up the CRM backend locally.

## Prerequisites

- Node.js (>= 18.x)
- npm (>= 9.x)
- PostgreSQL or SQLite
- Git

## Steps

### 1. Clone the Repository

```bash
git clone https://github.com/Dante-eraa/feodus-crm-api-service.git
cd crm-backend
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Environment Variables

Create a .env file in the root directory and set the following:

```bash
DATABASE_URL="postgresql://user:password@localhost:5432/crm"
FRONTEND_URL="http://localhost:4000"
PORT=5000
JWT_SECRET="your-secret-key"
```

### 4. Prisma Setup

Generate Prisma Client

```bash
npx prisma generate
```

Run Migrations

```bash
npx prisma migrate dev
```

This will create the database tables based on the Prisma schema.

## License

This project is licensed under the [MIT License](https://choosealicense.com/licenses/mit/).

## Tech Stack

- Backend Framework: Express.js
- ORM: Prisma
- Database: PostgreSQL / SQLite (dev)
- Authentication: JWT (tenant-based security)
- Logger: Morgan
- Validation: Joi
- API Response: Standardized success/error wrapper

## About Me

- 🌱 I’m currently learning **MERN Stack** and exploring advanced **full-stack development** concepts.
- 👨‍💻 All of my projects are available at [https://hacktechno.ccbp.tech/](https://hacktechno.ccbp.tech/)
- 📫 How to reach me: **hariharansundarrajan123@gmail.com**
- 💡 I enjoy building **scalable web applications**, **AI-powered solutions**, and **blockchain-based projects**.
- 🔭 Currently working on **CRM, decentralized file storage, and hybrid stock prediction systems**.
- ⚡ Fun fact: I love **cricket, gaming, and exploring emerging tech** in my free time.
- 🌐 Connect with me on [LinkedIn](https://www.linkedin.com/in/hacktechno) for professional updates.

## 🔗 Links

[![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://hacktechno.ccbp.tech/)
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/hacktechno)

## Authors

- [@Dante-eraa](https://github.com/Dante-eraa)
