function feedback() {
  var send = $('.feedback .send input'),
      sent = $('.feedback .sent'),
      toggler = $('.feedback-toggler');

  send.on('click', function(e) {
    e.preventDefault();

    var name = $.trim($('#name').val()),
        company = $.trim($('#company').val()),
        contact = $.trim($('#contact').val());

    if (contact.length == 0) {
      alert('Пожалуйста, укажите номер телефона или адрес электронной почты')

      $('#contact').addClass('error')[0].focus();

      return false;
    }

    sent.fadeIn(300);

    $.ajax({
        url: "https://formspree.io/oootdm03@gmail.com",
        method: "POST",
        data: {message: "Ваше имя: " + name + "\nНазвание компании: " + company + "\nНомер телефона или адрес электронной почты: " + contact},
        dataType: "json"
    });
  })

  toggler.on('click', function(e) {
    e.preventDefault();

    var feedbackPosition = $('.feedback').offset().top;

    $("html, body").animate({ scrollTop: feedbackPosition }, '100');
  })
}

function gallery() {
  var photos = $('.gallery li');

  $('.photos .photo').on('click', function(e) {
    e.preventDefault();

    $('.overlay').fadeIn(300);
    $('.gallery').fadeIn(300);

    var number = $(e.target).attr('rel')-1;

    $('.gallery').css('top', $(document).scrollTop() + 100);

    photos.removeClass('active').eq(number).addClass('active');
  })

  $('.gallery .controls .next').on('click', function(e) {
    e.preventDefault();

    var current = $('.gallery li.active'),
        next = current.next('li').length ? current.next('li') : photos.first();

    photos.removeClass('active');
    next.addClass('active');
  })

  $('.gallery .controls .prev').on('click', function(e) {
    e.preventDefault();

    var current = $('.gallery li.active'),
        next = current.prev('li').length ? current.prev('li') : photos.last();

    photos.removeClass('active');
    next.addClass('active');
  })

  $('.overlay').on('click', function(e) {
    e.preventDefault();

    $('.overlay').fadeOut(300);
    $('.gallery').fadeOut(300);
  })
}
$('.ya-send').click(function(){window.open($(this).data('link'));yaCounter39513195.reachGoal('ya-click');return true;});

$(function() {
  feedback();
  gallery();

  lightbox.option({
    fixedNavigation: true
  })
})
