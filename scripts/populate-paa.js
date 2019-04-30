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
        subjects.innerHTML = value["subjects"];


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
        var td_subjects = document.createElement("td");
        td_subjects.innerHTML = value["subjects"];
        var td_email = document.createElement("td");
        td_email.innerHTML = "<a href=\"mailto:" + value["email"] + "\">" + value["email"] + "</a>";

        tr.appendChild(td_name);
        tr.appendChild(td_subjects);
        tr.appendChild(td_email);
        document.getElementById("paa-body-table").appendChild(tr);
    });
});