//your JS code here. If required.
const inputField = document.getElementById("fname");

const name = inputField.value;
// console.log(name);
inputField.addEventListener('blur', () =>{
    inputField.value = inputField.value.toUpperCase();
    // console.log(input.value);
});

