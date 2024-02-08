let username = document.getElementById("username");
let phone = document.getElementById("Phone");
let education = document.getElementById("education");
let branch = document.getElementById("branch");
let college = document.getElementById("college");
let passout = document.getElementById("passout-year");
let email = document.getElementById("email");
let tableBody = document.getElementById("tablebody");

let srno = 1;
let currentRow = null;
function dataProcessing() {
    let formData = fetchData();
    if (currentRow == null) {
        storeData(formData);
    } else{                             // if (currentRow == "update") {
        updateData(formData);
    }
}

function fetchData() {

    let formData = {};
    formData.username = username.value;
    formData.phone = phone.value ;
    formData.education = education.value;
    formData.branch = branch.value;
    formData.college = college.value;
    formData.passout = passout.value;
    formData.email = email.value;
    return formData;
}


function updateData(formData) {
   
    currentRow.cells[1].innerHTML=formData.username ;
    currentRow.cells[2].innerHTML=formData.email ;
    currentRow.cells[3].innerHTML=formData.phone ;
    currentRow.cells[4].innerHTML=formData.education ;
    currentRow.cells[5].innerHTML=formData.passout ;
    clearFields() ;
    
  
}

function storeData(formData) {
   currentRow = tableBody.insertRow(tableBody.length);
   let newRow = currentRow;
    let cell0 = newRow.insertCell(0);
    cell0.innerHTML = srno++;
    let cell1 = newRow.insertCell(1);
    cell1.innerHTML = formData.username;
    let cell2 = newRow.insertCell(2);
    cell2.innerHTML = formData.email;
    let cell3 = newRow.insertCell(3);
    cell3.innerHTML = formData.phone;
    let cell4 = newRow.insertCell(4);
    cell4.innerHTML = formData.education;
    let cell5 = newRow.insertCell(5);
    cell5.innerHTML = formData.passout;
    let cell6 = newRow.insertCell(6);
    cell6.innerHTML = `<button onclick="editData(this)" class="btn btn-primary"> EDIT </button>
    <button onclick="deleteData(this)" class="btn btn-primary"> DELETE</button> `;
    clearFields();
}

function clearFields() {
    username.value = "";
    phone.value = "";
    education.value = "";
    branch.value = "";
    college.value = "";
    passout.value = "";
    email.value = "";
    currentRow=null ;
}

function editData(btn) 
{   
    currentRow  = btn.parentElement.parentElement;

    username.value = currentRow.cells[1].innerHTML;
    email.value = currentRow.cells[2].innerHTML;
    phone.value = currentRow.cells[3].innerHTML;
    education.value = currentRow.cells[4].innerHTML;
    passout.value = currentRow.cells[5].innerHTML;
}

function deleteData(btn) {
    let rw = btn.parentElement.parentElement;
    if(confirm("are u sure"))
    {
    document.getElementById("tablebody").deleteRow(rw.rowIndex-1);
}
}
