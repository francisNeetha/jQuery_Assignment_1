$(document).ready(function () {
    $(".card .delBtn").click(function () {
        $(this).parents('.card').remove();
    });

    $(".card").hover(function () {
        $(this).find(".add-info").fadeIn();
    }, function () {
        $(this).find(".add-info").fadeOut();
    });
});

