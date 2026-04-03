import EmployeeFilter from "../components/Employee/EmployeeFilter";
import EmployeeCard from "../components/Employee/EmployeeCard";
import AddEmployeeCard from "../components/Employee/AddEmployeeCard";

export default function AllEmployees() {

  const employees = new Array(13).fill(0);

  return (
    <div className="space-y-6">

      {/* FILTER */}
      <EmployeeFilter />

      {/* GRID */}
      <div className="grid grid-cols-6 gap-4">

        {/* ADD CARD */}
        <AddEmployeeCard />

        {/* EMPLOYEES */}
        {employees.map((_, i) => (
          <EmployeeCard key={i} />
        ))}

      </div>

    </div>
  );
}