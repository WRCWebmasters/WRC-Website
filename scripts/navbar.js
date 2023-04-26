var navbarContent = `
<button type="button" class="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
  <span class="navbar-toggler-icon"></span>
</button>
<div class="container d-flex justify-content-center">
  <div class="row">
    <div class="col-12 d-flex justify-content-center mb-3">
      <a id="title" href="home.html" class="navbar-brand d-flex align-items-center px-4 px-lg-5">
        <img src="../resources/wrc-logos/classic-crest-transparent [png].png" width="40" height="40" alt="Will Rice Logo">
        <h5 style="font-size: 2rem" class="m-0">Will Rice College</h5>
      </a>
    </div>
    <div class="collapse navbar-collapse" id="navbarCollapse">
        <div class="navbar-nav ms-auto p-4 p-lg-0">
          <div class="nav-item dropdown">
            <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">ABOUT</a>
            <div class="dropdown-menu m-0">
              <a href="beer-bike.html" class="dropdown-item">Beer Bike</a>
              <a href="diversity.html" class="dropdown-item">Diversity</a>
              <a href="sustainability.html" class="dropdown-item">Sustainability</a>
              <a href="history.html" class="dropdown-item">History</a>
              <a href="traditions.html" class="dropdown-item">Traditions</a>
            </div>
          </div>
          <div class="nav-item dropdown">
            <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">PEOPLE</a>
            <div class="dropdown-menu m-0">
              <a href="a-team.html" class="dropdown-item">A-Team</a>
              <a href="alumni-and-associates.html" class="dropdown-item">Alumni & Associates</a>
              <a href="student-leadership.html" class="dropdown-item">Student Leadership</a>
              <a href="paa.html" class="dropdown-item">PAAs</a>
              <a href="fellows.html" class="dropdown-item">Fellows</a>
              <a href="rha.html" class="dropdown-item">RHAs</a>
              <a href="pca.html" class="dropdown-item">PCAs</a>
              <a href="strive.html" class="dropdown-item">STRIVE</a>
              <a href="caregivers.html" class="dropdown-item">Caregivers</a>


            </div>
          </div>
          <div class="nav-item dropdown">
            <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">OPERATING</a>
            <div class="dropdown-menu m-0">
              <a href="diet.html" class="dropdown-item">Diet</a>
              <a href="budget.html" class="dropdown-item">Budget & Spending</a>
              <a href="constitution-bylaws.html" class="dropdown-item">Constitution & By-laws</a>
              <a href="contact.html" class="dropdown-item">Contact</a>
            </div>
          </div>
          <div class="nav-item dropdown">
            <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">RESOURCES</a>
            <div class="dropdown-menu m-0">
              <a href="communications.html" class="dropdown-item">Communications</a>
              <a href="forms.html" class="dropdown-item">Forms</a>
              <a href="finances.html" class="dropdown-item">Finances</a>
              <a href="calendar.html" class="dropdown-item">Calendars</a>
              <a href="brand-resources.html" class="dropdown-item">Brand Resources</a>
          <a href="financial-assistance.html" target="_blank" class="dropdown-item">Financial Assistance</a>

            </div>
          </div>
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSeyfsUhSL3uE04xBhw3_rhijYqfCpXU8dCKD3mciANnVf6uzg/viewform" target="_blank" class="nav-item nav-link">MAGISTER'S FUND</a>
          <a href="forms.html#space" class="nav-item nav-link">SPACE RESERVATION</a>

          <a target="_blank" href="https://riceconnect.rice.edu/donation/support-will-rice" class="nav-item nav-link">DONATE</a>
      <a target="_blank" href="https://wrcoweek.wixsite.com/wrcoweek2022/home" class="nav-item nav-link">O-WEEK</a>

        </div>
      </div>
    </div>
  </div>

`;

// when scroll, navbar shrinks
$(function () {
    $(document).scroll(function () {
      var $nav = $(".navbar h5, .navbar img");
      var $navitem = $(".nav-link");
      var $navbrand = $(".navbar-brand");
      var $navbar = $(".navbar-nav");
      $nav.toggleClass("hidden", $(this).scrollTop() > 2*$nav.height());
      $navitem.toggleClass("small-nav", $(this).scrollTop() > 2*$nav.height());
      $navbrand.toggleClass("small-nav", $(this).scrollTop() > 2*$nav.height());
      $navbar.toggleClass("center", $(this).scrollTop() > 2*$nav.height());
    });
  });

// script to replace a <div id="navbar-placeholder"></div> with this navbar html
let navbarElement = document.createElement("nav");
navbarElement.className = "navbar navbar-expand-lg bg-light-border navbar-light sticky-top p-0";
navbarElement.innerHTML = navbarContent;
document.getElementById("navbar-placeholder").replaceWith(navbarElement);

