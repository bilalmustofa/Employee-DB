// Selecting Element 
let addBtn = document.getElementById("addBtn");
let formPopup = document.getElementById("formPopup");
let closeBtn = document.getElementById("closeBtn");

// open to Add Employee Form
addBtn.onclick = () => {
    formPopup.classList.remove("hidden");
}

// close to Add Employee Form
closeBtn.onclick = () => {
    formPopup.classList.add("hidden");
}