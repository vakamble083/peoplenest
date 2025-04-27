 **`curl` commands** for the **EmployeeApiController** you shared earlier.  

---

# 📋 `curl` Commands for `EmployeeApiController`

### 1. ➡️ Fetch all employees (GET `/api/employees`)

```bash
curl -X GET http://localhost:8080/api/employees
```

---

### 2. ➡️ Create a new employee (POST `/api/employees`)

```bash
curl -X POST http://localhost:8080/api/employees \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John Doe",
    "email": "john.doe@example.com"
}'
```

---

### 3. ➡️ Get a specific employee by ID (GET `/api/employees/{id}`)

```bash
curl -X GET http://localhost:8080/api/employees/1
```
*(replace `1` with the actual employee ID)*

---

### 4. ➡️ Update an employee by ID (PUT `/api/employees/{id}`)

```bash
curl -X PUT http://localhost:8080/api/employees/1 \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John Smith",
    "email": "john.smith@example.com"
}'
```
*(replace `1` with the actual employee ID)*

---

### 5. ➡️ Delete an employee by ID (DELETE `/api/employees/{id}`)

```bash
curl -X DELETE http://localhost:8080/api/employees/1
```
*(replace `1` with the actual employee ID)*

---

# 📚 Notes
- `-X` → HTTP Method (`GET`, `POST`, `PUT`, `DELETE`)
- `-H "Content-Type: application/json"` → Tells server body is JSON
- `-d` → Request body data (only for `POST` and `PUT`)
- `localhost:8080` → Default Spring Boot port (change if your app runs elsewhere)

---
