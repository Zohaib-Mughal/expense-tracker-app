# 💰 Expense Tracker MERN App

A full-stack Expense Tracker application built using the **MERN stack (MongoDB, Express, React, Node.js)**.  
It allows users to securely track income and expenses with authentication and real-time financial summaries.

---

## 🚀 Live Demo
    https://expense-tracker-app-pink-gamma.vercel.app/



---

## 📌 Features

- 🔐 User Authentication (JWT-based login & register)
- 📊 Dashboard with Income, Expense & Balance summary
- ➕ Add new transactions (Income / Expense)
- 🗑️ Delete transactions
- 📈 Real-time financial updates
- 💾 Persistent data using MongoDB
- 🔄 Global state management (Context API + useReducer)
- ⚡ Axios interceptors for secure API requests

---

## 🛠️ Tech Stack

### Frontend
- React.js
- Context API + useReducer
- Axios
- CSS / Tailwind (if used)

### Backend
- Node.js
- Express.js
- MongoDB + Mongoose
- JWT Authentication
- REST API

---

## 📁 Project Structure
Expense Tracker/
│
├── frontend/ # React frontend
│ ├── src/
│ └── package.json
│
├── backend/ # Node + Express backend
│ ├── routes/
│ ├── controllers/
│ ├── models/
│ └── server.js
│
├── README.md



---

## ⚙️ Installation & Setup

### 1. Clone the repository

```bash
git clone https://github.com/YOUR_USERNAME/expense-tracker.git
cd expense-tracker


### 2. Setup Backend

cd backend
npm install

--create .env file

PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key


Run backend
npm start


### 3 Frontend setup
cd frontend
npm install
npm run dev




Environment Variables
| Variable   | Description                   |
| ---------- | ----------------------------- |
| MONGO_URI  | MongoDB connection string     |
| JWT_SECRET | Secret key for authentication |
| PORT       | Backend server port           |




🧠 Key Learnings
JWT Authentication flow (login/register)
Context API state management
Axios interceptor for token handling
REST API integration with React
CRUD operations with MongoDB




🚀 Future Improvements
📱 Mobile responsive UI improvements
📊 Advanced analytics dashboard
📅 Monthly expense filtering
☁️ Deploy backend (Render / Railway)
🌐 Deploy frontend (Vercel / Netlify)




👨‍💻 Author

Zohaib Munir

GitHub: https://github.com/Zohaib-Mughal
LinkedIn: https://www.linkedin.com/in/zohaib-munirr/


⭐ Show Your Support

If you like this project, please consider giving it a ⭐ on GitHub!
