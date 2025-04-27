import Link from "next/link";
import { fetchEmployees, deleteEmployee } from "@/lib/api";

export default async function EmployeeListPage() {
  const employees = await fetchEmployees();

  async function handleDelete(id: number) {
    "use server";
    await deleteEmployee(id);
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Employee List</h1>
      <Link href="/employees/new" className="text-blue-500 underline mb-4 block">
        ➕ Create New Employee
      </Link>
      <ul className="space-y-2">
        {employees.map(emp => (
          <li key={emp.id} className="flex justify-between items-center border-b pb-2">
            <div>
              <div className="font-semibold">{emp.name}</div>
              <div className="text-sm text-gray-600">{emp.email}</div>
            </div>
            <div className="flex gap-4">
              <Link href={`/employees/${emp.id}/edit`} className="text-green-600 underline">
                Edit
              </Link>
              <Link href={`/employees/${emp.id}/edit`} className="text-green-600 underline">
  Edit
</Link>

              <form action={async () => await handleDelete(emp.id)}>
                <button type="submit" className="text-red-500 underline">
                  Delete
                </button>
              </form>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
