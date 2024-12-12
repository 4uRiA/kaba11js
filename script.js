const St = new Map();

function myFunction() {
var inputs = document.getElementsByTagName('input');

St.set('Шерсть',inputs[0].value);
St.set('Глаза',inputs[1].value);
St.set('Возраст',inputs[2].value);
console.log([St.entries()]);
var BarsikAge = Barsik.get('Возраст')*7;
var FuntikAge = Funtik.get('Возраст')*7;
var StAge = St.get('Возраст')*7;

console.log(BarsikAge);
console.log(FuntikAge);
console.log(StAge);

if (StAge < BarsikAge && StAge < FuntikAge) document.write('Никто не подходит');
else if (StAge < BarsikAge && StAge > FuntikAge) document.write('Подходит Фунтик');
else if (StAge > BarsikAge && StAge < FuntikAge) document.write('Подходит Барсик');
else document.write('Оба подходят');
};



const Barsik = new Map([
	['Шерсть','Чёрная'],
	['Глаза','Голубые'],
	['Возраст',3.8]
]);


const Funtik = new Map([
	['Шерсть','Серая'],
	['Глаза','Чёрные'],
	['Возраст',4.1]
]);



