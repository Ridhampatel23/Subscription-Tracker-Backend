

# 📦 Subscription Tracker API – Node.js Backend

**Track, manage, and get reminders for your subscriptions with ease.**  
This backend powers **SubDub** — a subscription tracker that sends timely renewal reminders and helps users avoid unnecessary charges.

---

## 🚀 Features

- ✅ User registration & login (JWT-based)
- 🔐 Protected API routes with middleware
- 📧 Automated email reminders (7, 5, 2, 1 days before renewal)
- 📊 Subscription CRUD APIs
- 🌐 Swagger-based interactive API docs
- 🧠 Upstash Workflows integration for scheduled background jobs
- 🛡️ Arcjet middleware for bot/rate-limit protection
- 📩 Styled email templates using Nodemailer
- 🧪 ESLint-configured codebase for clean dev experience

---

## 🏗️ Tech Stack

| Layer         | Technology         |
|---------------|--------------------|
| Runtime       | Node.js            |
| Framework     | Express.js         |
| Database      | MongoDB + Mongoose |
| Auth          | JWT                |
| Scheduler     | Upstash Workflows  |
| Email         | Nodemailer         |
| Security      | Arcjet             |
| Docs          | Swagger UI         |
| Dev Tools     | Nodemon, ESLint    |

---

## 📁 Directory Structure

```
ridhampatel23-subscription-tracker-backend/
├── app.js
├── package.json
├── eslint.config.js
├── controllers/
│   ├── auth.controller.js
│   ├── subscription.controller.js
│   ├── user.controller.js
│   └── workflow.controller.js
├── database/
│   └── mongodb.js
├── docs/
│   └── Swagger.js
├── middlewares/
│   ├── arcjet.middleware.js
│   ├── auth.middleware.js
│   └── error.middleware.js
├── models/
│   ├── subscription.model.js
│   └── user.model.js
├── routes/
│   ├── auth.routes.js
│   ├── subscription.routes.js
│   ├── user.routes.js
│   └── workflow.routes.js
└── utils/
    ├── email-template.js
    └── send-email.js

```
---

## 🔐 Authentication

All protected routes require a **JWT token** passed in the `Authorization` header like this:

```
Authorization: Bearer <your_token>
```

You can obtain this token from `/api/v1/auth/sign-in` after registering via `/api/v1/auth/sign-up`.

---

## 📧 Reminder System

This backend automatically sends email reminders at:

* 7 days
* 5 days
* 2 days
* 1 day before subscription renewal

Powered by:

* **Upstash Workflows** for serverless scheduling
* **Nodemailer** for sending HTML-based emails

---

## 📚 API Documentation

Swagger UI is available at (after installing dependencies and running the server):
👉 **[http://localhost:5000/api-docs](http://localhost:5000/api-docs)**

You can try out and test endpoints directly from the browser.

---

## 🧑‍💻 Getting Started

### 1. Clone the Repo

```bash
git clone https://github.com/ridhampatel23/subscription-tracker-backend.git
cd subscription-tracker-backend
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Setup Environment Variables

Create a `.env.development.local` (or `.env`) file:

```env
PORT=5000
DB_URI=mongodb://localhost:27017/subtracker
JWT_SECRET=your_jwt_secret
JWT_EXPIRES_IN=7d
SERVER_URL=http://localhost:5000
```

### 4. Run the Server

```bash
# For development
npm run dev

# For production
npm start
```

---

## 🧪 Key API Routes

| Method | Endpoint                                 | Description                |
| ------ | ---------------------------------------- | -------------------------- |
| POST   | /api/v1/auth/sign-up                     | Register a new user        |
| POST   | /api/v1/auth/sign-in                     | Login and receive JWT      |
| POST   | /api/v1/subscriptions/                   | Create a new subscription  |
| GET    | /api/v1/subscriptions/user/\:id          | Get subscriptions for user |
| POST   | /api/v1/workflows/subscriptions/reminder | Trigger reminders          |

---

## 🧾 Linting

Run ESLint to check code style:

```bash
npx eslint .
```

## ✨ Author

Built with ❤️ by [Ridham Patel](https://github.com/ridhampatel23)

---
