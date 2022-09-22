var jsonPath = "./config/fellow.json";

$.getJSON(jsonPath, function( data ) {
    $.each( data, function( key, value ) {
        var tr = document.createElement("tr");
        var td_name = document.createElement("td");
        td_name.innerHTML = key;

        var td_major = document.createElement("td");
        td_major.innerHTML = value['major'];

        var td_minor = document.createElement("td");
        td_minor.innerHTML = value['minor'];

        var td_track = document.createElement("td");
        td_track.innerHTML = value['track'];

        var td_classes = document.createElement("td");
        td_classes.innerHTML = value['classes'];

        var td_email = document.createElement("td");
        td_email.innerHTML = "<a href=\"mailto:" + value['email'] + "\">" + value['email'] + "</a>";

        tr.appendChild(td_name);
        tr.appendChild(td_major);
        tr.appendChild(td_minor);
        tr.appendChild(td_track);
        tr.appendChild(td_classes);
        tr.appendChild(td_email);

        var category = value['category'];

        if (category.indexOf("Engineering") !== -1) {
            console.log("eng before: " + document.getElementById("fellows-eng-body-table").childElementCount);
            document.getElementById("fellows-eng-body-table").appendChild(tr.cloneNode(true));
            console.log("eng after: " + document.getElementById("fellows-eng-body-table").childElementCount);
        }
        if (category.indexOf( "Natural Science") !== -1) {
            console.log("ns before: " + document.getElementById("fellows-nat-body-table").childElementCount);
            document.getElementById("fellows-nat-body-table").appendChild(tr.cloneNode(true));
            console.log("ns after: " + document.getElementById("fellows-nat-body-table").childElementCount);
        }
        if (category.indexOf( "Humanities") !== -1) {
            document.getElementById("fellows-hum-body-table").appendChild(tr.cloneNode(true));
        }
        if (category.indexOf( "Social Science") !== -1) {
            document.getElementById("fellows-ss-body-table").appendChild(tr.cloneNode(true));
        }

    });
});