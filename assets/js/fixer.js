// var storageObj;
var db = firebase.firestore();



try {


  var docId = window.location.pathname.split('/').pop()
  // console.log("docId: ", docId)

  // Validate docId
  if (docId === "fixer" || !docId) {
    throw new Error("Invalid docid")
  }

  // Is there data for this doc?
  var docRef = db.collection("favorites-v1").doc(docId)

  docRef.get().then(function (doc) {

    if (doc.exists) {

      // Display on Page
      $("#FirstPlace").text(doc.data().firstPlace)
      $("#SecondPlace").text(doc.data().secondPlace)
      $("#MediaType").text(doc.data().mediaType)
    } else {
      console.log("No such document!");
    }
  }).catch(function (error) {
    console.log("Error getting document:", error);
  });


} catch (e) {

  console.warn(e)
}
