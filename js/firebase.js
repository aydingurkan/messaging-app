// Firebase yapılandırma ayarları
const firebaseConfig = {
    apiKey: "AIzaSyD-KbmFtl4rRu7n4EJ2Z180XEPNH7T00w4",
    authDomain: "mesaj-8d504.firebaseapp.com",
    projectId: "mesaj-8d504",
    storageBucket: "mesaj-8d504.firebasestorage.app",
    messagingSenderId: "685536318784",
    appId: "1:685536318784:web:03759fe9c799d5868456a5",
    ölçümKimliği: "G-Z8YF2W2VP9"
    };
  
  // Firebase'i başlat
  firebase.initializeApp(firebaseConfig);
  
  // Auth ve Database objelerini tanımla
  const auth = firebase.auth();
  const db = firebase.database();