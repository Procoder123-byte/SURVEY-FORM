document.getElementById("surveyForm").addEventListener("submit", function(event) {
    event.preventDefault();
  
    const email = document.getElementById("email").value;
    const message = document.getElementById("message");
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  
    if (!emailPattern.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }
  
    message.textContent = "✅ Thank you for your feedback!";
    message.style.color = "green";
    this.reset();
  });
  