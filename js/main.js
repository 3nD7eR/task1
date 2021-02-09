'use strict'
// 	рисуем страницу
getDrawingPage();
// 	отслеживаем события
document.querySelector('button').addEventListener('click', function() {
let elementDiv;
let inputNumber1, inputNumber2, lengthRectangle1, widthRectangle1;
let inputNumber3, inputNumber4, lengthRectangle2, widthRectangle2;

// 	очистка страницы
	elementDiv = document.querySelector('.block1');
	if (elementDiv != null) {
		elementDiv.remove();
	}
	elementDiv = document.querySelector('.block2');
	if (elementDiv != null) {
		elementDiv.remove();
	}
	elementDiv = document.querySelector('.block_box');
	if (elementDiv != null) {
		elementDiv.remove();
	}
// 	ввод и проверка данных
	inputNumber1 = document.getElementById('numberIn1').value;
	inputNumber1 = Number(inputNumber1);
	if (isNaN(inputNumber1) === true && typeof inputNumber1 != 'number') {
		alert('input: 1,2,3,4,5,6,7,8,9,10');
		return;
	}
	if (inputNumber1 <= 0 || inputNumber1 > 10) {
		alert('input: 1,2,3,4,5,6,7,8,9,10');
		return;
	}
	if (Number.isInteger(inputNumber1) === false) {
		alert('input: 1,2,3,4,5,6,7,8,9,10');
		return;
	}
	inputNumber2 = document.getElementById('numberIn2').value;
	inputNumber2 = Number(inputNumber2);
	if (isNaN(inputNumber2) === true && typeof inputNumber2 != 'number') {
		alert('input: 1,2,3,4,5,6,7,8,9,10');
		return;
	}
	if (inputNumber2 <= 0 || inputNumber2 > 10) {
		alert('input: 1,2,3,4,5,6,7,8,9,10');
		return;
	}
	if (Number.isInteger(inputNumber2) === false) {
		alert('input: 1,2,3,4,5,6,7,8,9,10');
		return;
	}
	inputNumber3 = document.getElementById('numberIn3').value;
	inputNumber3 = Number(inputNumber3);
	if (isNaN(inputNumber3) === true && typeof inputNumber3 != 'number') {
		alert('input: 1,2,3,4,5,6,7,8,9,10');
		return;
	}
	if (inputNumber3 <= 0 || inputNumber3 > 10) {
		alert('input: 1,2,3,4,5,6,7,8,9,10');
		return;
	}
	if (Number.isInteger(inputNumber3) === false) {
		alert('input: 1,2,3,4,5,6,7,8,9,10');
		return;
	}
	inputNumber4 = document.getElementById('numberIn4').value;
	inputNumber4 = Number(inputNumber4);
	if (isNaN(inputNumber4) === true && typeof inputNumber4 != 'number') {
		alert('input: 1,2,3,4,5,6,7,8,9,10');
		return;
	}
	if (inputNumber4 <= 0 || inputNumber4 > 10) {
		alert('input: 1,2,3,4,5,6,7,8,9,10');
		return;
	}
	if (Number.isInteger(inputNumber4) === false) {
		alert('input: 1,2,3,4,5,6,7,8,9,10');
		return;
	}
	if (inputNumber1 >= inputNumber2) {
		lengthRectangle1 = inputNumber1;
		widthRectangle1 = inputNumber2;
	} else {
		lengthRectangle1 = inputNumber2;
		widthRectangle1 = inputNumber1;
	}
	if (inputNumber3 >= inputNumber4) {
		lengthRectangle2 = inputNumber3;
		widthRectangle2 = inputNumber4;
	} else {
		lengthRectangle2 = inputNumber4;
		widthRectangle2 = inputNumber3;
	}
	if (lengthRectangle1 === widthRectangle1) {
	} else {
	}
	if (lengthRectangle2 === widthRectangle2) {
	} else {
	}
//	рисуем прямоугольники
	getDrawingRectangles(widthRectangle1, lengthRectangle1, widthRectangle2, lengthRectangle2);
});

function getDrawingPage() {
	document.querySelector('body').insertAdjacentHTML('beforeend',
		'<header>' +
		'<h1>IT IS RECTANGLES</h1>' + '<h2>input the sides of the rectangles</h2>' +
		'<h3>(1,2,3,4,5,6,7,8,9,10; you can change the values of the sides again then you press the button and so many times)</h3>' +
		'<div class="input">' +
		'<input id="numberIn1" type="text" autocomplete="off" placeholder="the side 1 of the 1st rectangle"' +
		' value=""/>' +
		'<input id="numberIn2" type="text" autocomplete="off" placeholder="the side 2 of the 1st rectangle"' +
		' value=""/>' +
		'<input id="numberIn3" type="text" autocomplete="off" placeholder="the side 1 of the 2nd rectangle"' +
		' value=""/>' +
		'<input id="numberIn4" type="text" autocomplete="off" placeholder="the side 2 of the 2nd rectangle"' +
		' value=""/>' +
		'<button type="submit">▲</button>' +
		'</div>' +
		'</header>' +
		'<main></main>' +
		'<footer>© Created by Erik Dubenko erikod0202@gmail.com</footer>');
}

function getDrawingRectangles(heightBox1, widthBox1, heightBox2, widthBox2) {
	let blockBox1,
		blockBox2,
		square1,
		square2;
	let heightBox1R,
		widthBox1R,
		heightBox2R,
		widthBox2R,
		widthBox22R;
	let inscription1,
		inscription2;

	if (heightBox1 === widthBox1) {
	 	inscription1 = 'square';
	}
	else {
		inscription1 = 'rectangle';
	}
	if (heightBox2 === widthBox2) {
		inscription2 = 'square';
	}
	else {
		inscription2 = 'rectangle';
	}
	square1 = heightBox1 * widthBox1;
	square2 = heightBox2 * widthBox2;
	heightBox1R = heightBox1 * 40 + 'px';
	widthBox1R = widthBox1 * 40 + 'px';
	heightBox2R = heightBox2 * 40 + 'px';
	widthBox2R = widthBox2 * 40 + 'px';
	document.querySelector('main').insertAdjacentHTML('beforeend',
		`<div class="block1">the 1st is the ${inscription1} ${widthBox1}x${heightBox1} S = ${square1} </div>\<div class="block2">the 2nd is the ${inscription2} ${widthBox2}x${heightBox2} S = ${square2} </div>`);
	document.querySelector('main').insertAdjacentHTML('afterend',
		'<div class="block_box"><div class="block_box1"></div><div class="block_box2"></div></div>');
	blockBox1 = document.querySelector('.block_box1');
	blockBox1.style.border = "2px solid #00ffff";
	blockBox1.style.height = heightBox1R;
	blockBox1.style.width = widthBox1R;
	blockBox2 = document.querySelector('.block_box2');
	blockBox2.style.border = "2px dashed #008000";
	blockBox2.style.height = heightBox2R;
	blockBox2.style.width = widthBox2R;
	widthBox22R = widthBox2 * (- 40) - 4 + 'px';
	blockBox2.style.marginLeft = widthBox22R;
}
