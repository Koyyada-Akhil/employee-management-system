import { useEffect, useState } from "react";
import EmployeeForm from "./components/EmployeeForm";
import EmployeeList from "./components/EmployeeList";
import { getEmployees } from "./api/employeeApi";

function App() {
  const [employees, setEmployees] = useState([]);

  // Load employees from API
  const loadEmployees = async () => {
    try {
      const res = await getEmployees();
      console.log("Employees from API:", res);
      setEmployees(res || []); // Ensure it's always an array
    } catch (err) {
      console.error("Error loading employees:", err);
      setEmployees([]);
    }
  };

  useEffect(() => {
    loadEmployees();
  }, []);

  return (
    <div className="p-6">
      


      <EmployeeForm onAdd={loadEmployees} />
      <EmployeeList employees={employees} />
    </div>
  );
}

export default App;
