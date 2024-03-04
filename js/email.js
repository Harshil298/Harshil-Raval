emailjs.init("c1NJu30dPsoAUgIgr"); // Replace 'user_youruserID' with your EmailJS user ID

document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent default form submission

    // Fetch user input
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Send email
    emailjs
      .send("service_xizyezl", "template_rteu6ic", {
        from_name: name,
        from_email: email,
        message: message,
      })
      .then(
        function (response) {
          console.log("Email sent successfully:", response);
          alert("Email sent successfully!");
        },
        function (error) {
          console.error("Email sending failed:", error);
          alert("Failed to send email. Please try again later.");
        }
      );
  });
