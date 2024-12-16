import React from "react";

function Flag() {
  return (
    <>
      <div className="container">
        <h1>🇨🇲 Cameroon Flag</h1>
        <div className="flag">
          <div className="stripe green"></div>
          <div className="stripe red">
            <div className="star">★</div>
          </div>
          <div className="stripe yellow"></div>
        </div>
      </div>
      <div className="footer"> &copy; Achapi Pentashi </div>
    </>
  );
}

export default Flag;
