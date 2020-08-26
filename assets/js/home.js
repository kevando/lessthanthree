
var clicks = 0;

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
  }

  if (clicks === 4) {
    $("#Q1").text('');
    $("#Q2").text('');
    $("#Q4").text('');
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

    $("#Q1").text('📖');
    $("#Q2").text('🎬');
    $("#Q4").text('📻');

    $("#Q1").click(function () {
      window.location = "/form/book"
    });

    $("#Q2").click(function () {
      window.location = "/form/movie"
    });

    $("#Q4").click(function () {
      window.location = "/form/music"
    });

  }
});


//tmp
$("#Q1").click(function () {
  window.location = "/form"
});