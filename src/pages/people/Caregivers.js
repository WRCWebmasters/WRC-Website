import React from "react";

export default function Caregivers() {
  return (
    <div className="container">
      <div className="row page-title">
        <div className="col">Caregivers</div>
      </div>

      <div className="row">
        <div className="col">
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
          <div className="card-group">
            <div className="card">
              <div className="card-body">
                <h3 className="card-title"> @caregiver1 </h3>
                <a href="mailto:@email-caregiver1">
                  <h6 className="card-subtitle text-muted"> @email-caregiver1 </h6>
                </a>
              </div>
            </div>

            <div className="card">
              <div className="card-body">
                <h3 className="card-title"> @caregiver2 </h3>
                <a href="mailto:@email-caregiver2">
                  <h6 className="card-subtitle text-muted"> @email-caregiver2 </h6>
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
