# Expense Tracker App - Frontend

A modern, responsive expense tracking application built with React and Vite. Track your expenses, manage transactions, and visualize your spending patterns with an intuitive user interface.

## 📋 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Available Scripts](#available-scripts)
- [Project Structure](#project-structure)
- [Usage](#usage)
- [Environment Setup](#environment-setup)
- [Contributing](#contributing)

## ✨ Features

- **User Authentication**: Secure login and registration system
- **Dashboard**: Overview of spending with summary cards and latest transactions
- **Transaction Management**: Add, view, and manage your expenses
- **Transaction History**: Detailed view of all transactions with filtering capabilities
- **Quick Actions**: Fast access to common operations
- **Responsive Design**: Mobile-friendly interface with bottom navigation
- **Real-time Notifications**: Toast notifications for user feedback
- **Protected Routes**: Secure pages that require authentication
- **Global State Management**: Centralized state using React Context API

## 🛠 Tech Stack

- **Frontend Framework**: [React 19](https://react.dev/) - A JavaScript library for building user interfaces
- **Build Tool**: [Vite 8](https://vitejs.dev/) - Next generation frontend tooling
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- **Routing**: [React Router v7](https://reactrouter.com/) - Client-side routing
- **HTTP Client**: [Axios](https://axios-http.com/) - Promise-based HTTP client
- **UI Notifications**: [React Hot Toast](https://react-hot-toast.com/) - Lightweight notifications
- **Icons**: [React Icons](https://react-icons.github.io/react-icons/) - Popular icon libraries
- **Analytics**: [Vercel Analytics](https://vercel.com/analytics) - User analytics
- **Linting**: ESLint - Code quality tool
- **Post Processing**: PostCSS with Tailwind

## 📦 Prerequisites

- Node.js (v16 or higher)
- npm or yarn package manager

## 🚀 Installation

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd expense-tracker-app/frontend
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Configure environment variables**:
   Create a `.env` file in the root directory with your API endpoint:
   ```env
   VITE_API_URL=http://localhost:5000
   ```

4. **Start the development server**:
   ```bash
   npm run dev
   ```

   The application will be available at `http://localhost:5173`

## 📝 Available Scripts

- **`npm run dev`** - Start the development server with Hot Module Replacement (HMR)
- **`npm run build`** - Build the production-optimized bundle
- **`npm run preview`** - Preview the production build locally
- **`npm run lint`** - Run ESLint to check code quality

## 📂 Project Structure

```
src/
├── api/
│   └── axios.js              # Axios instance and API configuration
├── assets/                   # Static assets
├── components/
│   ├── ProtectedRoute.jsx    # Route protection wrapper
│   ├── dashboard/            # Dashboard-related components
│   │   ├── LatestEntries.jsx
│   │   ├── QuickActions.jsx
│   │   ├── SummaryCards.jsx
│   │   ├── TopHeader.jsx
│   │   └── TransactionItem.jsx
│   ├── layout/               # Layout components
│   │   ├── AppShell.jsx
│   │   ├── AuthLayout.jsx
│   │   ├── BottomNav.jsx
│   │   └── Sidebar.jsx
│   └── ui/                   # Reusable UI components
│       ├── Button.jsx
│       └── Input.jsx
├── Context/
│   └── GlobalState.jsx       # Global state management with Context API
├── pages/                    # Page components
│   ├── AddTransaction.jsx    # Add new transaction page
│   ├── Dashboard.jsx         # Main dashboard page
│   ├── Login.jsx             # Login page
│   ├── Register.jsx          # Registration page
│   └── TransactionHistory.jsx # Transaction history page
├── App.jsx                   # Main App component
├── main.jsx                  # Application entry point
└── index.css                 # Global styles
```

## 🎯 Usage

### Authentication Flow

1. **Register**: Create a new account on the `/register` page
2. **Login**: Log in with your credentials on the `/login` page
3. **Access Protected Routes**: Navigate to dashboard and transaction pages

### Adding Transactions

1. Click the "Add Transaction" button on the dashboard or use quick actions
2. Fill in transaction details (amount, category, date, description)
3. Submit to save the transaction
4. You'll receive a confirmation notification

### Viewing Transactions

- **Dashboard**: See a summary and latest transactions at a glance
- **Transaction History**: Access the complete list of all transactions with filters

## 🔧 Environment Setup

### Development

The development server runs on `http://localhost:5173` with:
- Hot Module Replacement (HMR) for instant updates
- ESLint for code quality checking
- Tailwind CSS for styling

### Production Build

```bash
npm run build
npm run preview
```

The build output is optimized and can be deployed to any static hosting service.

## 🤝 Contributing

1. Create a feature branch: `git checkout -b feature/your-feature-name`
2. Commit your changes: `git commit -m 'Add your feature'`
3. Push to the branch: `git push origin feature/your-feature-name`
4. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📞 Support

For issues, questions, or suggestions, please create an issue in the repository.

---

**Happy Tracking! 💰**
