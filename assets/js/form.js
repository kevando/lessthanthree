console.log('mediaType11', mediaType)

$("#MediaType").text(mediaType);
$("#YourUrl").fadeOut();


// $("#YourUrl").fadeIn();

$("#MyForm").on("submit", function (event) {

  console.log("form submitted");
  $("#SubmitFormBtn").text("telling the internet")

  event.preventDefault();

  var data = {
    firstPlace: $("input[name=firstPlace]").val() || '',
    secondPlace: $("input[name=secondPlace]").val() || '',
    mediaType: mediaType,
    createdAt: new Date(),
  }

  console.log(data);

  db
  favoritesCollection
    .add(data)
    .then(function (docRef) {

      $("input").prop("disabled", true);
      var url = "/helping?" + docRef.id;
      var displayUrl = "lessthanthreee.com/helping?" + docRef.id;

      $("#SubmitFormBtn").fadeOut("fast", function () {
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

