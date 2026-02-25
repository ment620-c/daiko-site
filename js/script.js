$(function(){

  $(".faq__q").on("click", function(){

    var parent = $(this).parent();

    // 他を閉じる場合（アコーディオン型）
    $(".faq__item").not(parent).removeClass("active");
    $(".faq__item").not(parent).find(".faq__a").slideUp();

    // 開閉
    parent.toggleClass("active");
    parent.find(".faq__a").slideToggle();

  });

});