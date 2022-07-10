var footerContent = `
<footer class="bg-rust">
      <div style="background-color: rgba(0, 0, 0, 0.2)">
        <div style="float: left; padding: 0.75rem" class="float-center">
          <a class="text-light" href="./home.html">Will Rice College 2022</a>
          <a class="text-light"> | </a>
          <a class="text-light" target="_blank" href="https://www.rice.edu/"
            >Rice University</a
          >
        </div>
        <div style="float: right; padding: 0.75rem" class="float-center">
          <a
            target="_blank"
            href="https://docs.google.com/forms/d/e/1FAIpQLSdC1XYoXA8i3sT9gIW09oF5B58rGeDl5qhGfN9NOsuJ23Rkag/viewform?usp=sf_link"
            class="text-light"
            >Website Feedback Form | </a
          >
          <a class="text-light"
            >Made possible with
            <a class="text-dark" target = "_blank" href="https://mdbootstrap.com/"
              >MDBootstrap.com</a
            >
            <a class="text-light"> and </a>
            <a class = "text-dark" target = "_blank" href="https://www.flaticon.com/">FlatIcon</a></a
          >
        </div>
      </div>
    </footer>
`;

let footerElement = document.createElement("div");
footerElement.innerHTML = footerContent;
document.getElementById("footer-placeholder").appendChild(footerElement);
