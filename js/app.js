var viewModel = function() {
	this.name = ko.observable('Tobby');
	this.imgSrc = ko.observable('img/1413379559_412a540d29_z.jpg');
	this.clickCount = ko.observable(0);

	this.incrementCounter = function(){
		this.clickCount(this.clickCount() + 1);
	};
};

ko.applyBindings(new viewModel());
