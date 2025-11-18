/* Benifits (GPT)
 ✔ Remove hard-coded URLs from components
 ✔ Make your code clean, scalable, and professional
 ✔ Centralize API handling
 ✔ Add automatic headers (auth-token)
 ✔ Prepare your app for future mobile/desktop use
 ✔ Make switching environments extremely easy

 This file will gives you.
 ✔ One place to change API URL
 ✔ Automatic JSON parsing
 ✔ Automatic token injection
 ✔ Clean modern API abstraction
 ✔ Centralized error handling ready for expansion */

/* Implementation 
const getAllNotes = async () => {
  try {
    const data = await api.get("/api/notes/fetchallnotes");
    setNotes(data);
  } catch (error) {
    console.error("Error fetching notes:", error);
  }
};
 */

const API_BASE_URL = process.env.REACT_APP_API_URL;

// automatic auth header (optional)
export const getHeaders = () => {
  const token = localStorage.getItem("token");

  return {
    "Content-Type": "application/json",
    "auth-token": token ? token : "",
  };
};

export const api = {
  get: async (endpoint) => {
    const res = await fetch(`${API_BASE_URL}${endpoint}`, {
      method: "GET",
      headers: getHeaders(),
    });

    return res.json();
  },

  post: async (endpoint, body) => {
    const res = await fetch(`${API_BASE_URL}${endpoint}`, {
      method: "POST",
      headers: getHeaders(),
      body: JSON.stringify(body),
    });

    return res.json();
  },

  put: async (endpoint, body) => {
    const res = await fetch(`${API_BASE_URL}${endpoint}`, {
      method: "PUT",
      headers: getHeaders(),
      body: JSON.stringify(body),
    });

    return res.json();
  },

  delete: async (endpoint) => {
    const res = await fetch(`${API_BASE_URL}${endpoint}`, {
      method: "DELETE",
      headers: getHeaders(),
    });

    return res.json();
  },
};

export default api;
