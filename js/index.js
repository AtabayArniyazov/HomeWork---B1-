var str = prompt("Напишите любое слово");

while(!str) {
	str = prompt("Вы ничего не написали. \nНАПИШИТЕ ЛЮБОЕ СЛОВО!");
}

function strReverse(argument) {
	//строку => в массив
	//перестановливаем элементы массива в обратный порядок
	//массив обратно => в строку
	return argument.split("").reverse().join("");
}

alert(strReverse(str));