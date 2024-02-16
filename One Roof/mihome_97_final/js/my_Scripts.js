$(document).ready(function() {
    $("#sidenav01 a").on('click', '.icon__settings', function(event) {
        event.preventDefault();
        var $settingPanel = $(this).parent().siblings('.menu__popup-menu');
        $(this).parent().parent().siblings().find('.menu__popup-menu').removeClass("active")
        var $subMenus = $('.branch .collapse').addClass("hide");
        setTimeout(function() {
            $('.branch .collapse').removeClass("hide");
            $('.branch .collapse.in').removeClass("in");
        }, 1000);
        $settingPanel.toggleClass('active')
    });
    /* Dashboard icons functionality Down Arrow, Full Page, Close Icon Start */
    $(".weekShowHideClick").click(function() {
        $(".weekShowHide").slideToggle(1000);
    });
    $(".weekHideClick").click(function() {
        $(".weekHide").hide(1000);
    });
    $(".previousweekShowHideClick").click(function() {
        $(".previousweekShowHide").slideToggle(1000);
    });
    $(".previousweekHideClick").click(function() {
        $(".previousweekHide").hide(1000);
    });
    $(".activityShowHideClick").click(function() {
        $(".activityShowHide").slideToggle(1000);
    });
    $(".activityHideClick").click(function() {
        $(".activityHide").hide(1000);
    });
    $(".categoryShowHideClick").click(function() {
        $(".categoryShowHide").slideToggle(1000);
    });
    $(".categoryHideClick").click(function() {
        $(".categoryHide").hide(1000);
    });
    $(".monthShowHideClick").click(function() {
        $(".monthShowHide").slideToggle(1000);
    });
    $(".monthHideClick").click(function() {
        $(".monthHide").hide(1000);
    });
    $(".ValueShowHideClick").click(function() {
        $(".ValueShowHide").slideToggle(1000);
    });
    $(".ValueHideClick").click(function() {
        $(".ValueHide").hide(1000);
    });
    $('.weekExpand').click(function() {
        var row = $(this).parents('.weekExpandContent').html();
        var newRow = $(this).parents('.weekExpandContent').clone();
        $('#weekExpandModal .modal-body').html(newRow);
        $('#weekExpandModal').modal();
    });
    $('.activityExpand').click(function() {
        var row = $(this).parents('.activityExpandContent').html();
        var newRow = $(this).parents('.activityExpandContent').clone();
        $('#activityExpandModal .modal-body').html(newRow);
        $('#activityExpandModal').modal();
    });
    $('.categoryExpand').click(function() {
        var row = $(this).parents('.categoryExpandContent').html();
        var newRow = $(this).parents('.categoryExpandContent').clone();
        $('#categoryExpandModal .modal-body').html(newRow);
        $('#categoryExpandModal').modal();
    });
    $('.monthExpand').click(function() {
        var row = $(this).parents('.monthExpandContent').html();
        var newRow = $(this).parents('.monthExpandContent').clone();
        $('#monthExpandModal .modal-body').html(newRow);
        $('#monthExpandModal').modal();
    });
    $('.valueExpand').click(function() {
        var row = $(this).parents('.valueExpandContent').html();
        var newRow = $(this).parents('.valueExpandContent').clone();
        $('#valueExpandModal .modal-body').html(newRow);
        $('#valueExpandModal').modal();
    });
    /* Dashboard icons functionality Down Arrow, Full Page, Close Icon End */
});