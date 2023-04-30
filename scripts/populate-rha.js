var jsonPath = "./config/rha.json";
var imagePath = "../resources/images/rha/";

$.getJSON(jsonPath, function( data ) {
    $.each( data, function( key, value ) {
        var col = document.createElement("div");
        col.className = "col"
        var card = document.createElement("div");
        card.className = "card"
        var body = document.createElement("div");
        body.className = "card-body"
        var row = document.createElement("div");
        row.className = "row";
        var image_container = document.createElement("div");
        let imageName = `${key.replace(" ", "_")}.jpg`;
        image_container.innerHTML = "<img class=\"card-img-top col-r\" src=\"" + imagePath + imageName + "\" alt=\"" + key + "\">";
        var text_container = document.createElement("div");
        text_container.className = "col-9 col-sm-12";
        let name = `<a href="mailto:${value["email"]}"><h3 class="card-title"> ${key} </h3></a>`;
        let position = `<h5>${value["position"]}</h5>`;
        let year_major = `<h6>${value["year_major"]}</h6>`;
        let email_phone = `<h6>${value["email"]} | ${value["phone"]}</h6>`
        text_container.innerHTML = name + year_major + email_phone;
        row.appendChild(image_container);
        row.appendChild(text_container);
        body.appendChild(row);
        card.appendChild(body);
        col.appendChild(card);

        if(value["position"]) document.getElementById("head-rha-card-group").appendChild(col);
        else document.getElementById("rha-card-group").appendChild(col);
    });
});