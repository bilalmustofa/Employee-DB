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
        firstName: document.getElementById("firstName").Value,
        lastName: document.getElementById("lastName").Value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        salary: document.getElementById("salary").value,
        dob: document.getElementById("dob").value
    }
    employees.push(newEmp);
    formPopup.classList.add("hidden");
}

// DISPLAY EMPLOYEES
function renderEmployees() {
    let list = document.getElementById("employeeList");
    list.innerHTML = "";
}