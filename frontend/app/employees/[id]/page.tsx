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
    router.push("/employees");
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Edit Employee</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label>Name:</label><br/>
          <input
            value={name}
            onChange={e => setName(e.target.value)}
            className="border p-2 w-full"
            required
          />
        </div>
        <div>
          <label>Email:</label><br/>
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            className="border p-2 w-full"
            required
          />
        </div>
        <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded">
          Update
        </button>
      </form>
    </div>
  );
}
