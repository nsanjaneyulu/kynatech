$(document).on('click', '.browse', function() {
    var file = $(this).parent().parent().parent().find('.file');
    file.trigger('click');
});
$(document).on('change', '.file', function() {
    $(this).parent().find('.form-control').val($(this).val().replace(/C:\\fakepath\\/i, ''));
});
$(document).ready(function() {

    $('.multi-field-wrapper').each(function() {
        var $wrapper = $('.multi-fields', this);
        $(".add-field", $(this)).click(function(e) {
            $('.multi-field:first-child', $wrapper).clone(true).appendTo($wrapper).find('input').val('').focus();
        });
        $('.multi-field .remove-field', $wrapper).click(function() {
            if ($('.multi-field', $wrapper).length > 1)
                $(this).parents('.multi-field').remove();
        });
    });
    $('.multi-field-wrapper_BestDealer_Home').each(function() {
        var $wrapper = $('.multi-fields_BestDealer_Home', this);
        $(".add-field_BestDealer_Home", $(this)).click(function(e) {
            $('.multi-field_BestDealer_Home:first-child', $wrapper).clone(true).appendTo($wrapper).find('input').val('').focus();
        });
        $('.multi-field_BestDealer_Home .remove-field_BestDealer_Home', $wrapper).click(function() {
            if ($('.multi-field_BestDealer_Home', $wrapper).length > 1)
                $(this).parents('.multi-field_BestDealer_Home').remove();
        });
    });
    $('.multi-field-wrapper_BestDealer_AboutUs').each(function() {
        var $wrapper = $('.multi-fields_BestDealer_AboutUs', this);
        $(".add-field_BestDealer_AboutUs", $(this)).click(function(e) {
            $('.multi-field_BestDealer_AboutUs:first-child', $wrapper).clone(true).appendTo($wrapper).find('input').val('').focus();
        });
        $('.multi-field_BestDealer_AboutUs .remove-field_BestDealer_AboutUs', $wrapper).click(function() {
            if ($('.multi-field_BestDealer_AboutUs', $wrapper).length > 1)
                $(this).parents('.multi-field_BestDealer_AboutUs').remove();
        });
    });


});