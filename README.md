# 💰 Finance Dashboard Backend

## 📖 Overview ##

This project is a backend system for a finance dashboard that manages users, financial records, and analytics.

It demonstrates backend development concepts such as authentication, role-based access control (RBAC), data modeling, and aggregation-based analytics.

---

## 🚀 Features ##

* 🔐 User Authentication (JWT-based)
* 👥 Role-Based Access Control (Viewer, Analyst, Admin)
* 💰 Financial Records Management (CRUD)
* 🔎 Filtering (by type and category)
* 📊 Dashboard Analytics

  * Total Income
  * Total Expenses
  * Net Balance
  * Category-wise Breakdown
* ⚠️ Error Handling & Input Validation

---

## 🛠️ Tech Stack

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT (jsonwebtoken)

---

## 📁 Project Structure

```
src/
 ├── controllers/
 ├── models/
 ├── routes/
 ├── middleware/
 ├── services/
 ├── utils/
 └── app.js
server.js
```

---

## 🔐 Authentication & Roles

### Roles Supported:

* **Viewer** → Can view dashboard data only
* **Analyst** → Can view records and analytics
* **Admin** → Full access (create, update, delete, manage users)

---

## 📡 API Endpoints

### 🔑 Auth APIs

* `POST /api/auth/register` → Register new user
* `POST /api/auth/login` → Login and get JWT token

---

### 💰 Record APIs

* `POST /api/records` → Create record (Admin only)
* `GET /api/records` → Get records (Admin, Analyst)
* `PUT /api/records/:id` → Update record (Admin only)
* `DELETE /api/records/:id` → Delete record (Admin only)

---

### 📊 Dashboard APIs

* `GET /api/dashboard/summary` → Get financial summary
* `GET /api/dashboard/categories` → Category-wise totals

---

## 🔒 Authorization

All protected routes require:

```
Authorization: Bearer <JWT_TOKEN>
```

---

## 📊 Example Dashboard Response ##

### Summary

```
{
  "totalIncome": 7000,
  "totalExpense": 2000,
  "netBalance": 5000,
  "totalTransactions": 2
}
```

### Category Breakdown

```
[
  { "_id": "salary", "total": 7000 },
  { "_id": "food", "total": 2000 }
]
```

## 🧠 Design Decisions

* Used **JWT** for stateless authentication
* Implemented **RBAC using middleware** for clean separation of concerns
* Used **MongoDB aggregation pipeline** for dashboard analytics
* Structured project using **MVC pattern** for scalability

---

## ⚠️ Assumptions

* Each financial record belongs to a single user
* Admin users manage financial data
* Simplified authentication (no refresh tokens)

---

## 💡 Future Improvements

* Pagination for records
* Search functionality
* Rate limiting
* Swagger API documentation
* Deployment (Render / Railway)

---

## 👨‍💻 Author

**Anirudh Akoskar**

---

## ⭐ Conclusion

This project demonstrates a complete backend system with secure authentication, structured APIs, and real-world financial data processing.

---
