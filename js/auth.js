function login(email, password) {
    auth.signInWithEmailAndPassword(email, password)
      .then(() => location.href = "chat.html")
      .catch(err => alert(err.message));
  }
  
  function register(email, password) {
    auth.createUserWithEmailAndPassword(email, password)
      .then(() => alert("Kayıt başarılı!"))
      .catch(err => alert(err.message));
  }
  
  function resetPassword(email) {
    auth.sendPasswordResetEmail(email)
      .then(() => alert("Şifre sıfırlama bağlantısı e-posta ile gönderildi."))
      .catch(err => alert(err.message));
  }