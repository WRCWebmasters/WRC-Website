var jsonPath = "./config/paa.json";

$.getJSON(jsonPath, function( data ) {
    $.each( data, function( key, value ) {
        var tr = document.createElement("tr");
        var td_name = document.createElement("td");
        td_name.innerHTML = key;
        var td_subjects = document.createElement("td");
        td_subjects.innerHTML = value['subjects'];
        var td_email = document.createElement("td");
        td_email.innerHTML = "<a href=\"mailto:" + value['email'] + "\">" + value['email'] + "</a>";

        tr.appendChild(td_name);
        tr.appendChild(td_subjects);
        tr.appendChild(td_email);
        document.getElementById("paa-body-table").appendChild(tr);
    });
});