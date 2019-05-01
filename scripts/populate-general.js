var jsonPath = "./config/general.json";

$.getJSON(jsonPath, function( data ) {
    $.each( data, function( key, value ) {
        var regex = new RegExp(value['tag'], 'g');
        document.body.innerHTML = document.body.innerHTML.replace(regex, value['value']);
    });
});