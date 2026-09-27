export function aboutView() {
    return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>About | Py Travels</title>

  <!-- Remix Icons -->
  <link href="https://cdn.jsdelivr.net/npm/remixicon/fonts/remixicon.css" rel="stylesheet">

  <!-- ScrollReveal -->
  <script src="https://unpkg.com/scrollreveal"></script>

  <link rel="stylesheet" href="/assets/style.css" />
</head>
<body>

<nav>
  <div class="nav__header">
    <div class="nav__logo">
      <a href="/" class="logo">Py Travels</a>
    </div>
    <div class="nav_menu_btn" id="menu-btn">
      <i class="ri-menu-line"></i>
    </div>
  </div>

  <ul class="nav__links" id="nav-links">
    <li><a href="/">Home</a></li>
    <li><a href="/about">About</a></li>
    <li><a href="/package">Packages</a></li>
    <li><a href="/book">Book Trip</a></li>
  </ul>
</nav>

<section class="section_container about_container">
  <h2 class="section__header">About Py Travels</h2>
  <p class="section__description">
    Creating unforgettable journeys for passionate travelers.
  </p>

    <div class="about_text header_content">
      <h1>Your Trusted Travel Partner</h1>
      <p>
        Py Travels offers curated travel experiences designed to combine
        comfort, adventure, and affordability.
      </p>
      <div class="header__btns">
        <a href="/package" class="btn">Explore Packages</a>
      </div>
    </div>
  </div>
</section>


</body>
</html>

    `;
}