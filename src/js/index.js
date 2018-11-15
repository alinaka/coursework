import 'bootstrap';
import 'lightbox2';
import $ from 'jquery';

let coords = [59.936246, 30.321114];

ymaps.ready(init);
function init(){
    var myMap = new ymaps.Map("map", {
        center: coords,
        zoom: 15
    });

    var myPlacemark = new ymaps.Placemark(coords, { hintContent: 'Some Place', balloonContent: 'Opening Hours: 9 am - 6 pm' });

    myMap.geoObjects.add(myPlacemark);
}

$(window).on("scroll", function() {
    if($(window).scrollTop() > 100) {
        $(".header").addClass("active");
    } else {
        //remove the background property so it comes transparent again (defined in your css)
        $(".header").removeClass("active");
    }
});