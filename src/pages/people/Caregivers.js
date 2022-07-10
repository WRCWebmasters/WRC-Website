import React from "react";

export default function Caregivers() {
  return (
    <div class="container">
      <div class="row page-title">
        <div class="col">Caregivers</div>
      </div>

      <div class="row">
        <div class="col">
          <h1> About </h1>
          <p>
            Many events registered with SJP will be required to have trained
            Rice Caregivers. Generally, large events, including Pub Nights and
            public parties, will require the presence of trained Caregivers;
            some SJP-registered events will not require Caregivers. SJP will
            evaluate the event and exercise its judgment and discretion as to
            whether an event needs trained Caregivers in order for SJP to
            approve it. <br />
            <br />
            While only some events will require trained Caregivers, Rice has an
            expectation that all students will always work within the culture of
            care to maintain the safety of each member of the community and the
            community as a whole.
          </p>

          <h1> Head Caregivers </h1>
          <div class="card-group">
            <div class="card">
              <div class="card-body">
                <h3 class="card-title"> @caregiver1 </h3>
                <a href="mailto:@email-caregiver1">
                  <h6 class="card-subtitle text-muted"> @email-caregiver1 </h6>
                </a>
              </div>
            </div>

            <div class="card">
              <div class="card-body">
                <h3 class="card-title"> @caregiver2 </h3>
                <a href="mailto:@email-caregiver2">
                  <h6 class="card-subtitle text-muted"> @email-caregiver2 </h6>
                </a>
              </div>
            </div>
          </div>
          <br />
        </div>
      </div>
    </div>
  );
}
