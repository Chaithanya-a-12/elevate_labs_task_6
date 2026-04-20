<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Contact Form</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background: #f4f4f4;
        }
        .container {
            width: 350px;
            margin: 50px auto;
            padding: 20px;
            background: white;
            border-radius: 10px;
            box-shadow: 0px 0px 10px gray;
        }
        h2 {
            text-align: center;
        }
        input, textarea {
            width: 100%;
            padding: 10px;
            margin: 8px 0;
            border: 1px solid #ccc;
            border-radius: 5px;
        }
        button {
            width: 100%;
            padding: 10px;
            background: #28a745;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
        }
        button:hover {
            background: #218838;
        }
        .error {
            color: red;
            font-size: 14px;
        }
    </style>
</head>
<body>

<div class="container">
    <h2>Contact Form</h2>
    <form id="contactForm">
        
        <input type="text" id="name" placeholder="Your Name">
        <div class="error" id="nameError"></div>

        <input type="email" id="email" placeholder="Your Email">
        <div class="error" id="emailError"></div>

        <textarea id="message" placeholder="Your Message"></textarea>
        <div class="error" id="messageError"></div>

        <button type="submit">Submit</button>
    </form>
</div>

<script>
    document.getElementById("contactForm").addEventListener("submit", function(event) {
        event.preventDefault();

        let isValid = true;

        // Get values
        let name = document.getElementById("name").value.trim();
        let email = document.getElementById("email").value.trim();
        let message = document.getElementById("message").value.trim();

        // Clear errors
        document.getElementById("nameError").innerText = "";
        document.getElementById("emailError").innerText = "";
        document.getElementById("messageError").innerText = "";

        // Name validation
        if (name === "") {
            document.getElementById("nameError").innerText = "Name is required";
            isValid = false;
        }

        // Email validation
        let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
        if (email === "") {
            document.getElementById("emailError").innerText = "Email is required";
            isValid = false;
        } else if (!email.match(emailPattern)) {
            document.getElementById("emailError").innerText = "Enter a valid email";
            isValid = false;
        }

        // Message validation
        if (message === "") {
            document.getElementById("messageError").innerText = "Message cannot be empty";
            isValid = false;
        }

        // If valid
        if (isValid) {
            alert("Form submitted successfully!");
            document.getElementById("contactForm").reset();
        }
    });
</script>

</body>
</html>
