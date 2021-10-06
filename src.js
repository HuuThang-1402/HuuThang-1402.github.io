var myCenter = new google.maps.LatLng(10.87846, 106.80664);

function initialize() {
var mapProp = {
  center:myCenter,
  zoom:12,
  scrollwheel:true,
  draggable:true,
  mapTypeId:google.maps.MapTypeId.ROADMAP
};

var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);

var marker = new google.maps.Marker({
  position:myCenter,
});

marker.setMap(map);
}

google.maps.event.addDomListener(window, 'load', initialize);


// $(document).ready(function(){
//   $(window).scroll(function(){
//     $(".slideanim").each(function(){
//       var pos = $(this).offset().top;
//       var winTop = $(window).scrollTop();
//       if (pos< winTop+600){
//         $(this).addClass("slide");
//       }
//     });
//   });
// });

$(document).ready(function () {
  $('.owl-carousel').owlCarousel({
    loop: true,
    margin: 30,
    nav: true,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    items: 3
  });

});
