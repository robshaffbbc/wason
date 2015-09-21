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

function drawCards(cards) {
	for (var i = 0; i < cards.length; i++) {
		var currentDomCard = document.getElementsByClassName('card')[i];
		cards[i].draw(currentDomCard);
		currentDomCard.addEventListener('click', cards[i].flip(currentDomCard, cards[i]));
	};
}