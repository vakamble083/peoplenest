"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { fetchEmployee, updateEmployee } from "@/lib/api";

export default function EditEmployeePage() {
  const { id } = useParams<{ id: string }>();
  if (!id) {
    throw new Error("ID is required");
  }

  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    async function loadEmployee() {
      const employee = await fetchEmployee(Number(id));
      setName(employee.name);
      setEmail(employee.email);
    }
    loadEmployee();
  }, [id]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    await updateEmployee(Number(id), { name, email });
    alert("✅ Employee updated successfully!");
    router.push("/employees");
  }

  return (
    <div className="p-8 max-w-2xl mx-auto">
      {/* Page heading */}
      <h1 className="text-3xl font-extrabold mb-6 text-gray-800">Edit Employee</h1>

      {/* Edit form */}
      <form onSubmit={handleSubmit} className="space-y-6 bg-white p-6 rounded-lg shadow-md border border-gray-200">
        
        {/* Name field */}
        <div className="flex flex-col">
          <label className="text-gray-700 font-medium mb-2">Name</label>
          <input
            value={name}
            onChange={e => setName(e.target.value)}
            className="border rounded-lg p-3 focus:ring-2 focus:ring-green-400 focus:outline-none transition w-full"
            placeholder="Enter employee name"
            required
          />
        </div>

        {/* Email field */}
        <div className="flex flex-col">
          <label className="text-gray-700 font-medium mb-2">Email</label>
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            className="border rounded-lg p-3 focus:ring-2 focus:ring-green-400 focus:outline-none transition w-full"
            placeholder="Enter employee email"
            required
          />
        </div>

        {/* Update Button */}
        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300"
          >
            Update Employee
          </button>
        </div>

      </form>
    </div>
  );
}
