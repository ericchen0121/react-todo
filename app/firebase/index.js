import firebase from 'firebase';

try {
  var config = {
      apiKey: "AIzaSyDx81Febs_8rHxmNUx9QOKJdKBpHx3Z0Ro",
      authDomain: "todos-d4523.firebaseapp.com",
      databaseURL: "https://todos-d4523.firebaseio.com",
      storageBucket: "todos-d4523.appspot.com",
      messagingSenderId: "525091269502"
  };

  firebase.initializeApp(config);
} catch (e) {

}

export var firebaseRef = firebase.database().ref();
export default firebase;
