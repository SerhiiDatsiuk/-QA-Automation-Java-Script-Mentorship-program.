/*Task1*/
/*Створити список з обʼєктів, де поля цих обʼєктів описують твоїх колег з проекту. 
тобто буде масив твоїх колег з деталями, наприклад імʼя, прізвище, технології. ітд*/

const colleaguesInfo = [
{
    firstName: 'Anna', 
    age: 33, 
    role: 'Business Analyst', 
    level: 'Junior'
},
{
    firstName: 'Andriy', 
    age: 37, 
    role: 'Automation QA', 
    level: 'Senior'
},    
{
    firstName: 'Dominik', 
    age: 25, 
    role: 'Project Manager', 
    level: 'Trainee'
},
{    
    firstName: 'Oleg', 
    age: 50, 
    role: 'Java Engineer', 
    level: 'Tech Lead',
}
];

/*Task2*/
/*Створити функцію, яка приймає список строк ['tomato', 'cucumber', 'pepper', 'tomato', 'carrot', 'carrot']. 
Повернути обʼєкт де поля це продукти а значення це кількість цих продуктів. тобто tomato:2, carrot: 2 і тд */

/*Такий має бути результат
newObj = {
   tomato: 2,
   cucumber: 1,
   pepper: 1,
   carrot: 2 
}*/

const vegs = ['tomato', 'cucumber', 'pepper', 'tomato', 'carrot', 'carrot'];

function getObj(arr) {
    let newObj = {};

 for (let i = 0; i < arr.length; i++) {
  if (newObj[arr[i]] === undefined) {
    newObj[arr[i]] = 1;
  } else {
    newObj[arr[i]] = newObj[arr[i]] + 1;
  }
}
    return newObj
}

console.log(getObj(vegs))

/*Task3*/
/*Створити функцію яка приймає обʼєкт (де поле це строка, а значення це число). Повернути список значень цього обʼєкту.*/

function getValues (obj) {
    return Object.values(obj);
}

const obj3 = {
    field1: 10,
    field2: 255,
    field3: 10.25
};

console.log(getValues(obj3))

/*Task4*/
/*Створити функцію яка приймає обʼєкт(де поле це строка, а значення це число). Повернути список полів цього обʼєкту.*/

function getValues (obj) {
    return Object.keys(obj);
}

const objCar = {
    make: 'Skoda',
    model: 'fabia',
    year: '2007',
    type: 'combi'
};

console.log(getValues(objCar))
