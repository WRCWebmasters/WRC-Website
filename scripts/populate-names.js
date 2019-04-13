var people = {};
var jsonPath = "./people.json";

$.getJSON(jsonPath, function( data ) {
    $.each( data, function( key, val ) {
        people[key] = val;
    });

    document.body.innerHTML = document.body.innerHTML.replace(/@coordinator/g, people['coordinator']['value']);
    document.body.innerHTML = document.body.innerHTML.replace(/@email-coordinator/g, people['coordinator']['email']);
});