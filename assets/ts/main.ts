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

$(".remodal .login-form").validate({
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

$(".remodal .registration-form").validate({
    errorElement: "div",
    errorPlacement: function (error, element) {
        element.parent().append(error);
    },
    rules: {
        name: {
            required: true,
        },
        text: {
            required: true,
        },
        email: {
            required: true,
            email: true,
        },
        password: {
            required: true,
        },
        phone: {
            required: true,
        },
    },
    messages: {
        name: {
            required: "*некорректно введенные данные",
        },
        text: {
            required: "*некорректно введенные данные",
        },
        email: {
            required: "*некорректно введенные данные",
        },
        password: {
            required: "*некорректно введенные данные",
        },
        phone: {
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
    dots: false,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: "linear",
});

$(".phone-input").inputmask("+38 (999) 999-99-99");
