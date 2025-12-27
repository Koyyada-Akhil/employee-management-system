import axios from "axios";

// Backend URL
const API_URL = "http://localhost:5176/api/employees";

// Get all employees
export const getEmployees = async () => {
  try {
    const response = await axios.get(API_URL);
    // Ensure it returns an array
    if (Array.isArray(response.data)) {
      return response.data;
    } else if (response.data.employees && Array.isArray(response.data.employees)) {
      return response.data.employees;
    } else {
      return []; // fallback empty array
    }
  } catch (error) {
    console.error("Error fetching employees:", error);
    return [];
  }
};

// api/employeeApi.js
export const addEmployee = async (employee) => {
  try {
    const response = await fetch("http://localhost:5173/employees", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(employee),
    });
    const data = await response.json();
    return data;
  } catch (err) {
    console.error("Error adding employee:", err);
  }
};

