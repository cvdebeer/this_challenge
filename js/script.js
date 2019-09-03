$(document).ready(function () {
  /* old code
  $("#stream1_btn").on("click", function () {
    $(".stream1").removeClass("highlight_stream");
    $(".stream2").removeClass("highlight_stream");
    $(".stream3").removeClass("highlight_stream");
    $(".stream1").addClass("highlight_stream");
  });
  $("#stream2_btn").on("click", function () {
    $(".stream1").removeClass("highlight_stream");
    $(".stream2").removeClass("highlight_stream");
    $(".stream3").removeClass("highlight_stream");
    $(".stream2").addClass("highlight_stream");
  });
  $("#stream3_btn").on("click", function () {
    $(".stream1").removeClass("highlight_stream");
    $(".stream2").removeClass("highlight_stream");
    $(".stream3").removeClass("highlight_stream");
    $(".stream3").addClass("highlight_stream");
  });
  */
  //solution provided by Code Institute - not working
  $(".stream-nav").on("click", function () {
    // A selector to match all cards in all streams
    var allStreamsCardsSelector = ".card";
    // A selector to match just this stream's cards
    // for this, we use the class with the name of the stream,
    // which is the same as this nav link's id and then the "-card" suffix.
    var thisStreamCardsSelector = "." + this.id + "-card";

    // First remove the highlight from all of the cards
    $(allStreamsCardsSelector).removeClass("card-highlight");
    // Then apply the highlight to just this stream's cards
    $(thisStreamCardsSelector).addClass("card-highlight");
  });
  /*
  $("#stream1_btn").on("click", function () {
      // A selector to match all cards in all streams
      var classNames = $(this).attr('class').split(' ');
      /* $('.' + classNames[1]).css('background-color', 'red ');
  });
      var cardClass = classNames[0];
      var className = classNames[1];
      if ($(this).css('background-color') == rgb(255, 255, 255)) {
          $('.' + className).addClass('card-highlight');
      } else {
          $('.' + cardClass).removeClass('card-highlight');
          $('.' + className).addClass('card-highlight');
      }
  });*/
  $("p").click(function () {
    $("p").addClass("redfont");
  });
  $("h2").hover(function () {
    $('h2').toggleClass("h2hover")
      .next()
      .stop(true, true)
    $(this).toggleClass("h2fontadjust")
      .next()
      .stop(true, true)
  });
  $('.bottom_button').mouseenter(function () {
    $('body').addClass('buttonhover')
  });
  $('.bottom_button').mouseleave(function () {
    $('body').removeClass('buttonhover')
  });

  $('p').click(function () {
    $(this).children('a').addClass('highlight_link');
  });
  $('button').click(function () {
    $(this).prev().slideToggle('slow');
  });

  $('img').click(function () {
    $(this).next().children().slideDown();
  })
  $('.card').click(function () {
    $(this).toggleClass('card-highlight');
  })
  /*selecting highlights challenge*/
  $('#select').click(function () {

    $('.card').not('.card-highlight').hide();
  })

  $('#all').click(function () {
    $('.card').show();
  })
});