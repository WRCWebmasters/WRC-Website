var jsonPath = "./config/strive.json";

$.getJSON(jsonPath, function( data ) {
    $.each( data, function( key, value ) {
        var outer = document.createElement("div");
        outer.className = "card";
        var body = document.createElement("div");
        body.className = "card-body";
        var title = document.createElement("h3");
        title.className = "card-title";
        title.innerHTML = key;
        var year = document.createElement("h5");
        year.className = "card-title text-muted";
        year.innerHTML = value["year"];
        var email = document.createElement("h6");
        email.className = "card-subtitle text-muted";
        email.innerHTML = "<a href=\"mailto:" + value["email"] + "\">" + value["email"] + "</a>";


        body.appendChild(title);
        body.appendChild(year);
        body.appendChild(email);
        outer.appendChild(body);
        document.getElementById("strive-card-group").appendChild(outer);
    });
});