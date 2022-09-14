var accBtn = document.querySelector("#accBtn");
var addAccBtn = document.querySelector("#addAccBtn");
var editDelBtn = document.querySelector("#editDelBtn");
var mainView = document.querySelector("#mainView");
var mainBody = document.querySelector("#mainBody");
var formView = document.querySelector("#formView");
var saveBtn = document.querySelector("#saveBtn");
var accId = document.querySelector("#accId");
var eaccId = document.querySelector("#eaccId");
var accName = document.querySelector("#accName");
var eaccName = document.querySelector("#eaccName");
var accDeposit = document.querySelector("#accDeposit");
var eaccDeposit = document.querySelector("#eaccDeposit");
var accCard = document.querySelector("#accCard");
var eaccCard = document.querySelector("#eaccCard");
var editView = document.querySelector("#editView");
var editBody = document.querySelector("#editBody");
var editFormView = document.querySelector("#editFormView");
var editBtn = document.querySelector("#editBtn");
var id;

// DataBase:
var db = [
  {
    id: "1",
    name: "Asmir",
    deposit: 100000,
    cCard: "Visa",
  },
  {
    id: "2",
    name: "Semir",
    deposit: 244170,
    cCard: "Master",
  },
];

// AddEventListener`s:
addAccBtn.addEventListener("click", showForm);
accBtn.addEventListener("click", showMainView);
saveBtn.addEventListener("click", saveAccount);
editDelBtn.addEventListener("click", showEditViewe);
editBtn.addEventListener("click", changeAccount);

// Function`s:
function showForm() {
  mainView.style.display = "none";
  editView.style.display = "none";
  editFormView.style.display = "none";
  formView.style.display = "block";
}

function showMainView() {
  formView.style.display = "none";
  editView.style.display = "none";
  editFormView.style.display = "none";
  mainView.style.display = "block";
}

function saveAccount() {
  var id = accId.value;
  var name = accName.value;
  var deposit = accDeposit.value;
  var card = accCard.value;
  // console.log(id, name, deposit, card);
  var newAccount = {
    id: id,
    name: name,
    deposit: deposit,
    cCard: card,
  };
  db.push(newAccount);
  createTable();
  showMainView();
}

function showEditViewe() {
  createEditTable();
  mainView.style.display = "none";
  formView.style.display = "none";
  editFormView.style.display = "none";
  editView.style.display = "block";
}

function createEditTable() {
  var text = "";
  for (let i = 0; i < db.length; i++) {
    text += "<tr>";
    text += "<td>" + db[i].id + "</td>";
    text += "<td>" + db[i].name + "</td>";
    text += "<td>" + db[i].deposit + "</td>";
    text += "<td>" + db[i].cCard + "</td>";
    // Kustom dejta atributi data-id ="'+i+'"
    text +=
      '<td><button data-id="' +
      i +
      '" class ="btn btn-warning edit">Edit</button></td>';
    text +=
      '<td><button id="' +
      i +
      '" class ="btn btn-danger delete">Delete</button></td>';
    text += "</tr>";
  }
  editBody.innerHTML = text;
  var deleteBtns = document.querySelectorAll(".delete");
  var editBtns = document.querySelectorAll(".edit");
  for (let i = 0; i < deleteBtns.length; i++) {
    deleteBtns[i].addEventListener("click", deleteAccount);
    editBtns[i].addEventListener("click", editAccount);
  }
}
function deleteAccount() {
  var id = this.id;
  // console.log(id); //Radi pokazo id!
  db.splice(id, 1);
  createTable();
  showMainView();
}

function changeAccount() {
  var accId = eaccId.value;
  var accName = eaccName.value;
  var accDeposit = eaccDeposit.value;
  var accCard = eaccCard.value;

  db[id] = {
    id: accId,
    name: accName,
    deposit: accDeposit,
    cCard: accCard,
  };
  createTable();
  showMainView();
}

function editAccount() {
  mainView.style.display = "none";
  formView.style.display = "none";
  editView.style.display = "none";
  editFormView.style.display = "block";
  // Sada cemo da uzmemo ovaj nas atribut (data-id):
  id = this.getAttribute("data-id");
  eaccId.value = db[id].id;
  eaccName.value = db[id].name;
  eaccDeposit.value = db[id].deposit;
  eaccCard.value = db[id].cCard;
}

createTable();
function createTable() {
  var text = "";
  for (let i = 0; i < db.length; i++) {
    text += "<tr>";
    text += "<td>" + db[i].id + "</td>";
    text += "<td>" + db[i].name + "</td>";
    text += "<td>" + db[i].deposit + "</td>";
    text += "<td>" + db[i].cCard + "</td>";
    text += "</tr>";
  }
  mainBody.innerHTML = text;
}
