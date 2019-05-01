var jsonPath = "./config/leadership.json";

$.getJSON(jsonPath, function( data ) {
    $.each( data["order"], function(_, sectionName) {
        value = data[sectionName];

        var titleAndTable = document.createElement("div");
        var title = document.createElement("h2");
        title.innerHTML = sectionName;
        var outer = document.createElement("div");
        outer.className = "table-responsive";
        var body = document.createElement("table");
        body.className = "table table-striped";
        var header = document.createElement("thead");
        var headerRow = document.createElement("tr");
        var officeHeader = document.createElement("th");
        officeHeader.innerHTML = "Office";
        var nameHeader = document.createElement("th");
        nameHeader.innerHTML = "Name";
        var tbody = document.createElement("tbody");

        var hasEmail = false;
        if (value.length > 0) { // Only create the table if there are entries. Blank entries signify 
            for (i = 0; i < value.length; i++) {
                var row = document.createElement("tr");
                var role = document.createElement("td");
                role.innerHTML = value[i].role;
                var name = document.createElement("td");
                name.innerHTML = value[i].names;
                row.appendChild(role);
                row.appendChild(name);
                if (value[i]["email"]) {
                    var email = document.createElement("td");
                    email.innerHTML = "<a href=mailto:" + value[i]["email"] + ">" + value[i]["email"] + "</a>";
                    row.appendChild(email);
                    hasEmail = true;
                }
                tbody.appendChild(row);
            }
            
            headerRow.appendChild(officeHeader);
            headerRow.appendChild(nameHeader);
            if (hasEmail) {
                var emailHeader = document.createElement("th");
                emailHeader.innerHTML = "Email";
                headerRow.appendChild(emailHeader);
            }
            header.appendChild(headerRow);
            body.appendChild(header);

            body.appendChild(tbody);
            outer.appendChild(body);
        }
        titleAndTable.appendChild(title);
        titleAndTable.appendChild(outer);

        document.getElementById("people-container").appendChild(titleAndTable);
    })
});