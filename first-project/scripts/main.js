let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/cat-transparent-resized.png') {


myImage.setAttribute('src','images/cat-transparent-resized-color.png');
    } else {
        myImage.setAttribute('src','images/cat-transparent-resized.png');
    }

}
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName) {
        setUserName();
    } else {
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Whatchu looking at, ' + myName;
    }
}

if(!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Whatchu looking at, ' + storedName;
}

myButton.onclick = function() {
    setUserName();
}
