/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/** ******  left menu  *********************** **/
$(function () {
    $('#sidebar-menu li ul').slideUp();
    $('#sidebar-menu li').removeClass('active');
	$('.cc-subMenuHover').hide();

    $('#sidebar-menu li').on('click touchstart', function() {
        var link = $('a', this).attr('href');

        if(link) { 
            window.location.href = link;
        } else {
            if ($(this).is('.active')) {
                $(this).removeClass('active');
                $('ul', this).slideUp();
            } else {
                $('#sidebar-menu li').removeClass('active');
                $('#sidebar-menu li ul').slideUp();
                
                $(this).addClass('active');
                $('ul', this).slideDown();
            }
        }
    });

    $('#menu_toggle').click(function () {
        if ($('body').hasClass('nav-md')) {
            $('body').removeClass('nav-md').addClass('nav-sm');
			$('.nav-menu-search').removeClass('col-md-8 col-sm-8');
			$('.nav-menu-search').addClass('col-md-6 col-sm-5');
			$('.nav-menu-logo').show();
            $('.left_col').removeClass('scroll-view').removeAttr('style');
            $('.sidebar-footer').hide();
			$('.cc-mainMenu').hide();
			$('.cc-subMenuHover').show();

            if ($('#sidebar-menu li').hasClass('active')) {
                $('#sidebar-menu li.active').addClass('active-sm').removeClass('active');
            }
        } else {
            $('body').removeClass('nav-sm').addClass('nav-md');
			$('.nav-menu-search').removeClass('col-md-6 col-sm-5');
			$('.nav-menu-search').addClass('col-md-8 col-sm-8');
			$('.nav-menu-logo').hide();
            $('.sidebar-footer').show();
			$('.cc-mainMenu').show();
			$('.cc-subMenuHover').hide();

            if ($('#sidebar-menu li').hasClass('active-sm')) {
                $('#sidebar-menu li.active-sm').addClass('active').removeClass('active-sm');
            }
        }
    });
});

/* Sidebar Menu active class */
$(function () {
    var url = window.location;
    $('#sidebar-menu a[href="' + url + '"]').parent('li').addClass('current-page');
    $('#sidebar-menu a').filter(function () {
        return this.href == url;
    }).parent('li').addClass('current-page').parent('ul').slideDown().parent().addClass('active');
});

/** ******  /left menu  *********************** **/
/** ******  sidebar height flexible  *********************** **/
//$(".sidebar").css("min-height", $(window).height());
//$(window).resize(function () {
//    $(".sidebar").css("min-height", $(window).height());
//});
/** ******  /sidebar height flexible  *********************** **/


