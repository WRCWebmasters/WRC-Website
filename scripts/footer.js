var footerContent = `
  <div class="container py-5"  data-wow-delay="0.1s">
    <div style="display: flex; justify-content: center;">
      <img class="footer-logo" width="50px" src="../resources/images/wrcphoenixlogo_original.png" />
    </div>
    <hr style="  border-top: 3px solid var(--gold); margin: 30px 0" />
    <div class="row g-5">

      <div class="col-lg-3 col-md-6">
        <h4 class="text-white mb-4">Quick Links</h4>
        <a class="btn btn-link" target="_blank"
          href="https://docs.google.com/forms/d/e/1FAIpQLSeyfsUhSL3uE04xBhw3_rhijYqfCpXU8dCKD3mciANnVf6uzg/viewform">Magister's Fund</a>
        <a class="btn btn-link" href="calendar.html">Calendar</a>
        <a class="btn btn-link" href="diet.html">Diet</a>
        <a class="btn btn-link" href="forms.html#space">Space Reservation</a>
      </div>
      <div class="col-lg-3 col-md-6">
        <h4 class="text-rust mb-4">Quick Links</h4>
        <a class="btn btn-link" target="_blank"
          href="https://docs.google.com/forms/d/e/1FAIpQLScvmBPMKeOOU3VDeEczDVyWDNWl4jqkYAV84YgvsHg4jf3G6w/viewform">Party
          Registration</a>
        <a class="btn btn-link" href="housing-and-parking.html">Housing & Parking</a>
        <a class="btn btn-link" href="requesting-money.html">Budget Spending Requests</a>
        <a class="btn btn-link" href="contact.html">Contact</a>
      </div>
      <div class="col-lg-3 col-md-6">
        <h4 class="text-white mb-4">Contact</h4>
        <p class="mb-2"><i class="fa fa-phone-alt me-3"></i>(713) 348 6061</p>
        <p class="mb-2"><i class="fa fa-envelope me-3"></i>wrc@rice.edu</p>
        <div class="d-flex pt-2">
          <a class="btn btn-square btn-outline-light rounded-circle me-2" target="_blank"
            href="https://www.facebook.com/groups/365957593418249"><i class="fab fa-facebook-f"></i></a>
          <a class="btn btn-square btn-outline-light rounded-circle me-2" target="_blank"
            href="https://www.youtube.com/user/willriceelections"><i class="fab fa-youtube"></i></a>
          <a class="btn btn-square btn-outline-light rounded-circle me-2" target="_blank"
            href="https://www.instagram.com/willricecollege/"><i class="fab fa-instagram"></i></a>
        </div>
      </div>
      <div class="col-lg-3 col-md-6">
        <h4 class="text-white mb-4">Address</h4>
        <a style="color: white" href="https://goo.gl/maps/shuZUDRZiTj7qTLu7" target="_blank">
          <p class="mb-2">6330 Main St</p>
          <p class="mb-2">Will Rice College</p>
          <p class="mb-2">Houston, TX 77005</p>
        </a>
      </div>
    </div>
  </div>


`;

let footerElement = document.createElement("div");
footerElement.className = "container-fluid bg-dark text-light footer mt-5 py-2"; 
footerElement.innerHTML = footerContent;
document.getElementById("footer-placeholder").replaceWith(footerElement);
