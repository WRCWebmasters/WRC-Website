var jsonPath = "./people.json";

$.getJSON(jsonPath, function( data ) {
    $.each( data, function( key, value ) {
        var regex = new RegExp(value['tag'], 'g');
        // console.log(value['tag'], value['value']);

        document.body.innerHTML = document.body.innerHTML.replace(regex, value['value']);
    });
});