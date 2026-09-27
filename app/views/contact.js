export function contactView() {
    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Contact Form</title>
    <link rel="stylesheet" href="/assets/style.css">
</head>
<body class="contact-page">
    
    <div class="container">
        <h2>Contact Form</h2>
        <form action="/contact" method="POST">
        <form id="contactForm">

            <div class="input-group">
                <label for="firstName">First Name</label>
                <input type="text" id="firstName" placeholder="Enter your first name">
                <small class="error"></small>
            </div>

            <div class="input-group">
                <label for="lastName">Last Name</label>
                <input type="text" id="lastName" placeholder="Enter your last name">
                <small class="error"></small>
            </div>

            <div class="input-group">
                <label for="email">Email Address</label>
                <input type="text" id="email" placeholder="Enter your email">
                <small class="error"></small>
            </div>

            <div class="input-group">
                <label for="phone">Phone Number</label>
                <input type="text" id="phone" placeholder="Enter your phone number">
                <small class="error"></small>
            </div>

            <button type="submit">Submit</button>
            <div class="back-to-website">
            <a href="/" class="btn">Back to Website</a>
        </div>
        </form>
    </div>


</body>
</html>
    `;
}