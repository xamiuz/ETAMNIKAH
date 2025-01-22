$(document).ready(function () {
    "use strict";
    //getsource();

    setTimeout(function () {
        $(".ani-quo").addClass("ani-quo-act")
    }, 7000);
    setTimeout(function () {
        $(".ani-quo").removeClass("ani-quo-act")
    }, 14000);
    setTimeout(function () {
        $(".btn-ser-need-ani").fadeIn();
    }, 15000);

    //TOP MENU OPEN AND CLOSE
    $('.menu').on('click', function () {
        //$('.pop-menu').fadeIn();
        $('.pop-menu').toggleClass("ani");
        $(this).toggleClass("ani");
    });
    $('.clopme').on('click', function () {
        //$('.pop-menu').fadeOut();
        $('.pop-menu').removeClass("ani");
        $('.menu').removeClass("ani");
    });

    $('.ani-quo, .btn-ser-need-ani').on('click', function () {
        $('.ani-quo-form').addClass('ani-quo-form-act');
    });
    $('.ani-req-clo').on('click', function () {
        $('.ani-quo-form').removeClass('ani-quo-form-act');
    });
    // $('.qvv').on('click', function() {
    //     $('.list-qview').addClass('qview-show');
    // });
    // $('.list-qview').on('mouseleave', function() {
    //     $('.list-qview').removeClass('qview-show');
    // });
    $('.clo-list').on('click', function () {
        $('.list-qview').removeClass('qview-show');
    });
    $('.mob-me-ic').on('click', function () {
        $('.mob-me-all').addClass('mobmenu-show');
    });
    $('.mob-me-clo').on('click', function () {
        $('.mob-me-all').removeClass('mobmenu-show');
    });
    $('.ll-1').on('click', function () {
        $('.log-1').slideDown();
        $('.log-2, .log-3').slideUp();
    });
    $('.ll-2').on('click', function () {
        $('.log-2').slideDown();
        $('.log-1, .log-3').slideUp();
    });
    $('.ll-3').on('click', function () {
        $('.log-3').slideDown();
        $('.log-1, .log-2').slideUp();
    });
    //FILTER ON ALL LISTING PAGE - MOBILE VIEW ONLY
    $('.fil-mob').on('click', function () {
        $('.fil-mob-view').addClass("fil-mmob-act");
    });
    $('.fil-mob-clo').on('click', function () {
        $('.fil-mob-view').removeClass("fil-mmob-act");
    });
    //ALL LISTING GRID AND LIST VIEW CHANGE
    $('.vfilter i').on('click', function () {
        $('.vfilter i').removeClass('act')
        $(this).addClass('act')
    });
    $('.ic1').on('click', function () {
        $(".list-map").hide();
        $(".all-list-bre, .all-listing").show();
        $('.all-list-sh').removeClass('cview3');
        $('.all-list-sh').addClass('cview1');
    });
    $('.ic2').on('click', function () {
        $(".list-map").hide();
        $(".all-list-bre, .all-listing").show();
        $('.all-list-sh').removeClass('cview1');
        $('.all-list-sh').removeClass('cview3');
    });
    $('.ic3').on('click', function () {
        $(".all-list-bre, .all-listing").hide();
        $(".list-map").show();
    });
    //NOTIFICATION POPUP SHOW AND HIDE
    $('.btn-sure').on('click', function () {
        $('.noti-sure').addClass('cnoti-show');
        setTimeout(function () {
            $('.noti-sure').removeClass('cnoti-show');
        }, 5000);
    });
    setTimeout(function () {
        $('.status_message, .log-suc').fadeOut();
    }, 3000);
    $('.no').on('click', function () {
        $('.noti-sure').removeClass('cnoti-show');
    });
    //HOW TO TAB OPTIONS
    $('.how-to-coll li h4').on('click', function () {
        $('.how-to-coll li h4').removeClass('colact');
        $('.how-to-coll li div').slideUp();
        $(this).addClass('colact');
        $(this).next("div").slideDown();
    });
    //CREATE DUPLICATE LISTING
    $('.cre-dup-btn').on('click', function () {
        $('.cre-dup-form').slideDown();
    });
    //DASHBOARD PROFILE OPEN AND CLOSE
    $('.al').on('mouseenter', function () {
        $('.db-menu').stop().slideDown();
        $('.ud').addClass('op1');
    });
    $('.al').on('mouseleave', function () {
        $('.db-menu').stop().slideUp();
        $('.ud').removeClass('op1');
    });
    $('.dropdown-menu li').on('click', function () {
        var getValue = $(this).text();
        $('.dropdown-select').text(getValue);
        //alert(getValue);
    });
    //CREATE USER - SHOW USER TYPE SECTION
    $(".ca-check-plan").on('change', function () {
        if ($(this).val() == "Service provider") {
            $('.ca-sh-plan').slideDown();
        }
        else {
            $('.ca-sh-plan').slideUp();
        }
    });
    //USER PROFILE TAB
    $('.us-pro-nav ul li span').on('click', function () {
        $('.us-pro-nav ul li span').removeClass('act');
        $(this).addClass('act');
    });
    $('.us-pro-nav ul li:nth-child(1) span').on('click', function () {
        $('.us-ppg-com').slideDown();
    });
    $('.us-pro-nav ul li:nth-child(2) span').on('click', function () {
        $('.us-ppg-com').slideUp();
        $('.us-ppg-listings').slideDown();
    });
    $('.us-pro-nav ul li:nth-child(3) span').on('click', function () {
        $('.us-ppg-com').slideUp();
        $('.us-ppg-blog').slideDown();
    });
    $('.us-pro-nav ul li:nth-child(4) span').on('click', function () {
        $('.us-ppg-com').slideUp();
        $('.us-ppg-event').slideDown();
    });
    $('.us-pro-nav ul li:nth-child(5) span').on('click', function () {
        $('.us-ppg-com').slideUp();
        $('.us-ppg-follow').slideDown();
    });
    //SERVICES LIST ADD - APPEND
    $(".lis-ser-add-btn").on('click', function () {
        $(".add-list-ser ul li:last-child").after('<li><div class="row"> <div class="col-md-6"> <div class="form-group"> <label>Service name :</label>  <input type="text" name="service_id[]" class="form-control" placeholder="Ex: Plumbile"> </div> </div> <div class="col-md-6"> <div class="form-group"> <label>Choose profile image</label> <input type="file" name="service_image[]" class="form-control"> </div> </div> </div></li>');
    });
    //SERVICES OFFER LIST REMOVE - APPEND
    $(".lis-ser-rem-btn").on('click', function () {
        $(".add-list-ser ul li:last-child").remove();
    });
    //SPECIAL OFFER LIST ADD - APPEND
    $(".lis-add-off").click(function () {
        $(".add-list-off ul li:last-child").after('<li><div class="row"> <div class="col-md-6"> <div class="form-group"> <input type="text" name="service_1_name[]" class="form-control" placeholder="Offer name *"> </div> </div> <div class="col-md-6"> <div class="form-group"> <input type="text" class="form-control" name="service_1_price[]" onkeypress="return isNumber(event)" placeholder="Price"> </div> </div> </div><div class="row"> <div class="col-md-12"> <div class="form-group"> <textarea class="form-control" name="service_1_detail[]" placeholder="Details about this offer"></textarea> </div> </div> </div><div class="row"> <div class="col-md-12"> <div class="form-group"> <label>Choose offer image</label> <input type="file" name="service_1_image[]" class="form-control"> </div> </div> </div><div class="row"> <div class="col-md-12"> <div class="form-group"> <input type="text" name="service_1_view_more[]" class="form-control" placeholder="View More Link"></div></div></div></li>');
    });
    //SPECIAL OFFER LIST REMOVE - APPEND
    $(".lis-add-rem").on('click', function () {
        $(".add-list-off ul li:last-child").remove();
    });
    //SPECIAL OFFER LIST ADD - APPEND
    $(".lis-add-oad").on('click', function () {
        $(".add-lis-oth ul li:last-child").after('<li> <div class="row"> <div class="col-md-5"> <div class="form-group"> <input type="text" name="listing_info_question[]" class="form-control" placeholder="Type your information"> </div> </div><div class="col-md-2"> <div class="form-group"> <i class="material-icons">arrow_forward</i> </div> </div> <div class="col-md-5"> <div class="form-group"> <input type="text" name="listing_info_answer[]" class="form-control" placeholder="yes"> </div> </div> </div> </li>');
    });
    //SPECIAL OFFER LIST REMOVE - APPEND
    $(".lis-add-ore").on('click', function () {
        $(".add-lis-oth ul li:last-child").remove();
    });
    //MOBILE MENU - DASHBOARD BOARD MENU SHOW
    $(".mv-pro").on('click', function () {
        $(".mv-pro-menu").slideToggle();
    });
    //BOOTSTRAP TOOL TIP
    $('[data-toggle="tooltip"]').tooltip();

    //PRODUCT SPECIFICATION LIST ADD - APPEND
    $(".prod-add-oad").on('click', function () {
        $(".add-prod-oth ul li:last-child").after('<li> <div class="row"> <div class="col-md-5"> <div class="form-group"> <input type="text" name="product_info_question[]" class="form-control" placeholder="Type your information"> </div> </div><div class="col-md-2"> <div class="form-group"> <i class="material-icons">arrow_forward</i> </div> </div> <div class="col-md-5"> <div class="form-group"> <input type="text" name="product_info_answer[]" class="form-control" placeholder="yes"> </div> </div> </div> </li>');
    });
    //PRODUCT SPECIFICATION LIST REMOVE - APPEND
    $(".prod-add-ore").on('click', function () {
        $(".add-prod-oth ul li:last-child").remove();
    });

    //PRODUCT HIGHLIGHTS LIST ADD - APPEND
    $(".prod-add-high-oad").on('click', function () {
        $(".add-prod-high-oth ul li:last-child").after('<li> <div class="row"> <div class="col-md-12"> <div class="form-group"> <input type="text" name="product_highlights[]" class="form-control" placeholder="Type your highlights"> </div> </div> </div> </li>');
    });
    //PRODUCT HIGHLIGHTS LIST REMOVE - APPEND
    $(".prod-add-high-ore").on('click', function () {
        $(".add-prod-high-oth ul li:last-child").remove();
    });

    //VIDEO LIST ADD - APPEND
    $(".lis-add-oadvideo").on('click', function () {
        $(".add-list-map ul li:last-child").after('<li> <div class="row"> <div class="col-md-12"> <div class="form-group"> <textarea id="listing_video" name="listing_video[]" class="form-control" placeholder="Paste Your Youtube Url here"></textarea> </div> </div> </div> </li>');
    });
    //VIDEO LIST REMOVE - APPEND
    $(".lis-add-orevideo").on('click', function () {
        $(".add-list-map ul li:last-child").remove();
    });

    //ENQUIRY AND REVIEW LIKE
    // $(".enq-sav i").click(function(){
    //   $(this).toggleClass('sav-act');
    // });

    //ENQUIRY AND REVIEW LIKE
    // $(".ldelik").click(function(){
    //   $(this).toggleClass('sav-act');
    // });

    //INPUT FOCUS TOOL TIP SHOW
    $(".form-group input, .form-group textarea").focus(function(){
        $(this).siblings(".inp-ttip").fadeIn();
    });
    $(".form-group input, .form-group textarea").blur(function(){
        $(this).siblings(".inp-ttip").fadeOut();
    });
    $(".form-group input, .form-group textarea").mouseleave(function(){
        $(this).siblings(".inp-ttip").fadeOut();
    });

    //MOBILE SEARCH SHOW
    $(".mob-sear").on('click', function () {
        $(".top-ser").toggleClass("top-ser-act");;
    });

    //ADS TOTAL DAYS CALCULATION
    $("#stdate, #endate, #adposi").change(function () {
        var firstDate = $("#stdate").val();
        var secondDate = $("#endate").val();
        var millisecondsPerDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
        var startDay = new Date(firstDate);
        var endDay = new Date(secondDate);
        var diffDays = Math.abs((startDay.getTime() - endDay.getTime()) / (millisecondsPerDay));
        $(".ad-tdays").text(diffDays);
        $("#ad_total_days").val(diffDays);
        var adpocost = $('#adposi').find('option:selected', this).attr('mytag');
        $(".ad-pocost").text(adpocost);
        $("#ad_cost_per_day").val(adpocost);
        var totcost = diffDays * adpocost;
        $(".ad-tcost").text(totcost);
        $("#ad_total_cost").val(totcost);
    });

    //ADS TOTAL DAYS CALCULATION
    $("#start-date, #end-date").change(function () {
        var firstDate = $("#start-date").val();
        var secondDate = $("#end-date").val();
        var millisecondsPerDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
        var startDay = new Date(firstDate);
        var endDay = new Date(secondDate);
        var diffDays = Math.abs((startDay.getTime() - endDay.getTime()) / (millisecondsPerDay));
        $(".ad-tdays").text(diffDays);
        $("#ad_total_days").val(diffDays);
        // var adpocost = $('#adposi').find('option:selected', this).attr('mytag');
        var adpocost = $('#adposi').val();
        $(".ad-pocost").text(adpocost);
        $("#ad_cost_per_day").val(adpocost);
        var totcost = diffDays * adpocost;
        $(".ad-tcost").text(totcost);
        $("#ad_total_cost").val(totcost);
    });

    //Buy Point Cost CALCULATION Starts

    $('#new_points').on('input', function() {
        var new_points = $("#new_points").val();
        var cost_per_point = $("#cost_per_point").val();
        var cost_symbol = $("#cost_symbol").val();
        var totcost = new_points * cost_per_point;
        var button_msg = 'Click To Pay '+cost_symbol + totcost;
        $("#buy_points_submit").text(button_msg);
        $("#all_cost").val(totcost);
    });

    //Buy Point Cost CALCULATION Ends

    //COPY RIGHTS YEAR
    $('#cry').text("2050");

    //PRE LOADING
    $('#status').fadeOut();
    $('#preloader').delay(350).fadeOut('slow');
    $('body').delay(350).css({
        'overflow': 'visible'
    });

    //BLOG POST SEARCH - BLOG DETAIL PAGE
    $("#pg-sear").on("keyup", function () {
        var value = $(this).val().toLowerCase();
        $("#pg-resu *").filter(function () {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });
    
   
});

//GET URL SOURCE
function urlParam(name) {
    var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
    if (results == null) {
        return null;
    } else {
        return results[1] || 0;
    }
}
//URL PAREM VALUE
$("#source").val(urlParam("source"));
if (urlParam("login") == "register") {
    $('.log-1, .log-3').slideUp();
    $('.log-2').slideDown();
}
if (urlParam("login") == "forgot") {
    $('.log-1, .log-2').slideUp();
    $('.log-3').slideDown();
}
//CATEGORY FILTER ONLOAD ACTIVE
if (urlParam("features") == "trending") {
    $('.lhs-featu input:checkbox').removeAttr('checked');
    $('#trending').attr('checked', 'checked');
}

//SEARCH FUNCTION
$(function () {
    var availlistings = [
        "Rn53 themes",
        "Real estates",
        "Room rent",
        "Directory and listing",
        "Health care in new york",
        "Child specality",
        "Plumping services",
        "Care and bike services",
        "Care showrooms",
        "Bike showroom",
        "Best t-shirts for men",
        "Tution center",
        "IT training institute",
        "Ui developer training center",
        "Job openings",
        "Lifestyle shops",
        "Medicale and health care",
        "Child care hospital",
        "Univercity and colleges",
        "Trust and help center",
        "Drinking water service",
        "Travel and transport",
        "Events"
    ];
    $("#search").autocomplete({
        source: availlistings
    });
});

//CITY SEARCH
$(function () {
    var availlcity = [
        "Alexandria",
        "Aurora",
        "Austin",
        "Chennai",
        "Delhi",
        "Mumbai",
        "Bangalure",
        "Chandler",
        "Dallas",
        "Dayton",
        "Elizabeth",
        "Eugene",
        "Gilbert",
        "Houston",
        "Jackson",
        "Lincoln",
        "Madison",
        "Memphis",
        "Orlando",
        "Phoenix",
        "Savannah",
        "Warren"
    ];
    $("#city").autocomplete({
        source: availlcity
    });
});

//DATE PICKER
$(function () {
    $("#event_start_date").datepicker({
        changeMonth: true,
        changeYear: true,
        minDate: 0
    });
    $("#stdate").datepicker({
        changeMonth: true,
        changeYear: true,
        minDate: 0
    });
    $("#endate").datepicker({
        changeMonth: true,
        changeYear: true,
        minDate: 0
    });
});

$('.count1').each(function () {
    $(this).prop('Counter', 0).animate({
        Counter: $(this).text()
    }, {
        duration: 5000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
});


//HOME PAGE SEARCH - INTERNAL PAGE SEARCH
$("#select-search").on("keyup", function () {
    var value = $(this).val().toLowerCase();
    $("#tser-res li").filter(function () {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
});

//HOME PAGE SEARCH - INTERNAL PAGE SEARCH
$("#top-select-search").on("keyup", function () {
    var value = $(this).val().toLowerCase();
    $("#tser-res1 li").filter(function () {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
});

//SEARCH JS
var htmlElement = document.getElementById("res");
//SEARCH EVENTS
$(".search-field").focus(function(){
    $(".tser-res1").addClass("act");
});
$(".search-field").click(function(){
    $(".tser-res1").addClass("act");
});
$(".ad-dash").click(function(){
    $(".tser-res1").removeClass("act");
});
$(".ban-search").mouseleave(function(){
    $(".tser-res1").removeClass("act");
});

$("#top-select-search").focus(function(){
    $(".tser-res2").addClass("act");
});
$("#top-select-search").click(function(){
    $(".tser-res2").addClass("act");
});
$(".hom-top").mouseleave(function(){
    $(".tser-res2").removeClass("act");
});


$(function () {
    $('.chosen-select').chosen();
});

var li = $('#tser-res li');
var liSelected;
$(window).keydown(function(e){

    if(e.which === 40){
        if(liSelected){
            liSelected.removeClass('selected');
            next = liSelected.next();
            if(next.length > 0){
                liSelected = next.addClass('selected');
            }else{
                liSelected = li.eq(0).addClass('selected');
            }
        }else{
            liSelected = li.eq(0).addClass('selected');
        }
    }else if(e.which === 38){
        if(liSelected){
            liSelected.removeClass('selected');
            next = liSelected.prev();
            if(next.length > 0){
                liSelected = next.addClass('selected');
            }else{
                liSelected = li.last().addClass('selected');
            }
        }else{
            liSelected = li.last().addClass('selected');
        }
    }
});

$("li.selected a").keypress(function(e) {
    if (e.keyCode == 13) {
        $(this).click();
    }
});


