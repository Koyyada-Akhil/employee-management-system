import express from "express";
import cors from "cors";
import db from "./db.js";

const app = express();

app.use(cors());
app.use(express.json());

/* ======================
   LOGIN ROUTE (existing)
====================== */
app.post("/login", (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ error: "Username and password required" });
  }

  const query = "INSERT INTO users (username, password) VALUES (?, ?)";
  db.query(query, [username, password], (err, result) => {
    if (err) {
      console.error("Insert error:", err);
      return res.status(500).json({ error: err.message });
    }
    res.json({ success: true, id: result.insertId });
  });
});

/* ======================
   EMPLOYEES ROUTES
====================== */

// GET all employees
app.get("/api/employees", (req, res) => {
  const query = "SELECT * FROM employees";

  db.query(query, (err, results) => {
    if (err) {
      console.error("Fetch error:", err);
      return res.status(500).json({ error: err.message });
    }
    res.json(results);
  });
});

// ADD employee
app.post("/api/employees", (req, res) => {
  const { name, email, department, salary } = req.body;

  console.log("Incoming employee:", req.body); // DEBUG

  if (!name || !email || !department || !salary) {
    return res.status(400).json({ error: "All fields are required" });
  }

  const query =
    "INSERT INTO employees (name, email, department, salary) VALUES (?, ?, ?, ?)";

  db.query(query, [name, email, department, salary], (err, result) => {
    if (err) {
      console.error("Insert error:", err);
      return res.status(500).json({ error: err.message });
    }

    res.status(201).json({
      id: result.insertId,
      name,
      email,
      department,
      salary
    });
  });
});

app.listen(5000, () =>
  console.log("Server running on port 5000")
);
