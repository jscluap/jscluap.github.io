//Initialize Firebase
var config = {
    apiKey: "AIzaSyBQ8ey4bfUhXssLcjawNwZx-WYwQMICb4I",
    authDomain: "reservation-site-15aee.firebaseapp.com",
    databaseURL: "https://reservation-site-15aee.firebaseio.com",
    projectId: "reservation-site-15aee",
    storageBucket: "reservation-site-15aee.appspot.com",
    messagingSenderId: "94098594371"
  };
  firebase.initializeApp(config);
  var database = firebase.database();
  var reservationData = {};
$('.reservation-day li').on('click', function (e) {
  reservationData.day = $(this).text();
  console.log(reservationData.day);
});

$('.reservation-button').on('click', function (e){
    e.preventDefault();
    reservationData.name = $('.reservation-name').val();
    var reservationsReference = database.ref('reservations');
    reservationsReference.push(reservationData);
})

var initMap = function () {
  var map = new google.maps.Map(document.getElementById('mapDiv'), {
    center: {lat: 40.8054491, lng: -73.9654415},
    zoom: 8
  });
};

var getReservations = function () {
    database.ref('reservations').on('value', function (results) {
      var allReservations = results.val();
      $('.reservations-list').empty();
      
      for (var reservation in allReservations) {
        var context = {
        name: allReservations[reservation].name,
        day: allReservations[reservation].day,
        reservationId: reservation
        };
      var source = $("#reservation-template").html();

      var template = Handlebars.compile(source);

      var reservationListItem = template(context);

      $('.reservation-list').append(reservationListItem);
      }
  });
};

getReservations();

