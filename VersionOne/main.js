 var $accordion = $("#accordion");

$accordion.accordion();

$(".opener").on("click", function () {
    var $this = $(this),
        toOpen = $this.panel("data");

    $accordion.accordion("option", "active", toOpen);

    return false;
});