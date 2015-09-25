var card = {
	currentIndex: 0,
	sides: [],
	init: function (sides) {
		this.sides = sides;
		this.currentIndex = 0;

		return this;
	},
	draw: function(element) {
		element.innerHTML = this.sides[this.currentIndex];
	},
	flip: function (element) {
		var that = this;

		return function () {
			console.log(that.sides);
			if (that.currentIndex < that.sides.length - 1) {
				that.currentIndex += 1;
			} else {
				that.currentIndex = 0;
			}

			that.draw(element);
			that.postFlip();
		}
	},
	postFlip: function() {}
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
		var element = document.getElementsByClassName('card')[i];
		cards[i].draw(element);
		element.addEventListener('click', cards[i].flip(element));
	};
}