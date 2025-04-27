"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createEmployee } from "@/lib/api";

export default function NewEmployeePage() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    try {
      await createEmployee({ name, email });
      alert("✅ Employee created successfully!");
      router.push("/employees");
    } catch (error) {
      console.error("Error creating employee:", error);
      alert("❌ Failed to create employee!");
    }
  }

  return (
    <div className="p-8 max-w-2xl mx-auto">
      {/* Heading */}
      <h1 className="text-3xl font-extrabold mb-6 text-blue-700">Create New Employee</h1>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-6  p-6 rounded-lg shadow-md border border-blue-200">

        {/* Name Field */}
        <div className="flex flex-col">
          <label className="text-blue-800 font-semibold mb-2">Name</label>
          <input
            value={name}
            onChange={e => setName(e.target.value)}
            className="border rounded-lg p-3 focus:ring-2 focus:ring-blue-400 focus:outline-none transition w-full"
            placeholder="Enter full name"
            required
          />
        </div>

        {/* Email Field */}
        <div className="flex flex-col">
          <label className="text-blue-800 font-semibold mb-2">Email</label>
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            className="border rounded-lg p-3 focus:ring-2 focus:ring-blue-400 focus:outline-none transition w-full"
            placeholder="Enter email address"
            required
          />
        </div>

        {/* Submit Button */}
        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300"
          >
            Create Employee
          </button>
        </div>

      </form>
    </div>
  );
}
