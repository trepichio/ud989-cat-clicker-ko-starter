var viewModel = function() {
	this.name = ko.observable('Tobby');
	this.imgSrc = ko.observable('img/1413379559_412a540d29_z.jpg');
	this.clickCount = ko.observable(0);
	this.levelCount = ko.observable(0);
	this.levels = [
		'newborn','infant','teen','adult','old','very old','IT SHOULD BE probably dead','shit! this cat is immortal!'
	];
	this.level = ko.computed(function(){
		console.log(this.levelCount());
		var result = this.levels[this.levelCount()];
		if (this.clickCount() % 10 == 0 && this.levelCount() < this.levels.length - 1) {
			this.levelCount(this.levelCount()+1);
		}
		return result;

	},this);

	this.incrementCounter = function(){
		this.clickCount(this.clickCount() + 1);
	};

	this.nicknames = ko.observableArray([
		'Kitty', 'Tob', 'Kat'
	]);
};

ko.applyBindings(new viewModel());
