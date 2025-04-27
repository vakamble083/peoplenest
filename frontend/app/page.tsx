import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 p-6">
      <h1 className="text-4xl font-bold mb-8 text-center">👩‍💼 Employee Management</h1>
      <div className="space-y-4">
        <Link
          href="/employees"
          className="block w-64 text-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg shadow"
        >
          📋 View Employees
        </Link>
        <Link
          href="/employees/new"
          className="block w-64 text-center bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg shadow"
        >
          ➕ Add New Employee
        </Link>
      </div>
    </div>
  );
}
