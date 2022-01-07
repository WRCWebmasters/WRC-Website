import React, {useEffect} from "react";

export default function BeerBike() {
  useEffect(() => {
   document.title = "Beer Bike"
});

  return (
    <>
      <div className="body">body</div>
    </>
  );
}

