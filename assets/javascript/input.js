
function addMovie() {

  var movieTitle = $("input[name=movie-title]").val();

  var data = {
    title: movieTitle,
    createdAt: new Date()
  }

  db.collection("shares").add(data)
    .then(function (docRef) {
      
      console.log("Document written with ID: ", docRef.id);
      $("#Status").text("Send this URL to people http://lessthanthreee.com/---->/43");
    })
    .catch(function (error) {
      console.error("Error adding document: ", error);
      $("#Status").text("Error adding document: " + error);
    });
}

$("#MovieForm").on("submit", function (event) {
  event.preventDefault();
  $('#Status').text('Loading')

  addMovie()
});
