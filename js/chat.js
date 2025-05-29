auth.onAuthStateChanged(user => {
    if (!user) return location.href = "index.html";
  
    const chatBox = document.getElementById("chatBox");
    const messageInput = document.getElementById("messageInput");
    const sendBtn = document.getElementById("sendBtn");
  
    // Mesaj gönderme
    sendBtn.onclick = () => {
      const message = messageInput.value.trim();
      if (message === "") return;
  
      db.ref("messages").push({
        sender: user.email,
        text: message,
        time: new Date().toLocaleTimeString()
      });
  
      messageInput.value = "";
    };
  
    // Mesajları dinle
db.ref("messages").on("child_added", snapshot => {
    const msg = snapshot.val();
    const div = document.createElement("div");
    div.classList.add("message");
    div.classList.add(msg.sender === user.email ? "sent" : "received");
    div.textContent = `${msg.text} (${msg.time})`;
    chatBox.appendChild(div);
    chatBox.scrollTop = chatBox.scrollHeight;
  });
  });
  