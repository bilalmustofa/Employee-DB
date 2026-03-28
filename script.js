let employees = [];

// Load data from JSON file
async function loadEmployees() {
  let res = await fetch("data.json");
  employees = await res.json();
  renderEmployees();
}

// Display employees
function renderEmployees() {
  let list = document.getElementById("employeeList");
  list.innerHTML = "";

  employees.forEach(emp => {
    list.innerHTML += `
      <div class="employee">
        <div>
          <strong>${emp.firstName} ${emp.lastName}</strong><br>
          ${emp.email}<br>
          Salary: $${emp.salary}
        </div>
        <button class="delete" onclick="deleteEmployee(${emp.id})">Delete</button>
      </div>
    `;
  });
}

// Add employee
function addEmployee() {
  let firstName = document.getElementById("firstName").value;
  let lastName = document.getElementById("lastName").value;
  let email = document.getElementById("email").value;
  let salary = document.getElementById("salary").value;

  if (!firstName || !lastName || !email || !salary) {
    alert("Fill all fields");
    return;
  }

  let newEmployee = {
    id: Date.now(),
    firstName,
    lastName,
    email,
    salary
  };

  employees.push(newEmployee);
  renderEmployees();
}

// Delete employee
function deleteEmployee(id) {
  employees = employees.filter(emp => emp.id !== id);
  renderEmployees();
}

// Load on start
loadEmployees();