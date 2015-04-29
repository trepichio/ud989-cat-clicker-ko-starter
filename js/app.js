var cat = function (data) {
	this.name = ko.observable(data.name);
	this.imgSrc = ko.observable(data.imgSrc);
	this.clickCount = ko.observable(data.clickCount);
	this.levelCount = ko.observable(data.levelCount);
	this.levels = [
		'newborn','infant','teen','adult','old','very old','IT SHOULD BE probably dead','shit! this cat is immortal!'
	];
	this.level = ko.computed(function(){
		var result = this.levels[this.levelCount()];
		if (this.clickCount() % 10 == 0 && this.levelCount() < this.levels.length - 1) {
			this.levelCount(this.levelCount()+1);
		}
		return result;

	},this);

	this.nicknames = ko.observableArray(data.nicknames);
};

var viewModel = function() {
	var self = this;
	self.currentCat = ko.observable(new cat({
		name : 'Tobby',
		imgSrc :'img/1413379559_412a540d29_z.jpg',
		clickCount : 0,
		levelCount : 0,
		nicknames : ['Kitty', 'Tob', 'Kat']
	}));
	self.incrementCounter = function(){
		self.currentCat().clickCount(self.currentCat().clickCount() + 1);
	};


};

ko.applyBindings(new viewModel());
