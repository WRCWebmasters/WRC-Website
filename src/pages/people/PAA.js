import React from "react";

export default function PAA() {
  return (
    <div class="container">
      <div class="row page-title">
        <div class="col">Peer Academic Advisors</div>
      </div>

      <br />

      <div class="row">
        <div class="col">
          <h1> About </h1>
          <p>
            Will Rice's Peer Academic Advisors, or PAAs, combine detailed
            knowledge of university academic policies with the personal academic
            experiences of Rice students. These students have been thoroughly
            trained to offer accurate advice regarding specific classes,
            research opportunities, studying abroad, and academic rules,
            regulations, and procedures. Even if PAAs cannot answer every
            question, they will help students find someone who can. <br />
            <br />
            If you need help with course selection, meeting graduation
            requirements or other academic issues, feel free to talk to any of
            the PAAs listed here. The PAAs also host study breaks before each
            course registration period for you to ask questions about classes
            and requirements.
          </p>

          <h1> Head PAAs </h1>
          <div class="card-group" id="head-paa-card-group">
            {/* Below is an example entry in this card group. The group is dynamically populated via JS (see config/paa.csv and scripts/populate-paa.js)  -->
                <div class="card">
                    <div class="card-body">
                        <h3 class="card-title"> Priyanka Jain </h3>
                        <a href="mailto:pj7@rice.edu"><h6 class="card-subtitle text-muted"> pj7@rice.edu </h6></a>
                        <p class="card-text"> Computer Science, Visual and Dramatic Arts </p>
                    </div>
            </div> */}
          </div>
          <br />
          <h1> Year-Long PAAs </h1>
          <div class="table-responsive">
            <table class="table table-striped">
              <thead>
                <tr>
                  <th>Year-long PAAs</th>
                  <th>Subjects</th>
                  <th>Email</th>
                </tr>
              </thead>
              <tbody id="paa-body-table">
                {/*Below is an example entry in this table. The table is dynamically populated via JS (see config/paa.csv and scripts/populate-paa.js)  -->
                    <tr>
                        <td>Juliana Ganim</td>
                        <td>Psychology, Pre-Law</td>
                        <td><a href="mailto:agf2@rice.edu">agf2@rice.edu</a></td>
                </tr>*/}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
