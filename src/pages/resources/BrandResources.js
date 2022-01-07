import React from "react";

import classic from "../../resources/wrc-logos/classic-crest-transparent [png].png";
import centenial from "../../resources/wrc-logos/centenial-crest-transparent [png].png"

export default function BrandResources() {
  return (
    <>
      <div class="container">
        <div class="row page-title">
          <div class="col">Brand Resources</div>
        </div>
        <div class="row content">
          <div class="col-md-6">
            <h2> Classic Phoenix </h2>
            {/* Hard coding some margins to make the two logos align vertically*/}
            <img
              src={classic}
              alt="Classic crest wrc logo png"
              style={{ width: "100%", marginTop: "14.5%", marginBottom: "15%" }}
            />
            <ul class="list-group">
              <a href="../resources/wrc-logos/classic-crest [ai].ai">
                <li class="list-group-item">Classic Logo [.ai]</li>
              </a>
              <a href="../resources/wrc-logos/classic-crest [eps].eps">
                <li class="list-group-item">Classic Logo [.eps]</li>
              </a>
              <a href="../resources/wrc-logos/classic-crest-color [png].png">
                <li class="list-group-item">Classic Logo Color [.png]</li>
              </a>
              <a href="../resources/wrc-logos/classic-crest-transparent [png].png">
                <li class="list-group-item">Classic Logo Transparent [.png]</li>
              </a>
            </ul>
          </div>
          <div class="col-md-6">
            <h2> Centential </h2>
            <img
              src={centenial}
              alt="Centenial crest logo png"
              style={{ width: "100%" }}
            />
            <ul class="list-group">
              <a href="../resources/wrc-logos/centenial-crest [ai].ai">
                <li class="list-group-item">Centenial Logo [.ai]</li>
              </a>
              <a href="../resources/wrc-logos/centenial-crest [eps].eps">
                <li class="list-group-item">Centenial Logo [.eps]</li>
              </a>
              <a href="../resources/wrc-logos/centenial-crest-bw [png].png">
                <li class="list-group-item">Centenial Logo B/W [.png]</li>
              </a>
              <a href="../resources/wrc-logos/centenial-crest-transparent [png].png">
                <li class="list-group-item">
                  Centenial Logo Transparent [.png]
                </li>
              </a>
            </ul>
          </div>
        </div>
        <div class="row content">
          <div class="col-md-6">
            <h1 style={{ color: "#C03720" }}>Rust Hex Code: #C03720</h1>
          </div>
          <div class="col-md-6">
            <h1 style={{ color: "#FECC37" }}>Gold Hex Code: #FECC37</h1>
          </div>
        </div>
      </div>
    </>
  );
}
