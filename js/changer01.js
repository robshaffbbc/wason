var card = {
	currentSide: '',
	back: '',
	front: '',
	init: function (front, back) {
		this.front = front;
		this.back = back;
		this.currentSide = front;

		return this;
	},
	draw: function(element) {
		element.innerHTML = this.currentSide;
	},
	flip: function (currentDomCard) {
		var that = this;

		return function () {
			that.currentSide = (that.currentSide == that.front) ?
				that.back : that.front;
			that.draw(currentDomCard);
		}
	}
};

if (typeof Object.create !== 'function') {
	Object.create = function(o) {
		var F = function () {};
		F.prototype = o;
		return new F();
	};
}

var cards = [
	Object.create(card).init('A', '2'),
	Object.create(card).init('N', '7'),
	Object.create(card).init('3', 'P'),
	Object.create(card).init('4', 'E')
]

for (var i = 0; i < cards.length; i++) {
	var currentDomCard = document.getElementsByClassName('card')[i];
	cards[i].draw(currentDomCard);
	currentDomCard.addEventListener('click', cards[i].flip(currentDomCard, cards[i]));
};