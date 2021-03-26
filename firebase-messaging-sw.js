importScripts("https://www.gstatic.com/firebasejs/8.3.1/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.3.1/firebase-messaging.js");
var firebaseConfig = {
  apiKey: "AIzaSyAhuzbpWDQ2IjJb_aWgW3lrUdp9bbAiUSc",
  authDomain: "mobile-8a0e6.firebaseapp.com",
  projectId: "mobile-8a0e6",
  storageBucket: "mobile-8a0e6.appspot.com",
  messagingSenderId: "584639168114",
  appId: "1:584639168114:web:318f9c5157718ef782cceb",
  measurementId: "G-QCW177YVQZ",
};
firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();
messaging.setBackgroundMessageHandler(function (payload) {
  console.log(
    "[firebase-messaging-sw.js] Received background message ",
    payload
  );
});
