importScripts('https://www.gstatic.com/firebasejs/5.4.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/5.4.1/firebase-messaging.js');

firebase.initializeApp({
  'messagingSenderId': '821987139288'
});
const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(payload => {
  const notification = JSON.parse(payload.data.notification);
  const notificationTitle = notification.title;
  const data = notification.data;
  const notificationOptions = {
    body: notification.body,
    click_action: data.click_action || 'test.com'
  };

  return self.registration.showNotification(
    notificationTitle ,
    notificationOptions
  );
});
