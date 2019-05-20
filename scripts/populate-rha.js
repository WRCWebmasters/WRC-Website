var jsonPath = "./config/rha.json";
var imagePath = "../resources/images/rha/";

$.getJSON(jsonPath, function( data ) {
    $.each( data, function( key, value ) {
        var card = document.createElement("div");
        card.className = "card"
        var body = document.createElement("div");
        body.className = "card-body"
        var row = document.createElement("div");
        row.className = "row";
        var image_container = document.createElement("div");
        image_container.className = "col-3 col-sm-12";
        let imageName = `${key.replace(" ", "_")}.jpg`;
        image_container.innerHTML = "<img class=\"card-img-top\" src=\"" + imagePath + imageName + "\" alt=\"" + key + "\">";
        var text_container = document.createElement("div");
        text_container.className = "col-9 col-sm-12";
        let name = `<a href="mailto:${value["email"]}"><h4 class="card-title"> ${key} </h4></a>`;
        let major = `<h5>${value["major"]}</h5>`;
        let topics = `<p>${value["topics"]}</p>`;

        text_container.innerHTML = name + major + topics;
        row.appendChild(image_container);
        row.appendChild(text_container);
        body.appendChild(row);
        card.appendChild(body);

        document.getElementById("rha-card-group").appendChild(card);
    });
});