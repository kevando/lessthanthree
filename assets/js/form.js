var db = firebase.firestore();
var mediaType = "book"; //window.location.pathname.split('/').pop()

if(mediaType === "movie") mediaType = "🎬"
if(mediaType === "book") mediaType = "📖"
if(mediaType === "music") mediaType = "📻"

$("#MediaType").text(mediaType);

$("#MyForm").on("submit", function (event) {

  console.log("form submitted");

  event.preventDefault();

  var data = {
    firstPlace: $("input[name=firstPlace]").val() || '',
    secondPlace: $("input[name=secondPlace]").val() || '',
    mediaType: mediaType,
    createdAt: new Date(),
  }

  console.log(data);

  db
    .collection("favorites-v1")
    .add(data)
    .then(function (docRef) {
      $("#SubmitFormBtn").fadeOut()
      $("input").fadeOut()
      var url = "/fixer/" + docRef.id;
      var displayUrl = "lessthanthreee.com/fixer/" + docRef.id;
      $("#YourUrl").text(displayUrl)
      $("#YourUrl").attr("href",url);
    })
    .catch(function (error) {
      console.error("Error adding document: ", error);
      $("#StatusText").text("There was an error: " + error);
    });

});

