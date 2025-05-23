import { Employee } from "@/types/Employee";

const API_BASE_URL = "http://localhost:8080/api/employees";

export async function fetchEmployees(): Promise<Employee[]> {
  console.log("[fetchEmployees] Sending request to:", API_BASE_URL);

  try {
    const res = await fetch(API_BASE_URL, { cache: "no-store" });

    console.log("[fetchEmployees] Response received:", res);

    if (!res.ok) {
      console.error("[fetchEmployees] Failed response:", res.status, res.statusText);
      alert(`Failed to fetch employees: ${res.status} ${res.statusText}`);
      throw new Error(`Failed to fetch employees: ${res.status} ${res.statusText}`);
    }

    const data = await res.json();
    console.log("[fetchEmployees] Fetched employees data:", data);

    // alert("Successfully fetched employees data!");
    return data;

  } catch (error) {
    console.error("[fetchEmployees] Error occurred:", error);
    // alert(`Error occurred while fetching employees: ${error}`);
    throw error; // rethrow so that caller can handle too
  }
}


export async function fetchEmployee(id: number): Promise<Employee> {
  const res = await fetch(`${API_BASE_URL}/${id}`, { cache: "no-store" });
  if (!res.ok) throw new Error("Failed to fetch employee");
  return res.json();
}

export async function createEmployee(employee: Omit<Employee, "id">): Promise<Employee> {
  const res = await fetch(API_BASE_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(employee),
  });
  if (!res.ok) throw new Error("Failed to create employee");
  return res.json();
}

export async function updateEmployee(id: number, employee: Omit<Employee, "id">): Promise<Employee> {
  const res = await fetch(`${API_BASE_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(employee),
  });
  if (!res.ok) throw new Error("Failed to update employee");
  return res.json();
}

export async function deleteEmployee(id: number): Promise<void> {
  const res = await fetch(`${API_BASE_URL}/${id}`, {
    method: "DELETE",
  });
  if (!res.ok) throw new Error("Failed to delete employee");
}
