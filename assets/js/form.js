console.log('mediaType11', mediaType)

$("#MediaType").text(mediaType);
$("#YourUrl").fadeOut();

var placeholderText = ''

if (mediaType === "📖") placeholderText = "Book?";
if (mediaType === "🎬") placeholderText = "Movie?";
if (mediaType === "🎮") placeholderText = "Video Game?";
if (mediaType === "💽") placeholderText = "Album?";

$("input[name=firstPlace]").attr("placeholder", placeholderText)

$("#MyForm").on("submit", function (event) {

  $("#SubmitFormBtn").text("telling the internet");
  $("input").fadeOut("fast");

  event.preventDefault();

  var data = {
    firstPlace: $("input[name=firstPlace]").val() || '',
    secondPlace: $("input[name=secondPlace]").val() || '',
    mediaType: mediaType,
    createdAt: new Date(),
  }

  favoritesCollection
    .add(data)
    .then(function (docRef) {



      var url = "/helping?" + docRef.id;
      var displayUrl = "lessthanthreee.com/helping?" + docRef.id;

      $("#SubmitFormBtn").fadeOut("slow", function () {
        $("#YourUrl").text(displayUrl)
        $("#YourUrl").attr("href", url);
        $("#YourUrl").fadeIn();
      })
    })
    .catch(function (error) {
      console.error("Error adding document: ", error);
      $("#StatusText").text("There was an error: " + error);
    });

});

