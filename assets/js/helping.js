function goHome() {
  // window.location = "/";
}

function displayData(data) {

  mediaType = data.mediaType;
  $('.mediaTypeEmoji').text(mediaType)
  // $(".text").removeClass("huge").addClass("medium");

  $("#FirstPlace").text(data.firstPlace).removeClass("huge").addClass("medium");
  $("#SecondPlace").text(data.secondPlace).removeClass("huge").addClass("small");
  $("#MediaTypeBtn").text(data.mediaType)
}


const docId = window.location.search.substring(1)
console.log("docId: ", docId)

var mediaType = null;

try {

  if (!docId) throw new Error("Missing Search Param");

  favoritesCollection.doc(docId).get().then(function (doc) {
    if (doc.exists) {
      displayData(doc.data())
    } else {
      goHome();
    }
  }).catch(function (error) {
    throw new Error("Error getting document:", error);
  });


} catch (e) {
  goHome()
}
