// 0. Вернет массив, с которым пользователь захочет работать (вернуть первый массив, если в функцию передали строку 'first', второй - 'second', третий - 'third')
// Если ни одно условие не совпадает вернуть undefined

// 1. Если массив есть, то продолжить работу программы, иначе не выполнять следующие операторы

// 2. Написать функцию которая вернет булево значение, если в массиве есть хотя бы одно отрицательное число

// 3  Написать функцию, которая вернет массив с заменой отрицательных значений на нули

// 3. Написать функцию которая вернет новый массив, удалив все нули из массива

// 4. написать функцию которая посчитает среднее арифетическое

// 5. написать функцию которая вернет максиммальное значение

// 6. написать функцию которая вернет минимальное значение

// 7. написать функцию которая выведет сообщение "ОК", если в массиве есть число больше или ровно 100

const arrayOne = [4, 2, 5, 2, 200, -204, 1034, 0,0, 0, 23, -345, -1, 0] //first
const arrayTwo = [23, 34, 45, 67, 0, 9, 1] //second
const arrayThree = [-1, -2, -3, -100, -235, -1000] //third

function alertOK(array){
  for(let i = 0; i < array.length; i++){
    if(array[i] >= 100){
      console.log("OK"); break;
    }
  }
}

function getMax(array){
  let max = array[0]
  for(let i = 0; i < array.length; i++){
    if(array[i] > max){
      max = array[i]
    }
  }
  return max
}

function calculateSredneeArifmeticheskoe(array){
  let sum = 0;
  for(let i = 0; i < array.length; i++){
    sum = sum + array[i]
  }
  sum = sum / array.length
  return sum
}


function arrayDeleteZero(array){
  let newArray = []
  for(let i = 0; i < array.length; i++){
    if (array[i] !==0) {
      newArray.push(array[i]);
    }
  }
  return newArray
}



function arrayChangeNegativeByZero(array){
  let newArray = []
  for (let i = 0; i < array.length; i++){
    if(array[i] < 0) {
      newArray.push(0)
    } else {
      newArray.push(array[i]);
    }
  }
  return newArray
}

function findNegative(array){
  let isNegative = false;
  for(let i = 0 ; i < array.length; i++){
    if(array[i] < 0){
       isNegative = true;
    }
  }
  return isNegative
}


function chooseArray(arrayName){
  if (arrayName === "first"){
      return arrayOne;
  }
  if (arrayName === "second"){
      return arrayTwo;
  }
  if (arrayName === "third"){
      return arrayThree;
  } else {
      return undefined;
  }
}


function main(){
  let currentArray = chooseArray("first");
  if (!currentArray) return

  let haveNegative = findNegative(currentArray);
  let arrayWithOutNegative = arrayChangeNegativeByZero(currentArray);
  let arrayNotZero = arrayDeleteZero(arrayWithOutNegative);
  let average = calculateSredneeArifmeticheskoe(arrayNotZero);
  let max = getMax(arrayNotZero);
  alertOK(arrayNotZero);
}
main();