import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyDx81Febs_8rHxmNUx9QOKJdKBpHx3Z0Ro",
    authDomain: "todos-d4523.firebaseapp.com",
    databaseURL: "https://todos-d4523.firebaseio.com",
    storageBucket: "todos-d4523.appspot.com",
    messagingSenderId: "525091269502"
};

firebase.initializeApp(config);

var firebaseRef = firebase.database().ref();

// set, update and remove return promises, so you can chain .then( () => {})
firebaseRef.set({
  isRunning: true,
  user: {
    name: 'Eric',
    age: 33
  },
  app: {
    name: 'Todo App',
    version: '1.0.0'
  }
})

// multi-path update
// firebaseRef.update({
//   'user/name': 'Christine',
//   'app/name': 'Terminator'
// }).then(()=> {
//   console.log('Christine/Terminator was set as the user/app name in firebase')
// }, (e) => {
//   console.log('whoops')
// })

firebaseRef.child('user').update({
  name: 'christine'
})

// firebaseRef.child('app').update({
//   name: 'Terminator app'
// })
//
// // update to null, or remove
// firebaseRef.child('isRunning').remove();
// firebaseRef.child('user/age').update({
//   age: null
// })

// GET data from Firebase
// firebaseRef.child('app').once('value').then((snapshot) => {
//   console.log('got entire database', snapshot.key, snapshot.val())
// }, (e) => {
//   console.log('unable to fetch value')
// })

// .on('value, function callback () {} ) is an event listener for CHANGES ON database
// will fire multiple times, does not return a promise, but add a callback
// firebaseRef.on('value', (snapshot) => {
//   console.log('ON: got value', snapshot.val());
// })
//
// firebaseRef.off();
//
// firebaseRef.update({'isRunning': false})

//
// firebaseRef.child('user').on('value', (snapshot) => {
//   console.log('GOT USER data', snapshot.val())
// })
//
// firebaseRef.child('user').update({name: 'Sarah'})
//
// firebaseRef.child('app').update({name: 'Big App'})

// Arrays
// var notesRef = firebaseRef.child('notes');
// var newNoteRef = notesRef.push({
//   coffeeName: 'Arabica'
// })
//
// notesRef.on('child_added', (snapshot) => {
//   console.log('child_added', snapshot.key, snapshot.val())
// })
//
// notesRef.on('child_changed', (snapshot) => {
//   console.log('child_changed', snapshot.key, snapshot.val())
// })
//
// notesRef.on('child_removed', (snapshot) => {
//   console.log('child_removed', snapshot.key, snapshot.val())
// })

var todosRef = firebaseRef.child('todos');

todosRef.on('child_added', (snapshot) => {
  console.log('todo added', snapshot.key, snapshot.val())
})
todosRef.push({
  text: 'Go to the bank'
})
todosRef.push({
  text: 'Buy Starbucks coffee'
})
