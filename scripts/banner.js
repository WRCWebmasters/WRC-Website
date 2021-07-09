var placeholder = document.querySelector("#banner-placeholder").dataset.replacewith;

var bannerContent = `
<div class = "banner">${placeholder}</div>
`;

let bannerElement = document.createElement("div");
bannerElement.innerHTML = bannerContent;
document.getElementById("banner-placeholder").appendChild(bannerElement);

// var constitutionContent = ``

// let constitutionElement = document.createElement("div");
// BLMelement.innerHTML = constitutionContent;
// document.getElementById("constitutionBanner").appendChild(constitutionElement);