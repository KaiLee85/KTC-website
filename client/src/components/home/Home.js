import React from "react";
import "./home.css";
function Home() {
  return (
    <>
      <div className="homeWrap">
        {" "}
        <div className="intro">
          {" "}
          <p>
            We are here to <span className="emph">create project</span> and keep
            developing
            <span className="emph"> something creative.</span>
          </p>
        </div>
        <div className="featureBtn">
          <button>Go Chat board</button>
          <button>Go Schedule board</button>
        </div>
      </div>
    </>
  );
}

export default Home;
