var initialCats = [
	{
		name : 'Tobby',
		imgSrc :'img/1413379559_412a540d29_z.jpg',
		clickCount : 0,
		levelCount : 0,
		nicknames : ['TabTab', 'T-Bone', 'Mr. T']
	},
	{
		name : 'Stuart',
		imgSrc : 'img/22252709_010df3379e_z.jpg',
		clickCount : 0,
		levelCount : 0,
		nicknames : ['Stu']
	},
	{
		name : 'Galileo',
		imgSrc :'img/4154543904_6e2428c421_z.jpg',
		clickCount : 0,
		levelCount : 0,
		nicknames : ['Gaa']
	},
	{
		name : 'José',
		imgSrc :'img/434164568_fea0ad4013_z.jpg',
		clickCount : 0,
		levelCount : 0,
		nicknames : ['Zé']
	},
	{
		name : 'Sofia',
		imgSrc :'img/9648464288_2516b35537_z.jpg',
		clickCount : 0,
		levelCount : 0,
		nicknames : ['Soffi']
	},
	{
		name : 'Pink',
		imgSrc :'img/cat_1.jpg',
		clickCount : 0,
		levelCount : 0,
		nicknames : ['Tigger']
	},

];

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

	self.catList = ko.observableArray([]);

	initialCats.forEach(function(pet){
		self.catList.push( new cat(pet) );	
	});

	self.currentCat = ko.observable(self.catList()[0]);
	
	self.incrementCounter = function(){
		self.currentCat().clickCount(self.currentCat().clickCount() + 1);
	};

	self.selectCat = function(cat){
		self.currentCat(cat);
	};


};

ko.applyBindings(new viewModel());
