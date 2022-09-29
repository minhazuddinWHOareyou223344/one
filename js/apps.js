$ (function  ()   {
    let togglerBtn = $(".myTooglerBtn");
    togglerBtn.click(function () {
      //*Primary Menu
      let menu = $("nav #myCustomNav ul");
      menu.toggleClass("menuActive");
  
      //*LOGO
      let logo = $("nav .myLogo");
      logo.toggleClass("activeLogo");
    });
    $(".myServiceSlider").slick({
      slidesToShow: 3,
      arrows: false,
      responsive: [
        {
          breakpoint: 1400,
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
          },
        },
  
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ],
    });
 
});
