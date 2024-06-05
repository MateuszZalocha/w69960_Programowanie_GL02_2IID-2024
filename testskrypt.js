const form = document.getElementById('form');
const nameField = document.querySelector('[name="name"]');
const nameErrorField = document.createElement('span');
const surnameField = document.querySelector('[name="surname"]');
const surnameErrorField = document.createElement('span');
const emailField = document.querySelector('[name="email"]');
const emailErrorField = document.createElement('span');
const passwordField = document.querySelector('[name="password"]');
const passwordErrorField = document.createElement('span');
const passwordmatchField = document.querySelector('[name="password"]');
const passwordmatchErrorField = document.createElement('span');

nameField.addEventListener('input', (event) => {
   if(requiredValidation(nameField)) {
    nameErrorField.innerHTML = "Pole wymagane";
        nameField.after(nameErrorField); 
   }
   else {
    nameErrorField.remove();
   }
});

surnameField.addEventListener('input', (event) => {
    if(requiredValidation(surnameField)) {
     surnameErrorField.innerHTML = "Pole wymagane";
         surnameField.after(surnameErrorField); 
    }
    else {
     surnameErrorField.remove();
    }
 });

emailField.addEventListener('input', (event) => {
    if(emailValidation(emailField)) {
        emailErrorField.innerHTML = "Wpisz poprawny email";
        emailField.after(emailErrorField); 
    }
    else {
        emailErrorField.remove();
    }
 });


 passwordField.addEventListener('input', (event) => {
    if(PasswordValidation(passwordField)) {
        passwordErrorField.innerHTML = "Hasło musi zawierać przynajmniej 8 znaków";
        passwordField.after(passwordErrorField); 
    }
    else {
        passwordErrorField.remove();
    }
 });

 passwordmatchField.addEventListener('input', (event) => {
    if(PasswordMatchValidation(passwordmatchField)) {
        passwordmatchErrorField.innerHTML = "Hasła muszą się zgadzać";
        passwordmatchField.after(passwordmatchErrorField); 
    }
    else {
        passwordmatchErrorField.remove();
    }
 });


const formError = document.getElementById('error');
form.addEventListener('submit', (event) => {
    event.preventDefault();

    if(requiredValidation(nameField))
    {
        formError.innerHTML = 'Formularz zawiera błędy'
    }
    else {
        formError.innerHTML = '';
    }
});

function requiredValidation(field) {
    if (!field.value || field.value === '') {
        return true;
    }
    else {
        return false;
    }
}

function emailValidation(field) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(field.value)) {
        return true;
    }
    else {
        return false;
    }
}

function PasswordValidation() {
    const passwordRegex = /^.{8,}$/;
    if (!passwordRegex.test(passwordField.value)) {
        return true
    } else {
        return false
    }
   }

   function PasswordMatchValidation() {
    if (passwordField.value !== passwordmatchField.value) {
        return true
    } else {
        return false
    }
   }

function Car(mark, model, produtionYear, color) {
    this.mark = mark;
    this.model = model;
    this.produtionYear = produtionYear;
    this.color = color;
    this.speed = 0;
    this.increaceSpeed = (value) => {
        this.speed += value;
    }
}

const car1 = new Car('Volvo', 'XC60', 2022, 'blue');

const car2 = new Car('Skoda', 'octavia', 2023, 'red');

car1.increaceSpeed(20);
car2.increaceSpeed(45);

const cars = [car1, car2];

cars.forEach(element => {
    if(element.produtionYear === 2023) {
        console.log(`${element.mark} + ${element.model} + ${element.color}`);
    }
});


const avg = cars.reduce((a, car) => a + car.speed, 0)/ cars.length;
console.log(avg);