export function bookView() {
    return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Book Trip | Py Travels</title>

  <link href="https://cdn.jsdelivr.net/npm/remixicon/fonts/remixicon.css" rel="stylesheet">
  <script src="https://unpkg.com/scrollreveal"></script>

  <link rel="stylesheet" href="/assets/style.css">
</head>
<body class="book-page">



<section class="section__container">
  <h2 class="section__header">Book Your Dream Trip</h2>
  <p class="section__description">
    Fill the form and start your journey today.
  </p>

  <form action="/book" method="POST">
  <form class="booking__form" id="bookingForm">
    <input type="text" placeholder="Full Name" required>
    <input type="email" placeholder="Email Address" required>
    <input type="text" placeholder="Destination" required>
    <input type="date" required>
    <input type="number" placeholder="Number of Travelers" required>
    <button type="submit" class="btn">Submit Booking</button>
    <div class="back-to-website">
            <a href="/" class="btn">Back to Website</a>
        </div>
  </form>
</section>


</body>
</html>
    `;
}