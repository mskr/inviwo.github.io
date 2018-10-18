jQuery(document).ready(function($) {



    /* ======= Scrollspy ======= */
    $('body').scrollspy({ target: '#header', offset: 400});

    /* ======= Fixed header when scrolled ======= */

    $(window).bind('scroll', function() {
         if ($(window).scrollTop() > 50) {
             $('#header').addClass('navbar-fixed-top');
         }
         else {
             $('#header').removeClass('navbar-fixed-top');
         }
    });

    /* ======= ScrollTo ======= */
    $('a.scrollto').on('click', function(e){

        //store hash
        var target = this.hash;

        e.preventDefault();

		$('body').scrollTo(target, 800, {offset: -70, 'axis':'y', easing:'easeOutQuad'});
        //Collapse mobile menu after clicking
		if ($('.navbar-collapse').hasClass('in')){
			$('.navbar-collapse').removeClass('in').addClass('collapse');
		}

	});

    $('.navbar-nav .nav-item').click(function(){
        $('.navbar-nav .nav-item.active').removeClass('active');
        $(this).addClass('active');
    });

    $('.windowsdownload').hide();
    $('.macosdownload').hide();
    $('.linuxdownload').hide();
    if (navigator.appVersion.indexOf("Win")!=-1){
        $('#windows').button('toggle');
        $('.windowsdownload').show();
    }
    if (navigator.appVersion.indexOf("Mac")!=-1) {
        $('#mac').button('toggle');
        $('.macosdownload').show();
    }
    if (navigator.appVersion.indexOf("X11")!=-1) {
        $('#linux').button('toggle');
        $('.linuxdownload').show();
    }
    if (navigator.appVersion.indexOf("Linux")!=-1) {
        $('#linux').button('toggle');
        $('.linuxdownload').show();
    }

});

// Get the image and insert it inside the modal - use its "alt" text as a caption

function openModal(elmnt){
    disableScroll();
    var hormodal = document.getElementById("galleryModal");
    hormodal.style.display = "block";
    var hormodalImg = document.getElementById("horizontalImage");
    hormodalImg.src = elmnt.src;
}

var keys = {37: 1, 38: 1, 39: 1, 40: 1};

function preventDefault(e) {
  e = e || window.event;
  if (e.preventDefault)
      e.preventDefault();
  e.returnValue = false;
}

function preventDefaultForScrollKeys(e) {
    if (keys[e.keyCode]) {
        preventDefault(e);
        return false;
    }
}

function disableScroll() {
  if (window.addEventListener) // older FF
      window.addEventListener('DOMMouseScroll', preventDefault, false);
  window.onwheel = preventDefault; // modern standard
  window.onmousewheel = document.onmousewheel = preventDefault; // older browsers, IE
  document.onkeydown  = preventDefaultForScrollKeys;
}

function enableScroll() {
    if (window.removeEventListener)
        window.removeEventListener('DOMMouseScroll', preventDefault, false);
    window.onmousewheel = document.onmousewheel = null;
    window.onwheel = null;
    document.onkeydown = null;
}

function checkOS(button) {

    $('.windowsdownload').hide();
    $('.macosdownload').hide();
    $('.linuxdownload').hide();

    if (button == "windows"){
        $('#windows').button('toggle');
        $('.windowsdownload').show();
    }
    if (button == "macos") {
        $('#mac').button('toggle');
        $('.macosdownload').show();
    }
    if (button == "linux") {
        $('#linux').button('toggle');
        $('.linuxdownload').show();
    }
    if (button == "linux") {
        $('#linux').button('toggle');
        $('.linuxdownload').show();
    }
}
