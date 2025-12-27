function EmployeeList({ employees }) {
  if (!employees || employees.length === 0) {
    return <p className="text-gray-500">No employees found.</p>;
  }

  return (
    <table className="w-full border-collapse">
      <thead className="bg-gray-200">
        <tr>
          <th className="border p-2">Name</th>
          <th className="border p-2">Email</th>
          <th className="border p-2">Dept</th>
          <th className="border p-2">Salary</th>
          <th className="border p-2">Action</th>
        </tr>
      </thead>

      <tbody>
        {employees.map((e) => (
          <tr key={e.id}>
            <td className="border p-2">{e.name}</td>
            <td className="border p-2">{e.email}</td>
            <td className="border p-2">{e.department}</td>
            <td className="border p-2">{e.salary}</td>
            <td className="border p-2 text-red-500 cursor-pointer">
              Delete
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default EmployeeList;
