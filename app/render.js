export default function render(viewFn, status = 200) {
    const content = viewFn();
    const headers = new Headers();
    headers.set("content-type", "text/html");
    const html = `
        <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
<link rel="stylesheet" href="/assets/style.css">
<link href="https://cdn.jsdelivr.net/npm/remixicon/fonts/remixicon.css" rel="stylesheet">
    <title>PY Travels</title>
</head>
<body>
    <nav>
        <div class="nav__header">
            <div class="nav__logo">
                <a href="#" class="logo"> PY Travels</a>   
            </div>
            <div class="nav_menu_btn" id="menu-btn">
             <i class="ri-menu-line"></i>
            </div>
        </div>
        <ul class="nav__links" id="nav-links">
            <li><a href="/">HOME</a></li>
            <li><a href="/about">ABOUT</a></li>
            <li><a href="/package">PACKAGE</a></li>
            <li><a href="/contact">CONTACT</a></li>
            <li><a href="/login">LOGIN</a></li>
            <li><a href="/book">BOOK TRIP</a></li>
        </ul>
        <div class="nav__btns">
            <a href="/book">BOOK TRIP</a>
        </div> 
    </nav>
        
    <header id="home">
        <div class="header__container">
            <div class="header__content">
                <p>ELEVATE YOUR TRAVEL JOURNEY</p>
                <h1>Experience The Magic Of Flight!</h1>
                <div class="header__btns">
  <a href="/book" class="btn">Book A Trip Now</a> 
</div>
            </div>
            <div class="header__image">
                <img src="/assets/header.png" alt="header">
            </div>
        </div>
    </header> 
    <main> 
        ${content}
    </main>   
    <footer id="contact">
      <div class="section__container footer__container">
        <div class="footer__col">
          <div class="footer__logo">
            <a href="#" class="logo">PY Travels</a>
          </div>
          <p>
            Explore the world with ease and excitement through our comprehensive
            travel platform. Your journey begins here, where seamless planning
            meets unforgettable experiences.
          </p>
          <ul class="footer__socials">
            <li>
              <a href="#"><i class="ri-facebook-fill"></i></a>
            </li>
            <li>
              <a href="#"><i class="ri-instagram-line"></i></a>
            </li>
            <li>
              <a href="#"><i class="ri-youtube-line"></i></a>
            </li>
          </ul>
        </div>
        <div class="footer__col">
          <h4>Quick Links</h4>
          <ul class="footer__links">
            <li><a href="#">Home</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Package</a></li>
            <li><a href="#">Book Trip</a></li>
          </ul>
        </div>
        <div class="footer__col">
          <h4>Contact Us</h4>
          <ul class="footer__links">
            <li>
              <a href="#">
                <span><i class="ri-phone-fill"></i></span> +91 9879304980
              </a>
            </li>
            <li>
              <a href="#">
                <span><i class="ri-record-mail-line"></i></span> info@pytravels
              </a>
            </li>
            <li>
              <a href="#">
                <span><i class="ri-map-pin-2-fill"></i></span> Mumbai, India
              </a>
            </li>
          </ul>
        </div>
        
      </div>
      <div class="footer__bar">
        Copyright © 2026 PY Travels. All rights reserved.
      </div>
       </footer>

    <script>
        const menuBtn = document.getElementById("menu-btn");
        const navLinks = document.getElementById("nav-links");

        menuBtn.addEventListener("click", () => {
            navLinks.classList.toggle("open");
        });
    </script>

</body>
</html>
    `
    return new Response(html, { headers, status });
}