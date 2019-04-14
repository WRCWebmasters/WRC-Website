var people = {};
var jsonPath = "./people.json";

$.getJSON(jsonPath, function( data ) {
    $.each( data, function( key, val ) {
        people[key] = val;
    });

    for (const [ key, value ] of Object.entries(people)) {
        var regex = new RegExp(value['tag'], 'g');
        // console.log(value['tag'], value['value']);

        document.body.innerHTML = document.body.innerHTML.replace(regex, value['value']);
    }
});