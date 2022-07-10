import React from "react";

export default function Fellows() {
  return (
    <div class="container">
      <div class="row page-title">
        <div class="col">Academic Fellows</div>
      </div>

      <div class="row">
        <div class="col">
          <h1> About </h1>
          <p>
            Each residential college has an Academic Fellows or Mentors Society,
            an honorary service organization dedicated to academic life in the
            college. Fellows and Mentors are upperclassmen who were selected
            based on proven academic achievement and demonstrated willingness to
            help fellow students. As part of their charge, Fellows and Mentors
            provide free academic assistance on a regular basis through
            advertised review sessions, “office hours” in the college commons,
            and individual tutoring by request. Significant advantages of
            consulting a Fellow or Mentor are the convenience and proximity of
            the source as well as the familiarity of the Fellow or Mentor with
            the specific course.
          </p>
          <p>Sunday Night Group Study Sessions EVERY Sunday from 7 - 9 pm</p>
          <p>
            Please join us! Even if you have never been able to come to a
            session, this is a great time to start. We have tutors who can help
            in Science, Math, Engineering, English, FWIS, etc courses. The
            Fellows are here to help you with all of your academic needs.
          </p>
          <p>
            We are currently meeting over Zoom, but we hope to be back in the
            meeting in commons every Sunday in the Fall 2021 semester.
          </p>
          <p>
            Join Zoom Meeting
            <br />
            <a href="https://riceuniversity.zoom.us/j/91781548531?pwd=ZjlmNFpJQU1RTStaNnVlRjlaZ3UrUT09">
              https://riceuniversity.zoom.us/j/91781548531?pwd=ZjlmNFpJQU1RTStaNnVlRjlaZ3UrUT09
            </a>
            <br />
            Meeting ID: 917 8154 8531
            <br />
            Passcode: fellows
            <br />
            Also, here is a link to request a one-on-one session:
            <br />
            <a href="https://forms.gle/KLryr42d2cfesWGz5">
              https://forms.gle/KLryr42d2cfesWGz5
            </a>
          </p>

          <h1> Head Fellows </h1>
          <div class="card-group">
            <div class="card">
              <div class="card-body">
                <h3 class="card-title"> Bella Gutierrez </h3>
                <a href="mailto:iag2@rice.edu">
                  <h6 class="card-subtitle text-muted"> iag2@rice.edu </h6>
                </a>
                <p class="card-text"> EBIO, ENST (minor) </p>
              </div>
            </div>

            <div class="card">
              <div class="card-body">
                <h3 class="card-title"> Michelle Miao </h3>
                <a href="mailto:mjm19@rice.edu">
                  <h6 class="card-subtitle text-muted"> mjm19@rice.edu </h6>
                </a>
                <p class="card-text"> BIOS </p>
              </div>
            </div>

            <div class="card">
              <div class="card-body">
                <h3 class="card-title"> Gulnihal Tomur </h3>
                <a href="mailto:bgt2@rice.edu">
                  <h6 class="card-subtitle text-muted"> bgt2@rice.edu </h6>
                </a>
                <p class="card-text"> CHEM </p>
              </div>
            </div>
          </div>

          <br />
          <h1> Engineering Fellows </h1>
          <div class="table-responsive">
            <table class="table table-striped">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Major</th>
                  <th>Classes</th>
                  <th>Email</th>
                </tr>
              </thead>
              <tbody id="fellows-eng-body-table"></tbody>
            </table>
          </div>
          <br />
          <h1> Natural Science Fellows </h1>
          <div class="table-responsive">
            <table class="table table-striped">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Major</th>
                  <th>Classes</th>
                  <th>Email</th>
                </tr>
              </thead>
              <tbody id="fellows-nat-body-table"></tbody>
            </table>
          </div>
          <br />
          <h1> Humanities Fellows </h1>
          <div class="table-responsive">
            <table class="table table-striped">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Major</th>
                  <th>Classes</th>
                  <th>Email</th>
                </tr>
              </thead>
              <tbody id="fellows-hum-body-table"></tbody>
            </table>
          </div>
          <h1> Social Science Fellows </h1>
          <div class="table-responsive">
            <table class="table table-striped">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Major</th>
                  <th>Classes</th>
                  <th>Email</th>
                </tr>
              </thead>
              <tbody id="fellows-ss-body-table"></tbody>
            </table>
          </div>
          <br />
        </div>
      </div>
    </div>
  );
}
