export function packageView() {
    return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Packages | Py Travels</title>

  <link href="https://cdn.jsdelivr.net/npm/remixicon/fonts/remixicon.css" rel="stylesheet">
  <script src="https://unpkg.com/scrollreveal"></script>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css"/>

  <link rel="stylesheet" href="/assets/style.css">
</head>
<body>

<nav>
  <div class="nav__header">
    <div class="nav__logo">
      <a href="index.html" class="logo">Py Travels</a>
    </div>
    <div class="nav_menu_btn" id="menu-btn">
      <i class="ri-menu-line"></i>
    </div>
  </div>

  <ul class="nav__links" id="nav-links">
    <li><a href="index.html">Home</a></li>
    <li><a href="about.html">About</a></li>
    <li><a href="package.html">Packages</a></li>
    <li><a href="book.html">Book Trip</a></li>
  </ul>
</nav>

<section class="section__container">
  <h2 class="section__header">Popular Packages</h2>
  <p class="section__description">
    Discover our most loved travel experiences.
  </p>

  <div class="swiper">
    <div class="swiper-wrapper">

      <div class="swiper-slide destination__card">
        <img src="paris.jpg" alt="">
        <div class="destination_card_details">
          <div>
            <h4>Paris Tour</h4>
            <p>5 Days / 4 Nights</p>
          </div>
          <div class="destination__rating">£899</div>
        </div>
      </div>

      <div class="swiper-slide destination__card">
        <img src="maldives.jpg" alt="">
        <div class="destination_card_details">
          <div>
            <h4>Maldives Escape</h4>
            <p>4 Days / 3 Nights</p>
          </div>
          <div class="destination__rating">£1099</div>
        </div>
      </div>

      <div class="swiper-slide destination__card">
        <img src="dubai.jpg" alt="">
        <div class="destination_card_details">
          <div>
            <h4>Dubai Adventure</h4>
            <p>6 Days / 5 Nights</p>
          </div>
          <div class="destination__rating">£999</div>
        </div>
      </div>

    </div>
  </div>

</section>

<script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>
<script src="main.js"></script>
</body>
</html>
    `;
}