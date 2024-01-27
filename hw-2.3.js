// Заание 1
let password = 'parol';
let f = prompt('введите пароль');
if(f===password) {
alert('Пароль введен верно!');
} else {
    alert ('Пароль введен неправильно!');
}

// Задание 2
let c = prompt('Укажи любое число c')
if (c>0 && c<10) {
alert ('Верно!')
} else {
    alert('Неверно!')
}

// Задание 3
let d = prompt('Укажи любое число - d')
let e = prompt('Укажи любое число - e')
if (d >100 || e > 100){
alert ('Верно!')
} else {
    alert('Неверно!')
}

//Задание 4
let a = '2';
let b = '3';
// Код выше изменять менять нельзя, чтобы решить задачу исправьте код ниже: 

alert (Number(a) + Number(b));

//Задание 5
let montNumber = prompt('Введите номер месяца');

switch (montNumber) {
    case '1':
  alert('зима');
  break;
    case '2':
  alert('зима');
  break;
    case '3':
  alert('весна');
  break;
    case '4':
  alert('весна');
  break;
    case '5':
  alert('весна');
  break;
    case '6':
  alert('лето');
  break;
    case '7':
  alert('лето');
  break;
    case '8':
  alert('лето');
  break;
      case '9':
  alert('осень');
  break;
      case '10':
  alert('осень');
  break;
      case '11':
  alert('осень');
  break;
      case '12':
  alert('зима');
  break;
      default:
  alert('такого месяца не существует');
  break;
}

