import React from "react";

export default function Strive() {
  return (
    <div class="container">
      {/* Overwrite font size b/c the title's so long */}
      <div class="row page-title" style={{ fontSize: "3vw" }}>
        <div class="col">
          Students Transforming Rice Into a Violence-Free Environment (STRIVE)
        </div>
      </div>

      <div class="row">
        <div class="col">
          <h1> About </h1>
          <p>
            STRIVE Coalition is a dedicated group of students who have come
            together to address sexual and domestic violence on campus. The
            Coalition is made up of an executive board, STRIVE liaisons to
            colleges, STRIVE liaisons to graduate programs, STRIVE
            representatives in a variety of student groups, and volunteers. The
            Coalition is advised by the Office of Sexual Violence Prevention and
            Title IX Support. We envision a world that is free from inequality
            and violence, where every person experiences sexuality and
            relationships in healthy and positive ways. STRIVE is a
            student-driven coalition that empowers all members of the Rice
            community to play an active role in eliminating gender-based
            inequality and sexual violence.
            <br />
            <br />
            We are liaisons both to the colleges and the graduate programs and
            are specially trained students who host prevention activities and
            seek to support students by providing information about resources
            available on and off campus.
          </p>

          <h1> Liaisons </h1>
          <div class="card-group" id="strive-card-group">
            {/*<div class="card">
                    <div class="card-body">
                        <h3 class="card-title"> Anna Cole </h3>
                        <h4 class ="card-subtitle text-muted"> Senior </h4>
                        <a href="mailto:acc17@rice.edu"><h6 class="card-subtitle text-muted"> acc17@rice.edu </h6></a>
                    </div>
                </div>

                <div class="card">
                    <div class="card-body">
                        <h3 class="card-title"> Mandy Quan </h3>
                        <h4 class ="card-subtitle text-muted"> Senior </h4>
                        <a href="mailto:aiq2@rice.edu"><h6 class="card-subtitle text-muted"> aiq2@rice.edu </h6></a>
                    </div>
                </div>*/}
          </div>
        </div>
      </div>
    </div>
  );
}
