let p2 = "Этот сайт сделал Сева";

let p1 = "hi";

const message = 5;

const alertMessage = "привет";

const image = document.querySelector('.header__logo')

const mainColor = document.querySelector('.main')

const tiktokfix = document.querySelector('#tiktok')

const tiktoktext = document.querySelector('.tiktok_title')

const youtubefix = document.querySelector('.youtube')

const scndEventBtn = document.querySelector('.event_title')

const leftText = document.querySelector('.main_left_text')

const lightThemeBtn = document.getElementById('light')

const darkThemeBtn = document.getElementById('dark')

const html = document.querySelector('html')

const sectionCreate = document.querySelector('#titleCreator')

const sectionCreateButton = document.querySelector('#addTitle')

const sectionCreateImg = document.querySelector('#ImgCreator')

const sectionCreateImgInput = document.querySelector('#addImage')

const sectionCreateText = document.querySelector('#textCreator')

const sectionCreateTypeText = document.querySelector('#addText')

const ProjectTitle = document.querySelector('.project__title')

const projectText = document.querySelector('#projectText')

function addTitleFunc() {
    ProjectTitle.textContent = sectionCreate.value;
}

function addTextFunc() {
    projectText.textContent = sectionCreateText.value;
    addTextFunc.style.backgroundColor = 'red';
}

sectionCreateTypeText.onclick = addTextFunc;

sectionCreateButton.onclick = addTitleFunc;

function changeThemeToDark() {
    html.setAttribute('theme', 'dark')
}

function ChangeThemeToLight() {
    html.setAttribute('theme', 'light')
}

lightThemeBtn.onclick = ChangeThemeToLight
darkThemeBtn.onclick = changeThemeToDark

const imya = 'Сева';
alert(`Меня зовут ${imya}`);

const str = `dz`;
console.log(`eto ${str}`);

//alert(100500);

//alert(message);

alert(p2);

//prompt(10);

let a = prompt("Как тебя зовут?",) 
leftText.innerHTML = `<h1 class="name">${a}</h1>`

//console.log(message);

//console.log(p1);

//console.log("домашнее задание") 

//console.log(345)

//console.log(image)

function showtext() {
    alert("здрасте")
}

function howoldareu() {
    prompt("сколько тебе лет?",12)
}

function whatdoulike() {
    prompt("какая еда тебе нравится?")
}

function cnslbtn() {
    console.log("тест")
}

function show2Texts() {
    alert(alertMessage);
    console.log(35);
}

function changeColor() {
    scndEventBtn.style.color = "black"
    scndEventBtn.textContent = "новый текст"
}

//show2Texts();

//showtext()

image.style.marginLeft = "100px"

//youtubefix.style.backgroundColor = "black"

//tiktokfix.style.backgroundColor = "green"

scndEventBtn.onclick = changeColor;

tiktoktext.style.fontSize = "80px"

//mainColor.style.backgroundColor = "yellow"