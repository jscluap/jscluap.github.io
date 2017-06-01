$('#reservation').on('click', function (e){
	e.preventDefault();
	$('#form').show();
});
$('#confirm').on('click', function (e) {
	e.preventDefault();
	var userInput = {name: $('#name').val(), day: $('#day').val()};
	var source = $('#tableItem').html();
	var template = Handlebars.compile(source);
	var newTableItemHTML = template(userInput);
	$('#table tbody').append(newTableItemHTML);
});

var initMap = function () {
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 40.8054491, lng: -73.9654415},
    zoom: 8
  });
}
