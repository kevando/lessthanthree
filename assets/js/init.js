
var projectId = 'less-than-threee';
var apiKey = 'AIzaSyCgIewNYtNAhPTIfQ0wWGbHVPG0iPlXXaM';

var firebaseConfig = {
  apiKey: apiKey,
  authDomain: projectId + ".firebaseapp.com",
  databaseURL: "https://" + projectId + ".firebaseio.com",
  projectId: projectId,
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

