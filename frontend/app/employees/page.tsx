"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import { fetchEmployees, deleteEmployee } from "@/lib/api";
import { useEffect, useState } from "react";
import { Employee } from "@/types/Employee";

export default function EmployeeListPage() {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const router = useRouter();

  async function fetchAndSetEmployees() {
    const data = await fetchEmployees();
    setEmployees(data);
  }

  useEffect(() => {
    fetchAndSetEmployees();
  }, []);

  async function handleDelete(id: number) {
    const confirmDelete = confirm("Are you sure you want to delete this employee?");
    if (!confirmDelete) return;

    try {
      await deleteEmployee(id);
      alert(`✅ Successfully deleted employee with ID: ${id}`);
      fetchAndSetEmployees();
      router.refresh();
    } catch (error) {
      console.error("Error deleting employee:", error);
      alert("❌ Failed to delete employee.");
    }
  }

  return (
    <div className="p-8 max-w-4xl mx-auto">
      {/* Heading */}
      <h1 className="text-3xl font-extrabold mb-6 text-gray-800">Employee List</h1>

      {/* Create New Button */}
      <div className="mb-6">
        <Link
          href="/employees/new"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-300"
        >
          ➕ Create New Employee
        </Link>
      </div>

      {/* Employee List */}
      {employees.length === 0 ? (
        <div className="text-center text-gray-500 mt-12">
          No employees found. Create one now!
        </div>
      ) : (
        <ul className="space-y-4">
          {employees.map((emp) => (
            <li
              key={emp.id}
              className="flex justify-between items-center bg-white shadow-sm hover:shadow-md rounded-lg p-4 transition duration-300 border border-gray-200"
            >
              {/* Employee Info */}
              <div>
                <div className="font-bold text-lg text-gray-800">{emp.name}</div>
                <div className="text-gray-500 text-sm">{emp.email}</div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3">
                {/* Edit Button */}
                <Link
                  href={`/employees/${emp.id}`}
                  className="text-green-600 hover:text-green-800 font-medium underline transition duration-200"
                >
                  Edit
                </Link>

                {/* Delete Button */}
                <button
                  onClick={() => handleDelete(emp.id)}
                  className="text-red-500 hover:text-red-700 font-medium underline transition duration-200"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
