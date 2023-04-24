let categories = {
    "a-team": "@people",
    "alumni-and-associates": "@people",
    "beer-bike": "@about",
    "brand-resources": "@resources",
    calendar: "@resources",
    caregivers: "@people",
    "constitution-bylaws": "@operating",
    contact: "@operating",
    diet: "@operating",
    fellows: "@people",
    forms: "@resources",
    history: "@about",
    historytimeline: "@about",
    "housing-and-parking": "@operating",
    "new-students": "@people",
    paa: "@people",
    resources: "@resources",
    rha: "@people",
    strive: "@people",
    "student-leadership": "@people",
    today: "@about",
    traditions: "@about",
    williammarsh: "@about",
};

var navbarContent = `
  <a href="index.html" class="navbar-brand d-flex align-items-center px-4 px-lg-5">
    <h1 style="font-size: 2rem" class="m-0">Will Rice College</h1>
  </a>
  <button type="button" class="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarCollapse">
    <div class="navbar-nav ms-auto p-4 p-lg-0">
      <div class="nav-item dropdown">
        <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">ABOUT</a>
        <div class="dropdown-menu m-0">
          <a href="history.html" class="dropdown-item">History</a>
          <a href="traditions.html" class="dropdown-item">Traditions</a>
          <a href="beer-bike.html" class="dropdown-item">Beer Bike</a>
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
          <a href="feature.html" class="dropdown-item">Communications</a>
          <a href="quote.html" class="dropdown-item">Forms</a>
          <a href="team.html" class="dropdown-item">Finances</a>
          <a href="testimonial.html" class="dropdown-item">Calendar</a>
          <a href="404.html" class="dropdown-item">Brand Resources</a>
          <a href="404.html" class="dropdown-item">Rice Mutual Aid</a>

        </div>
      </div>
      <a href="contact.html" class="nav-item nav-link">FINANCIAL ASSISTANCE</a>

      <a href="contact.html" class="nav-item nav-link">SPACE RESERVATION</a>

      <a href="contact.html" class="nav-item nav-link">DONATE</a>
      <a href="new-students.html" class="nav-item nav-link">NEW STUDENTS</a>

    </div>
  </div>

`;

let pagename = location.pathname.split("/").slice(-1)[0].replace(".html", "");
navbarContent = navbarContent.replace(categories[pagename], "active");

let navbarElement = document.createElement("nav");
navbarElement.className = "navbar navbar-expand-lg bg-white navbar-light sticky-top p-0";

navbarElement.innerHTML = navbarContent;
document.getElementById("navbar-placeholder").replaceWith(navbarElement);

