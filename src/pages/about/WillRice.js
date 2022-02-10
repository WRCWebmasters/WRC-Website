import React, { useEffect } from "react";

export default function WillRice() {
  useEffect(() => {
    document.title = "Beer Bike";
  });

  return (
    <>
      <div className="body">body</div>
    </>
  );
}
