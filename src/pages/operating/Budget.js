import React from "react";

export default function Budget() {
  return (
    <div class="container">
      <div class="page-title">
        Budget and Spending
      </div>
      <div class="row">
        <div class="col">
          <div
            class="btn-group btn-group-lg btn-group-flex"
            role="group"
            aria-label="Basic example"
          >
            <button type="button" class="btn">
              <a href="#financial_advice">Financial Advice</a>
            </button>
            <button type="button" class="btn">
              <a href="#expense_tracker">Expense Tracker</a>
            </button>
            <button type="button" class="btn">
              <a href="#budget_tracker">Budget Tracker</a>
            </button>
            <button type="button" class="btn">
              <a href="#venmo_rules">Venmo Rules</a>
            </button>
          </div>
        </div>
      </div>
      <div class="row content">
        <div class="col-12">
          <br />
          <div style={{ position: "relative", top: "20px" }}>
            <ul>
              <li>
                The treasurers (Krithi Pachipala and Ariadna Gomez) allocate
                budget, maintain budget through financial records, answer lots
                of questions, and try to increase transparency of spending
                within the college.
              </li>
              <li>
                What does the budget look like? usually: given approx, $45,000 a
                year, allocate budget in consultation with different groups at
                Will Rice.
              </li>
              <li>
                At the beginning of school year, the treasurers present the
                proposed budget at Diet and voting members will vote on it to
                approve it
              </li>
            </ul>
          </div>

          <div style={{ paddingTop: "80px" }} id="financial_advice">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://docs.google.com/document/d/1SGNlw4tdvEVXJAXwyEtpHicg5Ji0Itk5/edit?rtpof=true&sd=true"
            >
              <h4>Financial Advice</h4>
            </a>
          </div>
          <iframe
            src="https://docs.google.com/document/d/1SGNlw4tdvEVXJAXwyEtpHicg5Ji0Itk5/pub?embedded=true"
            width="100%"
            height="600px"
            title="Financial Advice for Will Rice
          "
          ></iframe>
          <div style={{ paddingTop: "80px" }} id="expense_tracker">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://docs.google.com/forms/d/e/1FAIpQLSdFtVcCvAsIRfCDpFSeaCncyrgVigATBIL7Z8Vf2Yi_j1xu4w/viewform"
            >
              <h4>Expense Tracker Form</h4>
            </a>
          </div>
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSdFtVcCvAsIRfCDpFSeaCncyrgVigATBIL7Z8Vf2Yi_j1xu4w/viewform?usp=send_form
            ?embedded=true"
            width="100%"
            height="600px"
            title="Expense Tracker"
          ></iframe>
          <div style={{ paddingTop: "80px" }} id="budget_tracker">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://docs.google.com/spreadsheets/d/11BdgAPupbsMwbu1t9GM48JMhpixfxLo_JcwoGbZQLfQ/edit#gid=824006481"
            >
              <h4>Budget Tracker</h4>
            </a>
          </div>
          <iframe
            src="https://docs.google.com/spreadsheets/d/11BdgAPupbsMwbu1t9GM48JMhpixfxLo_JcwoGbZQLfQ/edit#gid=824006481?embedded=true"
            width="100%"
            height="600px"
            title="Budget Tracker"
          ></iframe>
          <div style={{ paddingTop: "80px" }} id="venmo_rules">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://docs.google.com/document/d/12xdx8PRStMMR4F89ywEJEsQlUDxlLXb-gBZPgjuMrsU/edit"
            >
              <h4>Venmo Rules</h4>
            </a>
          </div>
          <iframe
            src="https://docs.google.com/document/u/1/d/e/2PACX-1vTFW1azckRzjIoqe8AR9b4rdbjVSaOi4LI92xky6W54jMSkuHpRZFoCsmEZLiBKjeOyMfwwd7BmGDCK/pub?embedded=true"
            width="100%"
            height="600px"
            title="Budget Tracker"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
