const note = document.querySelector(".note");
const noteForm = note.querySelector("form");
const noteInput = note.querySelector("input");
const noteUl = note.querySelector(".note-ul");

const keynote = "lsnote";

let lsnote = [];

function saveLsnote() {
    localStorage.setItem(keynote, JSON.stringify(lsnote));
}

function newLsnote(noteObj) {
    lsnote.push(noteObj);
}

function deleteNote(event) {
    const li = event.target.parentElement;
    li.remove();
    lsnote = lsnote.filter((list) => list.id !== parseInt(li.id));
    saveLsnote();
}

function makeNote(noteObj) {
    const li = document.createElement("li");
    li.id = noteObj.id;
    li.classList.add("note-list", "main-list");
    const span = document.createElement("span");
    span.innerText = noteObj.value;
    span.classList.add("noteSpan")
    const delInput = document.createElement("input");
    delInput.type = "image";
    delInput.classList.add("small-icon");
    delInput.src = "js/icon/whiteX.png";
    noteUl.appendChild(li);
    li.appendChild(span);
    li.appendChild(delInput);
    
    delInput.addEventListener("click", deleteNote);
}

function noteSubmit(event) {
    event.preventDefault();
    const noteValue = noteInput.value;
    noteInput.value = "";
    const noteObj = {
        value : noteValue,
        id : Date.now()
    };
    makeNote(noteObj);
    newLsnote(noteObj);
    saveLsnote();
}

function main() {
    noteForm.addEventListener("submit", noteSubmit);
    const savednote = JSON.parse(localStorage.getItem(keynote));
    if (savednote !== null) {
        savednote.forEach(element => {
            makeNote(element);
            newLsnote(element);
        });
    }
}

main();
