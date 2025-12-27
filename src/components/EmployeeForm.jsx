import { useState } from "react";

function EmployeeForm({ onAdd }) {
  const [employee, setEmployee] = useState({
    name: "",
    email: "",
    department: "",
    salary: ""
  });

  const handleChange = (e) => {
    setEmployee({ ...employee, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/employees", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...employee, salary: Number(employee.salary) })
      });

      if (response.ok) {
        alert("Employee added successfully!");
        setEmployee({ name: "", email: "", department: "", salary: "" });
        onAdd && onAdd();
      } else {
        alert("Failed to add employee");
      }
    } catch {
      alert("Sorry, data failed to post");
    }
  };

  return (
    /* BACKGROUND IMAGE ONLY (NO PINK OVERLAY) */
    <div
      className="
        min-h-screen flex items-center justify-center
        bg-[url('/employee-bg-2.png')]
        bg-cover bg-center bg-no-repeat
      "
    >
      {/* CENTERED FORM CARD */}
      <form
        onSubmit={handleSubmit}
        className="
          w-full max-w-md
          bg-white/90
          p-10 rounded-3xl
          shadow-2xl
          backdrop-blur-md
        "
      >
        {/* TITLE */}
        <h1 className="text-3xl font-extrabold text-center text-gray-800 mb-2">
          Employee Management System
        </h1>
        <p className="text-center text-gray-500 mb-8">
          Manage your workforce smarter
        </p>

        {/* INPUTS */}
        <div className="space-y-4">
          <input
            name="name"
            value={employee.name}
            onChange={handleChange}
            placeholder="Full Name"
            className="w-full px-4 py-3 rounded-xl border focus:ring-2 focus:ring-indigo-400 outline-none"
          />

          <input
            name="email"
            type="email"
            value={employee.email}
            onChange={handleChange}
            placeholder="Email Address"
            className="w-full px-4 py-3 rounded-xl border focus:ring-2 focus:ring-indigo-400 outline-none"
          />

          <input
            name="department"
            value={employee.department}
            onChange={handleChange}
            placeholder="Department"
            className="w-full px-4 py-3 rounded-xl border focus:ring-2 focus:ring-indigo-400 outline-none"
          />

          <input
            name="salary"
            type="number"
            value={employee.salary}
            onChange={handleChange}
            placeholder="Salary"
            className="w-full px-4 py-3 rounded-xl border focus:ring-2 focus:ring-indigo-400 outline-none"
          />
        </div>

        {/* BUTTON */}
        <button
          type="submit"
          className="
            w-full mt-6 py-3 rounded-xl
            text-white font-semibold text-lg
            bg-indigo-600 hover:bg-indigo-700
            transition
          "
        >
          ➕ Add Employee
        </button>
      </form>
    </div>
  );
}

export default EmployeeForm;
