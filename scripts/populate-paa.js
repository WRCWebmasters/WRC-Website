var jsonPath = "./config/paa.json";

$.getJSON(jsonPath, function( data ) {
    $.each( data["head"], function( key, value ) {
        var outer = document.createElement("div");
        outer.className = "card";
        var body = document.createElement("div");
        body.className = "card-body";
        var title = document.createElement("h3");
        title.className = "card-title";
        title.innerHTML = key;
        var email = document.createElement("h6");
        email.className = "card-subtitle text-muted";
        email.innerHTML = "<a href=\"mailto:" + value["email"] + "\">" + value["email"] + "</a>";
        var subjects = document.createElement("p");
        subjects.className = "card-text";
        subjects.innerHTML =
            "Major: " + (value["major"] || "") + "<br>" +
            "Minor: " + (value["minor"] || "") + "<br>" +
            "Track: " + (value["track"] || "") + "<br>" + 
            "Year: " + (value["year"] || "");


        body.appendChild(title);
        body.appendChild(email);
        body.appendChild(subjects);
        outer.appendChild(body);
        document.getElementById("head-paa-card-group").appendChild(outer);
    });

    $.each( data["yearlong"], function( key, value ) {
        var tr = document.createElement("tr");
        var td_name = document.createElement("td");
        td_name.innerHTML = key;
        var td_major = document.createElement("td");
        td_major.innerHTML = value["major"];
        var td_minor = document.createElement("td");
        td_minor.innerHTML = value["minor"];
        var td_track = document.createElement("td");
        td_track.innerHTML = value["track"];
        var td_year = document.createElement("td");
        td_year.innerHTML = value["year"];
        var td_email = document.createElement("td");
        td_email.innerHTML = "<a href=\"mailto:" + value["email"] + "\">" + value["email"] + "</a>";

        tr.appendChild(td_name);
        tr.appendChild(td_major);
        tr.appendChild(td_minor);
        tr.appendChild(td_track);
        tr.appendChild(td_year);
        tr.appendChild(td_email);
        document.getElementById("paa-body-table").appendChild(tr);
    });
});