// var storageObj;
// var db = firebase.firestore();

// var retrievedUser = localStorage.getItem('lessthanthree_user');
// var user = JSON.parse(retrievedUser);

// // var docId;
// var docRef;

// var  retrievedUserId = localStorage.getItem('lessthanthreee_user_id');

// console.log('retrievedUserId',retrievedUserId)
// ---- User ----

// async function incrementUserId() {
//   var userConfigRef = db.collection("users").doc("config");

//   userConfigRef.update({
//     total: firebase.firestore.FieldValue.increment(1)
//   });


//   var userCount = await docRef.get().then(function (doc) {
//     return doc.data().total
//   })

//   return userCount;
// }

// async function createUser() {
//   var d = new Date();
//   console.log(d, d.now());

//   var userId = incrementUserId();

//   console.log('userud', userId)

//   var user = {
//     userId: userId,
//     createdAt: d
//   }


//   docId = await db.collection("users").add(user)
//     .then(function (docRef) {
//       return docRef.id
//     })

//     return docId;

// }





// var userId = window.location.pathname.split('/').pop()
// console.log("userId: ", userId)

// function updateText(docData) {
//   $("#Movie").text(docData.title)
// }

// var docRef = db.collection("shares").doc(docId)

// docRef.get().then(function (doc) {

//   if (doc.exists) {
//     updateText(doc.data())
//   } else {
//     console.log("No such document!");
//   }
// }).catch(function (error) {
//   console.log("Error getting document:", error);
// });

// console.log(typeof userId)
// db.collection("shares").where("userId", "==", parseInt(userId))
//   .get()
//   .then(function (querySnapshot) {

//     if (querySnapshot.empty) {
//       console.log('No user for this. what page to show thm')
//     }
//     querySnapshot.forEach(function (doc) {
//       // doc.data() is never undefined for query doc snapshots
//       console.log(doc.id, " => ", doc.data());
//       updateText(doc.data())
//       docRef = doc
//     });
//   })
//   .catch(function (error) {
//     console.log("Error getting documents: ", error);
//   });



// function randomNumber(min, max) {
//   return Math.random() * (max - min) + min;
// }


var colors = ['pink', 'blue', 'purple', 'yellow', 'red']


function randomIndex(array) {
  var max = array.length;
  var min = 0;
  return Math.floor(Math.random() * (max - min) + min);
}

function getRandomColor() {
  var i = randomIndex(colors)
  return colors[i]
}
