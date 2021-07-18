//Displayed in home page
var BLMcontent = `<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Black Lives Matter Statement</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
      <img
            src="../resources/images/blm.jpeg"
            width="100%"
            alt="BLM pic"
          />
        In light of the recent violence against the Black community—the
            senseless killings of George Floyd, Ahmaud Arbery, Breonna Taylor,
            and John Neville—Will Rice would like to unequivocally express our
            support for the Black Lives Matter movement and denounce any form of
            racism. While these murders have occurred in other places, we
            acknowledge that the Rice community is certainly not immune to both
            microaggressions and overt acts of racism. <br /><br />
            We are committed to promoting and engaging anti-racism at Will Rice.
            We hope to take action and create new initiatives that encourage
            non-Black Will Ricers to actively engage in dialogue and foster an
            environment that constantly supports our Black Will Ricers. We
            condemn any racist behavior that does not align with Will Rice
            values of equality and inclusivity. We strive to keep our Black Will
            Ricers safe and comfortable, a right that all students deserve to
            have.
            <br /><br />
            We must hear the voices of our Black students, practice empathy, and
            do anything in our power to support them. We must not speak over
            them but should elevate their voices, their stories, and their
            priorities. In doing so, we aim to be advocates and allies for the
            Black community at Will Rice, Rice University, and this country. We
            can no longer remain silent and complicit. Like the Phoenix, we must
            rise up and evolve to be a more anti-racist and inclusive Will Rice.
            We stand with BLM, and we stand with our Black students.
            
      </div>
      <div class="modal-footer">
      Last updated 07/10/21
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div></div>`;

let BLMelement = document.createElement("div");
BLMelement.innerHTML = BLMcontent;
document.getElementById("BLM").appendChild(BLMelement);