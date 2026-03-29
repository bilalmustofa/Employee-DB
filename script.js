// Selecting Element 
let addBtn = document.getElementById("addBtn");
let formPopup = document.getElementById("formPopup");
let closeBtn = document.getElementById("closeBtn");
let saveBtn = document.getElementById("saveBtn");

// stores the employee list
let employees = [];

// LOAD DATA
fetch("data.json")
  .then(res => res.json())
  .then(data => {
    employees = data;
    renderEmployees();
  });

// open to Add Employee Form
addBtn.onclick = () => {
    formPopup.classList.remove("hidden");
}

// close to Add Employee Form
closeBtn.onclick = () => {
    formPopup.classList.add("hidden");
}

// ADD EMPLOYEE
saveBtn.onclick = () => {
    let newEmp = {
        id: Date.now(),
        firstName: document.getElementById("firstName").value,
        lastName: document.getElementById("lastName").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        salary: document.getElementById("salary").value,
        dob: document.getElementById("dob").value
    }
    employees.push(newEmp);
    renderEmployees();
    formPopup.classList.add("hidden");
}

// DISPLAY EMPLOYEES
function renderEmployees() {
    let list = document.getElementById("employeeList");
    list.innerHTML = "";

    employees.forEach(emp => {
        let div = document.createElement("div");
        div.className = "employee";
        div.innerHTML = `
        <strong>${emp.firstName} ${emp.lastName}</strong> <br>
        <button onclick ="deleteEmployee(${emp.id})">Delete</button>`;
        div.onclick =  () => renderSingleEmployee(emp.id);
        list.appendChild(div);
    });
}

// DELETE
function deleteEmployee(id) {
  employees = employees.filter(emp => emp.id !== id);
  renderEmployees();
  document.getElementById("detailsContent").innerHTML = "Click an employee";
}

// SHOW SINGLE EMPLOYEE
function renderSingleEmployee(id) {
  let emp = employees.find(e => e.id === id);
  let details = document.getElementById("detailsContent");

  details.innerHTML = `
    <p><b>Name:</b> ${emp.firstName} ${emp.lastName}</p>
    <p><b>Email:</b> ${emp.email}</p>
    <p><b>Phone:</b> ${emp.phone}</p>
    <p><b>Salary:</b> ${emp.salary}</p>
    <p><b>DOB:</b> ${emp.dob}</p>
  `;
}