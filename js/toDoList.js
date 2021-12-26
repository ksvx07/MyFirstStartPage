const toDoList = document.querySelector(".toDoList");
const toDoListForm = toDoList.querySelector("form");
const toDoListInput = toDoList.querySelector("input");
const toDoListUl = toDoList.querySelector(".toDoList-ul");


const keyToDoList = "lsToDoList";

let lsToDoList = {
    list : []
};

function saveLsToDoList() {
    localStorage.setItem(keyToDoList, JSON.stringify(lsToDoList));
}

function newLsToDoList(toDoObj) {
    lsToDoList.list.push(toDoObj);
}

function deleteToDoList(event) {
    const li = event.target.parentElement;
    li.remove();
    lsToDoList.list = lsToDoList.list.filter((list) => list.id !== parseInt(li.id));
    saveLsToDoList();
}

function checkChange(event) {
    const checkbox = event.target;
    const id = event.target.parentElement.parentElement.id;
    lsToDoList.list.forEach(element => {
        if (element.id === parseInt(id)) {
            element.check = checkbox.checked;
        }
    });
    saveLsToDoList();
}

function makeToDoList(toDoObj, todayisTrue) {
    const li = document.createElement("li");
    li.id = toDoObj.id;
    li.classList.add("toDoList-list", "main-list");
    const span = document.createElement("span");
    span.className = "pretty p-image p-plain p-smooth";
    const checkInput = document.createElement("input");
    checkInput.type = "checkbox";
    if (todayisTrue) {
        checkInput.checked = toDoObj.check;
    } else {
        checkInput.checked = false;
    }
    const div = document.createElement("div");
    div.className = "state";
    const img = document.createElement("img");
    img.className = "image"; //delete red at the end
    img.src = "js/icon/redCheck.png";
    const label = document.createElement("label");
    label.innerText = toDoObj.value;
    label.classList.add("list-label");
    const delInput = document.createElement("input");
    delInput.type = "image";
    delInput.classList.add("small-icon");
    delInput.src = "js/icon/whiteX.png";
    toDoListUl.appendChild(li);
    li.appendChild(span);
    span.appendChild(checkInput);
    span.appendChild(div);
    div.appendChild(img);
    div.appendChild(label);
    li.appendChild(delInput);
    
    checkInput.addEventListener("change", checkChange);
    delInput.addEventListener("click", deleteToDoList);
}

function toDoSubmit(event) {
    event.preventDefault();
    const toDoValue = toDoListInput.value;
    toDoListInput.value = "";
    const toDoObj = {
        value : toDoValue,
        check : false,
        id : Date.now()
    };
    makeToDoList(toDoObj, false);
    newLsToDoList(toDoObj);
    saveLsToDoList();
}

function todayisTrue(today) {
    if (JSON.parse(localStorage.getItem(keyToDoList)).date === today) {
        return true
    }
    return false
}

function saveToday() {
    const newDate = new Date();
    const year = newDate.getFullYear();
    const month = newDate.getMonth();
    const date = newDate.getDate();
    const today = `${year}-${month}-${date}`;
    return today
}

function main() {
    const today = saveToday();
    toDoListForm.addEventListener("submit", toDoSubmit);
    const savedToDoList = JSON.parse(localStorage.getItem(keyToDoList));
    if (savedToDoList !== null) {
        if (savedToDoList.list.length !== 0) {
            savedToDoList.list.forEach(element => {
                if (!todayisTrue(today)) {
                    element.check = false;
                }
                makeToDoList(element, todayisTrue(today));
                newLsToDoList(element);
            });
        }
    }
    lsToDoList.date = today;
    saveLsToDoList();
}

main();

