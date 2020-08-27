
var clicks = 0;

$("#Heart").removeClass('white');
$("#Heart").addClass('yellow');

$("#Heart").on("click", function () {
  clicks++;

  if (clicks === 1) {
    $("#Q1").text('the internet')
  }

  if (clicks === 2) {
    $("#Q2").text('needs')
  }

  if (clicks === 3) {
    $("#Q4").text('more');
    // $("#Heart").removeClass('white');
    // $("#Heart").addClass('yellow');
  }

  if (clicks === 4) {
    
    $(".quadrant").removeClass('blue');
    $(".quadrant").addClass('yellow');

    $("#Heart").removeClass('yellow');
    $("#Heart").addClass('purple');

    $("#Q1").text('');
    $("#Q2").text('');
    $("#Q4").text('');

    $(".text").removeClass('small medium');
    $(".text").addClass('large');
  }

  if (clicks === 5) {
    $("#Q1").text('what')
  }

  if (clicks === 6) {
    $("#Q2").text('do')
  }

  if (clicks === 7) {
    $("#Q4").text('you');
  }

  if (clicks === 8) {

    $("#Q1").text('📖').addClass("clickable emoji");
    $("#Q2").text('🎬').addClass("clickable emoji");;
    $("#Q3").text('🎮').addClass("clickable emoji");;
    $("#Q4").text('💽').addClass("clickable emoji");;
    $("#Heart").hide();

    $(".quadrant").removeClass('yellow blue');
    $(".text").removeClass('small medium large');
    $(".text").addClass('medium');

    $(".q1").addClass('purple');
    $(".q2").addClass('yellow');
    $(".q3").addClass('pink');
    $(".q4").addClass('blue');

    $("#Q1").click(function () {
      mediaType = '📖'
      $("input[name=firstPlace]").attr("placeholder", "Book?")
      $('.mediaTypeEmoji').text(mediaType)
      $("#HomeFormWrapper").show();
      $("html, body").animate({ scrollTop: $(document).height() }, "slow");
      return false;
    });

    $("#Q2").click(function () {
      mediaType = '🎬'
      $("input[name=firstPlace]").attr("placeholder", "Movie?")
      $('.mediaTypeEmoji').text(mediaType)
      $("#HomeFormWrapper").show();
      $("html, body").animate({ scrollTop: $(document).height() }, "slow");
      return false;
    });

    $("#Q3").click(function () {
      mediaType = '🎮'
      // alert('clicked vg')
      $("input[name=firstPlace]").attr("placeholder", "Video Game?")
      $('.mediaTypeEmoji').text(mediaType)
      $("#HomeFormWrapper").show();
      $("html, body").animate({ scrollTop: $(document).height() }, "slow");
      return false;
    });
    $("#Q4").click(function () {
      mediaType = '💽'
      // alert('clicked album')
      $("input[name=firstPlace]").attr("placeholder", "Album?")
      $('.mediaTypeEmoji').text(mediaType)
      $("#HomeFormWrapper").show();
      $("html, body").animate({ scrollTop: $(document).height() }, "slow");
      return false;
    });

  }
});

