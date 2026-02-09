/***Task1***/

/*Є список ролей - const roles = ["user", "editor", "admin"]; Перевір чи роль "admin" присутня. Обгорни це в функцію, яка повертає "Access granted" якщо є “admin”, і "Access denied" якщо ні.*/


function findAdmin(roles) {

for (let i=0; i< roles.length; i++) {

    if (roles[i] === 'admin') {
        return 'Access granted';
    }
           
    }

    return 'Access denied'
}        

findAdmin(['user', 'edtior', 'admin'])



const roles = ['user', 'editor', 'admin'];

function findAdmin(rolesList) {
    for (let i = 0; i < rolesList.length; i++) {
        if (rolesList[i] === 'admin') {
            return 'Access granted';
        }
    }
    return 'Access denied';
}

console.log(findAdmin(roles));


/***Task2***/

/*Є масив HTTP кодів. Порахуй скільки кодів означають помилку (>= 400). const codes = [200, 301, 404, 500, 201]; Написати функцію яка повертає кількість таких кодів.*/

const codes = [200, 301, 404, 500, 201];

function countHttp(list) {

    let count = 0;

    for (let i=0; i<list.length; i++) { 
        
        if (list[i]>=400) {
        
        count++ 
        } 
        
    }
    return count;

}
countHttp(codes)



/***Task3***/

/*Посортуй цей список - const responseTimes = [350, 120, 500, 200];*/

 const responseTimes = [350, 120, 500, 200];

 responseTimes.sort()
 
 console.log(responseTimes)

/**** Сортування чи чисел ****/

 const responseTimes = [350, 120, 500, 200];

responseTimes.sort((a, b) => a - b);

console.log(responseTimes);


/***Task4***/

/*Напиши функції які повертають максимальне і мінімальне значення з цього списку: const responseTimes = [350, 120, 500, 200];*/

/*Це моє перше рішення після вивчення sort() методу. Але мені чат підказав що треба використати toSorted(),
оскільки sort() змінює початковий масив */

const responseTimes = [350, 120, 500, 200];

const maxResponseTime = responseTimes.sort((a, b) => a - b); // responseTimes.toSorted((a, b) => a - b);

const minResponseTime = responseTimes.sort((a, b) => b - a); // responseTimes.toSort((a, b) => b - a);

console.log( `Min value is: ${maxResponseTime}, Max value is: ${minResponseTime}`) 

/*Це друге рішення. Чат звернув мою увагу що Я не виконав вимоги завдання не написав функції. Також що я використовував sort() method  
а не викорастав Math.min/Math.max()*/

function getMaxResponseTime(value) {
   return Math.max(...value)

}

function getMinResponseTime(value) {
    return Math.min(...value)
}

console.log(getMaxResponseTime(responseTimes));
console.log(getMinResponseTime(responseTimes))


/*Task5*/

/*Є масив статусів тестів. Перевір що всі тести пройшли. const testResults = ["passed", "passed", "failed"]; поверни true якщо всі пройшли і false якщо ні.*/

const testResults = ["passed", "passed", "failed"]

function checkStatuses(value) {
    return value.every(v => v === 'passed')
}

console.log(checkStatuses(testResults))


/*Task6*/

/*Поверни цей масив без дублікатів - const logs = ["error", "warning", "error", "info"];*/

function removeDuplicates(arr) {
  return arr.filter((value, index, array) => array.indexOf(value) === index);
}

console.log(removeDuplicates(logs));

/*Task7*/

/*В тебе є двомірний масив (список в списку). Пройдись по зовнішньому списку і перевір чи кожен внутрішній список є відсортованим.Поверни список з true i false, де відповідно true якщо список відсортований і false якщо ні.
const arrays = [
  [1, 2, 3, 4],      
  [5, 3, 8],        
  [10, 20, 30],     
  [7, 7, 9, 12],     
  [4, 2, 1]
];*/

const result = arrays.map(inner =>
  inner.every((value, index) => {

    if (index === inner.length - 1) return true;

    return value <= inner[index + 1];
  })
);

console.log(result); 

/*Task 8*/

/*Є масив статусів тестів. const testResults = ["passed", "passed", "failed"]; Напиши функцію з звичайним loop і пif’ом, де ти ітеруєш по цьому списку і перевіряєш чи значення passed. Якщо ні - виконання функції автоматично завершується.
Якщо всі значення passed - поверни “success”*/

function checkStatus(statuses) {

for (let i=0; i<statuses.length; i++) {
    
    if(statuses[i] !== 'passed') {
       
        return 'failed'
    } 
}
    return 'success'

}

/***Task9***/
/*Напиши функцію яка приймає список з чисел. Сплюсуй по 2 числа з цього списку і утвори новий список. 
Поверни з функції новий список. Наприклад - [1, 2, 3, 4] -> стане [3, 7]*/


function sumPairs(arr) {
  const result = [];

  for (let i = 0; i < arr.length; i += 2) {
    result.push(arr[i] + arr[i + 1]);
  }

  return result;
}


/*Task10*/
  /*Напиши функцію яка приймає список з строк. До кожної строки в цьому списку додай довжину цього списку.Наприклад - ["first", "second", "third"] -> ["first3", "second3", "third3"]*/

const arr123 = ["first", "second", "third"]; 

const addValue = arr123.map(value => value + '3')

console.log(addValue) 


 /*Task11*/ 
 /*Напиши функцію яка приймає список з чисел. 
 Поверни новий список = значення з старого списку + значення з старого списку в реверсивному порядку.Наприклад - [1, 2, 3] -> [1, 2, 3, 3, 2, 1]*/

const arr1 = [1, 2, 3];

function array2(arr1) {
  const reversed = [...arr1].reverse();
  return arr.concat(reversed);
}

console.log(mirrorArray(arr1))

