var myCenter = new google.maps.LatLng(10.87846, 106.80664);

function initialize() {
  var mapProp = {
    center: myCenter,
    zoom: 12,
    scrollwheel: true,
    draggable: true,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };

  var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);

  var marker = new google.maps.Marker({
    position: myCenter,
  });

  marker.setMap(map);
}

google.maps.event.addDomListener(window, 'load', initialize);


$(document).ready(function () {
  $('.owl-carousel').owlCarousel({
    loop: true,
    margin: 30,
    nav: true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      900: {
        items: 3
      }
    }
  });
});

function checkForm(){
  var name = document.getElementById("name");
  var phone = document.getElementById("phone");
  var len = phone.value.length;
  var date = document.getElementById("date");
  var now = new Date()
  var note = document.getElementById("note");
  var tagP = document.getElementById("checkValue");
  var checkName = /^[A-Za-z0-9 ]+$/;
  var checkPhone = /^[0-9]+$/;
  var check = 1;
  if (!name.value.match(checkName)){
    tagP.innerHTML = "Please enter your right name";
    check = 0;
  }
  if (!phone.value.match(checkPhone) || 10>len || 11<len){
    tagP.innerHTML = "Please enter your right phone";
    check = 0;
  }
  var checkDate = date.value.split('-');
  var yy = parseInt(checkDate[0]);
  var mm = parseInt(checkDate[1]);
  var dd = parseInt(checkDate[2]);
  var yyc = parseInt(now.getFullYear());
  var mmc = parseInt(now.getMonth())+1;
  var ddc = parseInt(now.getDate());
  // note.value = `${yy}, ${yyc}, ${mm}, ${mmc}, ${dd}, ${ddc}`;
  if (yy<yyc || (yy==yyc && mm<mmc) || (yy==yyc && mm==mmc && dd<ddc)){
    tagP.innerHTML = "Please enter a valid date";
    check = 0;
  }
  if (check==1){
    name.value = "";
    phone.value = "";
    date.value = "";
    note.value = "";
    tagP.style.display = "none";
    alert("We will call you later!!!");
    return false;
  }
  else{
    tagP.style.display = "block";
    tagP.style.color = "red";
    return false;
  }
}


$(window).scroll(function(){
  if($(window).scrollTop() >= 200) {
    $('.button_scroll2top').show();
  } else {
    $('.button_scroll2top').hide();
  }
});

function page_scroll2top(){
  $('html,body').animate({
    scrollTop: 0
    }, 'fast');
}


$(document).ready(function(){
  $(window).scroll(function(){
    $(".slideanim").each(function(){
      var pos = $(this).offset().top;
      var winTop = $(window).scrollTop();
      if (pos< winTop+800){
        $(this).addClass("slide");
      }
    });
  });
});


