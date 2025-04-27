import { Employee } from "@/types/Employee";

const API_URL = "http://localhost:8080/api/employees";

export async function getEmployees(): Promise<Employee[]> {
  const res = await fetch(API_URL, { cache: "no-store" });
  return res.json();
}

export async function getEmployee(id: number): Promise<Employee> {
  const res = await fetch(`${API_URL}/${id}`, { cache: "no-store" });
  return res.json();
}

export async function createEmployee(employee: Employee) {
  await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(employee),
  });
}

export async function updateEmployee(id: number, employee: Employee) {
  await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(employee),
  });
}

export async function deleteEmployee(id: number) {
  await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
  });
}
