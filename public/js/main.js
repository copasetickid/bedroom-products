var model = {
	currentBed: null,
	fetchBeds: function() {
		return $.ajax({url: '/products'})
	}
}

var controller = {
	init: function() {
		console.log('Hello')
		this.getbeds();
	},
	getbeds: function() {
		var beds = model.fetchBeds();
		beds.success(function(data) {
		
		});
	}
}


controller.init();