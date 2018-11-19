$("input[type='text']").on('focus',function() {
    $(this).parent(".ianchor").addClass("focused");
})

$("input[type='text']").on('focusout',function() {
    $(this).parent(".ianchor").removeClass("focused");
})

$("button").on('focus',function() {
    $(this).addClass("focused");
})

$("button").on('focusout',function() {
    $(this).removeClass("focused");
})