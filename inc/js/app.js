// Magic. Do not touch.
// ADDS ACTIVE CLASS TO LINKS IN NAV ON SCROLL

$(document).ready(function () {
  $(window).scroll(function () {
    var y = $(this).scrollTop();
    $('.navLink').each(function (event) {
      if (y >= $($(this).attr('href')).offset().top - 40) {
        $('.navLink').not(this).removeClass('navLinkActive');
        $(this).addClass('navLinkActive');
      } else {
        $(this).removeClass('navLinkActive');
      }
    });
  });
});

// SMOOTH SCROLLING

jQuery($ => {
  // The speed of the scroll in milliseconds
  const speed = 1000;

$('a[href*="#"]')
  .filter((i, a) => a.getAttribute('href').startsWith('#') || a.href.startsWith(`${location.href}#`))
  .unbind('click.smoothScroll')
  .bind('click.smoothScroll', event => {
    const targetId = event.currentTarget.getAttribute('href').split('#')[1];
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      event.preventDefault();
      $('html, body').animate({ scrollTop: $(targetElement).offset().top }, speed);
    }
  });
});
