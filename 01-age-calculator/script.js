const btnElement = document.getElementById("btn");
const birthdayElement = document.getElementById("birthday");
let resultElement = document.getElementById("result");
function calculateAge() {
    console.log('clicked');
    const birthdayValue = birthdayElement.value;
    if (birthdayValue === "") {
        alert("Please enter your birthday!")
    }
    else {
        age = getAge(birthdayValue);
        resultElement.innerText = `Your age is ${age} ${age > 1 ? "years" : "year"} old`
    }

}

function getAge(birthdayValue) {
    const currentDate = new Date();
    const birthdayDate = new Date(birthdayValue);
    let age = currentDate.getFullYear() - birthdayDate.getFullYear();
    const month = currentDate.getMonth() - birthdayDate.getMonth();

    if (month < 0 || (month === 0 && currentDate.getDate() < birthdayDate.getDate())) {
        age--;
    }
    return age;
}

btnElement.addEventListener("click", calculateAge)