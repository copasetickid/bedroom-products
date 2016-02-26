var bedTemplate = require('../templates/bed.jade');

var bedModel = {
  currentBed: null,
  fetchBeds: function() {
    return $.ajax({url: '/products'})
  }
}

var bedController = {
  init: function() {
    console.log('Hello')
    this.getbeds();
  },
  getbeds: function() {
    var beds = bedModel.fetchBeds();
    beds.success(function(data) {
      console.log(data);
      bedView.displayBeds(data);
    });
  }
}

var bedView = {
  displayBeds: function(beds) {

    $.each(beds, function(index, value) {

      var bed = bedTemplate({
        name: value.name,
        description: value.description,
        price: value.price
      });

      $('.bed-containers').append(bed);



    });
  }
}


bedController.init();
