import React from "react";

export default function RHA() {
  return (
    <div class="container">
      <div class="row page-title">
        <div class="col">Rice Health Advisors</div>
      </div>

      <h1>About</h1>
      <div class="row">
        <div class="col">
          Rice Health Advisors, or RHAs, are students who have been trained on a
          variety of wellbeing topics, and are here to support you and your
          mental and physical wellbeing. These students work at their college to
          provide health education opportunities, peer guidance, and act as
          liaisons between the Student Wellbeing Office and the residential
          colleges. Feel free to talk to them, or contact them, if you need some
          guidance, need health supplies, or just want to chat!
        </div>
      </div>

      <br />
      <h1> Your RHAs </h1>
      <br />

      <div class="row">
        <div class="col">
          <div class="card-group card-group-flex" id="rha-card-group"></div>
        </div>
      </div>

      <br />
      <h1> RHA Top Picks </h1>
      <p>
        Here are some of our favorite wellbeing websites, podcasts, apps, and
        more:
      </p>
      <br />

      <div class="row">
        <div class="col">
          <div class="card-group card-group-flex">
            <div class="card">
              <div class="card-body">
                <h3> Podcasts </h3>
                <ul>
                  <li>
                    <a href="https://greatergood.berkeley.edu/podcasts/series/the_science_of_happiness">
                      The Science of Happiness
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="card">
              <div class="card-body">
                <h3> Websites </h3>
                <ul>
                  <li>
                    <a href="https://www.mentalhealth.gov/">Mental Health</a>
                  </li>
                  <li>
                    <a href="https://www.nami.org/">
                      National Alliance on Mental Illness
                    </a>
                  </li>
                  <li>
                    <a href="http://ok2talk.org/">OK2TALK</a>
                  </li>
                  <li>
                    <a href="https://www.trevorspace.org/">Trevor Space</a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="card">
              <div class="card-body">
                <h3> Apps </h3>
                <ul>
                  <li>
                    <a href="https://www.stopbreathethink.com/ ">
                      Stop, Breathe & Think
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
