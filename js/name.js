const login = document.querySelector(".login");
const loginForm = login.querySelector("form");
const loginInput = login.querySelector("input");

const lsName = "name";


function languageCheck(hello, value, hours) {
    const checkKor = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/;
    let greet = "";
    if (checkKor.test(value)) {
        if (hours >= 5 && hours < 12) {
            greet = "좋은 아침입니다.";
        } else if (hours >= 12 && hours < 17) {
            greet = "좋은 점심입니다.";
        } else if (hours >= 17 && hours < 21) {
            greet = "좋은 저녁입니다.";
        } else {
            greet = "좋은 밤입니다.";
        }
        hello.innerText = `${greet} ${value}님`;
    } else {
        if (hours >= 5 && hours < 12) {
            greet = "Good morning";
        } else if (hours >= 12 && hours < 17) {
            greet = "Good afternoon";
        } else if (hours >= 17 && hours < 21) {
            greet = "Good evening";
        } else {
            greet = "Good night";
        }
        hello.innerText = `${greet} ${value}`;
    }
}

function loginSubmit(event) {
    event.preventDefault();
    const loginHours = (new Date()).getHours();
    const hello = document.createElement("div");
    login.appendChild(hello);
    hello.classList.add("hello");
    languageCheck(hello, loginInput.value, loginHours);
    localStorage.setItem(lsName, loginInput.value);
    login.removeChild(loginForm);
}

function main() {
    if (localStorage.getItem(lsName) != null) {
        const loginHours = (new Date()).getHours();
        const hello = document.createElement("div");
        login.appendChild(hello);
        hello.classList.add("hello");
        languageCheck(hello, localStorage.getItem(lsName), loginHours);
        login.removeChild(loginForm);
    } else {
        loginForm.addEventListener("submit", loginSubmit);
    }
}

main();