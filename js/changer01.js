var card = {
	currentSide: '',
	sides: [],
	init: function (sides) {
		this.sides = sides;
		this.currentSide = sides[0];

		return this;
	},
	draw: function(element) {
		element.innerHTML = this.currentSide;
	},
	flip: function (currentDomCard) {
		var that = this;

		return function () {
			currentIndex = that.sides.indexOf(that.currentSide);
			if (currentIndex < that.sides.length - 1) {
				that.currentSide = that.sides[currentIndex + 1]
			} else {
				that.currentSide = that.sides[0]
			}

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

// Every card with vowel has an even number on the other side

	Object.create(card).init(['A', '2']),
	Object.create(card).init(['N', '7']),
	Object.create(card).init(['3', 'P']),
	Object.create(card).init(['4', 'E'])

// If you are drinking alcohol then you must be over 18

	// Object.create(card).init(['16', '<img src="http://sonicmenu.s3.amazonaws.com/3441352823890.46749.png" />']),
	// Object.create(card).init(['25', '<img src="http://sonicmenu.s3.amazonaws.com/3441352823890.46749.png" />']),
	// Object.create(card).init(['<img src="https://blog.schneider-electric.com/wp-content/uploads/2015/08/Beer-Glass1.jpg" />', '15']),
	// Object.create(card).init(['<img src="http://sonicmenu.s3.amazonaws.com/3441352823890.46749.png" />', '22'])
]

for (var i = 0; i < cards.length; i++) {
	var currentDomCard = document.getElementsByClassName('card')[i];
	cards[i].draw(currentDomCard);
	currentDomCard.addEventListener('click', cards[i].flip(currentDomCard, cards[i]));
};