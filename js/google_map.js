$(document).ready(function(){
var map;

function initMap() {

    var checkWidth = $(window).width();
    var mapCenter = checkWidth < 725 ? {lat: 47.293972, lng:7.872369} : {lat: 47.293972, lng:7.872369};

    map = new google.maps.Map(document.getElementById('map'), {
        center: mapCenter,
        zoom: 13,
        disableDefaultUI:!("ontouchend" in document),
        scrollwheel: true
    });
    new google.maps.Marker({
        position: {lat: 47.293972, lng:7.872369},
        map: map
        //icon:'images/map_icon.png',

    });
    console.log(2342342342);


};

    var centerMap =  new google.maps.LatLng(47.293972, 7.872369);
    $('.map').click(function (e) {
        e.preventDefault();
        $("#map").css("position", 'fixed').
        css('opacity',1).
        css('z-index',1).
        css('top', 0).
        css('left', 0).
        css("width", '100%').
        css("height", '100%');
        google.maps.event.trigger(map, 'resize');
        $('#exit-full-screen').addClass('active');
        map.setCenter(centerMap);
        return false;
    });
    $('#exit-full-screen').click(function(){
        $(this).removeClass('active');
        $("#map").css("position", 'relative').
        css('opacity',0.01).
        css('top', 0);
        return false;
    });


google.maps.event.addDomListener(window, 'load', initMap);
})