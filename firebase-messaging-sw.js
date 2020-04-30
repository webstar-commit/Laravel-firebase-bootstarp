importScripts('https://www.gstatic.com/firebasejs/6.3.4/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/6.3.4/firebase-messaging.js');

firebase.initializeApp({
  // apiKey: "AIzaSyD0VQd87qMeBpne_8Oki_BK7az_lCS1j0o",
  // authDomain: "nomada-7f903.firebaseapp.com",
  // databaseURL: "https://nomada-7f903.firebaseio.com",
  // projectId: "nomada-7f903",
  // storageBucket: "nomada-7f903.appspot.com",
  // messagingSenderId: "1004616114578",
  // appId: "1:1004616114578:web:261324f665f0715b7ee14b",
  // measurementId: "G-6FRWFEEEMZ"

  apiKey: "AIzaSyBHtVIGvyv7oma7heLOFPdOja244YUlS7w",
  authDomain: "nomada-8c0bd.firebaseapp.com",
  databaseURL: "https://nomada-8c0bd.firebaseio.com",
  projectId: "nomada-8c0bd",
  storageBucket: "nomada-8c0bd.appspot.com",
  messagingSenderId: "308591856331",
  appId: "1:308591856331:web:8faf2f62bb1cd591"
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(function(payload) {
    console.log('[firebase-messaging-sw.js] Received background message ', payload);
    // Customize notification here
    const notificationTitle = 'Background Message Title';
    const notificationOptions = {
      body: 'Background Message body.',
      icon: '/firebase-logo.png'
    };
  
    return self.registration.showNotification(notificationTitle,
      notificationOptions);
  });