$(".tabs-menu li").on("click", function () {
    const tabMenuElement = $(this).parent();

    tabMenuElement.find("li").each(function () {
        $(this).removeClass("is-active");
    });

    $(this).addClass("is-active");

    tabMenuElement
        .parent()
        .find(".tab-content")
        .each(function () {
            $(this).removeClass("is-open");
        });

    $(`.${$(this).data("idTab")}`).addClass("is-open");
});

$(".interactions span").on("click", function () {
    const sizeMenuElement = $(this).parent();

    sizeMenuElement.find("span").each(function () {
        $(this).removeClass("is-active");
    });

    $(this).addClass("is-active");
});

$(".remodal form").validate({
    errorElement: "div",
    errorPlacement: function (error, element) {
        element.parent().append(error);
    },
    rules: {
        email: {
            required: true,
            email: true,
        },
        password: {
            required: true,
        },
    },
    messages: {
        email: {
            required: "*некорректно введенные данные",
        },
        password: {
            required: "*некорректно введенные данные",
        },
    },
});

$(".stars-block .icon-star").on("click", function () {
    const index = $(this).index();
    $(this)
        .parent()
        .find(".icon-star")
        .each(function (i) {
            if (i <= index) {
                $(this).addClass("is-active");
            } else {
                $(this).removeClass("is-active");
            }
        });
});

$(".hero-slider").slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: "linear",
});
