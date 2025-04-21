function addNewWEField() {
    addNewField("we", "weField");
}

function addNewPEField() {
    addNewField("pe", "peField");
}

function addNewSEField() {
    addNewField("se", "seField");
}

function addNewAQField() {
    addNewField("aq", "aqField");
}

function addNewField(parentId, className) {
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control", className, "mt-2");
    newNode.setAttribute("rows", 2);
    newNode.setAttribute("placeholder", "Enter here");

    let parentOb = document.getElementById(parentId);
    let addButton = parentOb.querySelector("button");
    parentOb.insertBefore(newNode, addButton);
}

function generateCV() {
    document.getElementById("nameT").innerHTML = document.getElementById("nameField").value || "Your Name";
    document.getElementById("contactT").innerHTML = document.getElementById("contactField").value;
	document.getElementById("mailT").innerHTML = document.getElementById("mailField").value;
    document.getElementById("addressT").innerHTML = document.getElementById("addressField").value;
    document.getElementById("objectiveT").innerHTML = document.getElementById("objectiveField").value;

    populateList("weField", "weT");
    populateList("peField", "peT");
    populateList("seField", "seT");
    populateList("aqField", "aqT");

    let file = document.getElementById("imgField").files[0];
    if (file) {
        let reader = new FileReader();
        reader.onload = () => document.getElementById("imgT").src = reader.result;
        reader.readAsDataURL(file);
    }

    document.getElementById("cv-form").style.display = "none";
    document.getElementById("cv-template").style.display = "block";
}

function populateList(fieldClass, targetId) {
    let fields = document.getElementsByClassName(fieldClass);
    let content = "";
    for (let field of fields) {
        if (field.value.trim()) content += `<li>${field.value}</li>`;
    }
    document.getElementById(targetId).innerHTML = content;
}

function printCV() {
    window.print();
}
