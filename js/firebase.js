// Firebase yapılandırma ayarları
const firebaseConfig = {
    apiKey: "AIzaSyD-KbmFtl4rRu7n4EJ2Z180XEPNH7T00w4",
    authDomain: "mesaj-8d504.firebaseapp.com",
    databaseURL: "https://mesaj-8d504-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "mesaj-8d504",
    storageBucket: "mesaj-8d504.appspot.com",
    messagingSenderId: "685536318784",
    appId: "1:685536318784:web:03759fe9c799d5868456a5"
  };
  
  // Firebase'i başlat
  firebase.initializeApp(firebaseConfig);
  
  // Firebase servislerini tanımla
  const auth = firebase.auth();
  const db = firebase.database();