import React, { createContext, useReducer, useEffect } from "react";
import API from "../api/axios";
import toast from "react-hot-toast";

const initialState = {
  user: JSON.parse(localStorage.getItem("user")) || null,
  token: localStorage.getItem("token") || null,

  transactions: [],
  summary: {
    income: 0,
    expense: 0,
    balance: 0,
  },

  loading: true,
  error: null,
};

const AppReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
        error: null,
      };

    case "LOGOUT":
      return {
        ...state,
        user: null,
        token: null,
        transactions: [],
        summary: {
          income: 0,
          expense: 0,
          balance: 0,
        },
        loading: false,
        error: null,
      };

    case "GET_TRANSACTIONS":
      return {
        ...state,
        transactions: action.payload,
        loading: false,
      };

    case "GET_SUMMARY":
      return {
        ...state,
        summary: action.payload,
      };

    case "ADD_TRANSACTION":
      return {
        ...state,
        transactions: [action.payload, ...state.transactions],
      };

    case "DELETE_TRANSACTION":
      return {
        ...state,
        transactions: state.transactions.filter(
          (t) => t._id !== action.payload
        ),
      };

    case "TRANSACTION_ERROR":
      return {
        ...state,
        error: action.payload,
        loading: false,
      };

    default:
      return state;
  }
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Register
  const register = async (userData) => {
    try {
      const res = await API.post("/auth/register", userData);
      toast.success("Account created successfully!");
      return {
        success: true,
        data: res.data,
      };
    } catch (err) {
      return {
        success: false,
        message:
          err.response?.data?.message || "Registration failed",
      };
    }
  };

  // Login
  const login = async (credentials) => {
    try {
      const res = await API.post("/auth/login", credentials);

      localStorage.setItem("token", res.data.token);

      localStorage.setItem(
        "user",
        JSON.stringify(res.data.user)
      );

      dispatch({
        type: "LOGIN_SUCCESS",
        payload: res.data,
      });

      await Promise.all([
        getTransactions(),
        getSummary(),
      ]);
      toast.success("Login successful!");
      return {
        success: true,
      };
    } catch (err) {
      toast.error("Login Failed");
      return {
        success: false,
        message:
          err.response?.data?.message || "Login failed",
      };
    }
  };

// Logout
  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    dispatch({
      type: "LOGOUT",
    });
  };


  // Transactions
  const getTransactions = async () => {
    try {
      const res = await API.get("/transactions");

    
      dispatch({
        type: "GET_TRANSACTIONS",
        payload: res.data.data,
      });
    } catch (err) {
      dispatch({
        type: "TRANSACTION_ERROR",
        payload:
          err.response?.data?.message || "Server Error",
      });
    }
  };

// Summary
  const getSummary = async () => {
    try {
      const res = await API.get("/transactions/summary");

      dispatch({
        type: "GET_SUMMARY",
        payload: res.data.data,
      });
    } catch (err) {
      dispatch({
        type: "TRANSACTION_ERROR",
        payload:
          err.response?.data?.message || "Server Error",
      });
    }
  };

  // Add Transaction
  const addTransaction = async (transaction) => {
    try {
      const res = await API.post(
        "/transactions",
        transaction
      );

      toast.success("Transaction added");
      dispatch({
        type: "ADD_TRANSACTION",
        payload: res.data.data,
      });

      getSummary();
    } catch (err) {
      toast.error("Failed to add transaction");
      dispatch({
        type: "TRANSACTION_ERROR",
        payload:
          err.response?.data?.message || "Server Error",
      });
    }
  };

// Delete Transaction
  const deleteTransaction = async (id) => {
    try {
      await API.delete(`/transactions/${id}`);
      toast.success("Transaction deleted");
      dispatch({
        type: "DELETE_TRANSACTION",
        payload: id,
      });

      getSummary();
    } catch (err) {
      dispatch({
        type: "TRANSACTION_ERROR",
        payload:
          err.response?.data?.message || "Server Error",
      });
    }
  };

  useEffect(() => {
    if (state.token) {
      Promise.all([
        getTransactions(),
        getSummary(),
      ]);
    }
  }, [state.token]);

  return (
    <GlobalContext.Provider
      value={{
        user: state.user,
        token: state.token,

        register,
        login,
        logout,

        transactions: state.transactions,
        summary: state.summary,
        loading: state.loading,
        error: state.error,

        getTransactions,
        getSummary,
        addTransaction,
        deleteTransaction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};