var Card = function (front, back) {
	this.currentSide = front;
	this.back = back;
	this.front = front;
	this.flip = function () {
		this.currentSide = (this.currentSide == this.front) ?
			this.back : this.front;
	};
	this.draw = function(element) {
		element.innerHTML = this.currentSide;
	};
}

var change = function(currentDomCard, card) {
	return function() {
		card.flip();
		card.draw(currentDomCard);
	}
}

var cards = [
	new Card('A', '2'),
	new Card('N', '7'),
	new Card('3', 'P'),
	new Card('4', 'E')
]

for (var i = 0; i < cards.length; i++) {
	var currentDomCard = document.getElementsByClassName('card')[i];
	cards[i].draw(currentDomCard);
	currentDomCard.addEventListener('click', change(currentDomCard, cards[i]));
};