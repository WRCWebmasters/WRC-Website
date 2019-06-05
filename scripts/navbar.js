let categories = {
    "a-team": "@people",
    "alumni-and-associates": "@people",
    "beer-bike": "@about",
    "brand-resources": "@resources",
    "calendar": "@resources",
    "caregivers": "@people",
    "constitution-bylaws": "@operating",
    "contact": "@operating",
    "diet": "@operating",
    "donate": "@operating",
    "fellows": "@people",
    "forms": "@resources",
    "history": "@about",
    "historytimeline": "@about",
    "housing-and-parking": "@operating",
    "new-students": "@people",
    "paa": "@people",
    "resources": "@resources",
    "rha": "@people",
    "strive": "@people",
    "student-leadership": "@people",
    "today": "@about",
    "traditions": "@about",
    "williammarsh": "@about"
}

var navbarContent = `
    <nav class="navbar fixed-top navbar-expand-lg navbar-dark">
        <a class="navbar-brand" href="home.html">
            <img src="../resources/images/wrcphoenixlogo.png" width="30" height="30" alt="">
        </a>
        <a class="navbar-brand" href="home.html">Will Rice College</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle @about" href="http://example.com" data-toggle="dropdown" aria-expanded="false">
                        About
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <a class="dropdown-item" href="./history.html">History</a>
                        <a class="dropdown-item" href="./williammarsh.html">William Marsh Rice Jr.</a>
                        <a class="dropdown-item" href="./traditions.html">Traditions</a>
                        <a class="dropdown-item" href="beer-bike.html">Beer Bike</a>
                        <a class="dropdown-item" href="./today.html">Today</a>
                    </div>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle @people" href="http://example.com" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        People
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <a class="dropdown-item" href="./a-team.html">A-Team</a>
                        <a class="dropdown-item" href="./alumni-and-associates.html">Alumni + Associates</a>
                        <a class="dropdown-item" href="./new-students.html">New Students</a>
                        <hr>
                        <a class="dropdown-item" href="./student-leadership.html">Student Leadership</a>
                        <a class="dropdown-item" href="./paa.html">PAAs</a>
                        <a class="dropdown-item" href="./fellows.html">Fellows</a>
                        <a class="dropdown-item" href="./rha.html">RHAs</a>
                        <a class="dropdown-item" href="./strive.html">STRIVE</a>
                        <a class="dropdown-item" href="./caregivers.html">Caregivers</a>
                    </div>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle @operating" href="http://example.com" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Operating
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <a class="dropdown-item" href="./diet.html">Diet</a>
                        <a class="dropdown-item" href="./constitution-bylaws.html">Constitution/Bylaws</a>
                        <a class="dropdown-item" href="./housing-and-parking.html">Housing and Parking</a>
                        <a class="dropdown-item" href="./contact.html">Contact</a>
                        <a class="dropdown-item" href="./donate.html">Donate</a>
                    </div>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle @resources" href="http://example.com" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Resources
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <a class="dropdown-item" href="./forms.html">Forms</a>
                        <a class="dropdown-item" href="./resources.html">Resources</a>
                        <a class="dropdown-item" href="./calendar.html">Calendar</a>
                        <a class="dropdown-item" href="./brand-resources.html">Brand Resources</a>
                    </div>
                </li>
            </ul>
        </div>
    </nav>`;

let pagename = location.pathname.split("/").slice(-1)[0].replace(".html", "");
navbarContent = navbarContent.replace(categories[pagename], "active");

let navbarElement = document.createElement("div");
navbarElement.innerHTML = navbarContent;
document.getElementById("navbar-placeholder").appendChild(navbarElement);
