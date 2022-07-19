'use strict'

var gNextId = 101
var gBalloons
console.log(gBalloons)

function init() {
	gBalloons = createBalloons(10)
	renderBalloons()
}

function start() {
	setInterval(moveBalloons, 1000)
}

function moveBalloons() {
	var elBalloons = document.querySelectorAll('.balloon')

	for (var i = 0; i < gBalloons.length; i++) {
		var balloon = gBalloons[i]
		var elBalloon = elBalloons[i]
		balloon.bottom += balloon.speed
		elBalloon.style.bottom = balloon.bottom + 'px' 
	}
}

function speedUp(idx) {
	var balloon = gBalloons[idx]
	balloon.speed += 10
}

function blowingUp(elBalloon) {
	elBalloon.style.display = 'none'
	playSound()
}

function playSound() {
    var sound = new Audio("sound/sound1.mp3");
    sound.play();
}

function renderBalloons() {
	var strHTML = ''

	for (var i = 0; i < gBalloons.length; i++) {
        var balloon = gBalloons[i]
        strHTML += `<div style="left: ${balloon.left} ;background-color: ${balloon.bgColor}" onclick="blowingUp(this)" onmouseover="speedUp(${i})" class="balloon balloon${i + 1}"></div>`
    }

    var elSky = document.querySelector('.sky')
    elSky.innerHTML = strHTML
}

function createBalloons(count) {
	var balloons = []

	for (var i = 0; i < count; i++) {
		var balloon = createBalloon(i)
		balloons.push(balloon)
	}
	return balloons
}

function createBalloon(i) {
	var bgColor = getRandomColor()
    var left = i * 100 + 'px'
    return {
        id: gNextId++,
        speed: getRandomInt(10, 30),
        bottom: 0,
        bgColor,
        left
    }
}