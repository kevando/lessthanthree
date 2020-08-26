var userConfigRef = db.collection("users").doc("config");

async function createUser() {

  // Increment User
  await userConfigRef.update({
    total: firebase.firestore.FieldValue.increment(1)
  });

  // Set it as user id
  var userId = await userConfigRef.get().then(function (doc) {
    return doc.data().total
  })

  var user = {
    userId: userId,
    createdAt: Date.now()
  }

  var docId = await db.collection("users").add(user)
    .then(function (docRef) {
      return docRef.id
    })

  localStorage.setItem('lessthanthreee_doc_id', docId);
  localStorage.setItem('lessthanthreee_user_id', docId);

  return docId;
}




