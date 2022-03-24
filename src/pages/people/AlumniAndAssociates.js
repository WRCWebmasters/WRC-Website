import React, { useState, useEffect } from "react";

import AssociateCard from "../../components/AssociateCard";

import { csv } from "d3";
import associatesData from "../../resources/associates-script/associates.csv";

export default function AlumniAndAssociates() {
  const [associates, setAssociates] = useState({});
  const [loading, setLoading] = useState(true);

  const faculty = new RegExp(" *Faculty *Associates? *");
  const community = new RegExp(" *Community *Associates? *");
  useEffect(() => {
    csv(associatesData).then((data) => {
      setAssociates(data);
    });
    setLoading(false);
  });

  return (
    <>
      {loading ? (
        <p>hi</p>
      ) : (
        <div className="body">
          <div className="container">
            <div className="row page-title">
              <div className="col">Alumni + Associates</div>
            </div>
            <div className="row content">
              <div className="col">
                <h1>Alumni</h1>
                <p>
                  Stay up to date by joining the alumni mailing list!{" "}
                  <a
                    target="_blank"
                    href="https://goo.gl/forms/Y8CIhxAaXtihDlIg2"
                  >
                    Click here to sign up.
                  </a>
                </p>
              </div>
            </div>
            <div className="row content">
              <div className="col">
                <h1>Associates</h1>
                <p>
                  Will Rice has an extensive network of faculty, alumni, and
                  community mentors called Associates. They help students find
                  new opportunities for growth outside of campus via
                  volunteering, field trips, and common interest activities.
                  Furthermore, Associates have a chance to participate in Rice’s
                  unique college system and make lasting connections with
                  current students. If you are interested in becoming an
                  Associate, please contact Dale Thomas at{" "}
                  <a href="mailto:wrc@rice.edu">wrc@rice.edu</a>).
                </p>
              </div>
            </div>
            {Object.entries(associates)
              .filter((data, idx) => faculty.test(data[1]["Category"]))
              .map((data, idx) => (
                <AssociateCard
                  name={data[1]["Name"]}
                  desc={JSON.stringify(data)}
                />
              ))}
            {Object.entries(associates)
              .filter(
                (data, idx) => community.test(data[1]["Category"])
              )
              .map((data, idx) => (
                <AssociateCard
                  name={data[1]["Name"]}
                  desc={JSON.stringify(data)}
                />
              ))}
            {Object.entries(associates)
              .filter(
                (data, idx) => community.test(data[1]["Category"])
              )
              .map((data, idx) => (
                <AssociateCard
                  name={data[1]["Name"]}
                  desc={JSON.stringify(data)}
                />
              ))}
          </div>
        </div>
      )}
    </>
  );
}
