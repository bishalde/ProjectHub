import React from "react";
import { Link } from "react-router-dom";
import "./Introbox.css";

const Introbox = () => {
  return (
    <>
    <section className="introbox">
      <div className="frontbox">
        <div className="center">
          <div className="leftbox">
            <h1>
              Learn. Build. <br />
              Share.{" "}
            </h1>
            <p>
              ProjectTree is a platform where you can share <br /> your open
              source projects with the world.
            </p>
            <Link to="/projects">Browse Projects</Link>
          </div>
        </div>
        <div className="rightbox">
          <div className="leftcontainer photobox">
            <div id="img1" className="firstimage imagediv"></div>
            <div id="img2" className="firstimage imagediv"></div>
          </div>
          <div className="middlecontainer photobox">
          <div id="img3" className="firstimage imagediv"></div>
          <div id="img4" className="firstimage imagediv"></div>
          <div id="img5" className="firstimage imagediv"></div>
          </div>
          <div className="rightcontainer photobox">
            <div id="img6" className="firstimage imagediv"></div>
            <div id="img7" className="firstimage imagediv"></div>
          </div>
        </div>
      </div>
    </section>
    <section className="information">
        <div className="info">

    <h3>Showcase your projects</h3>
    <h1>Why should you use this?</h1>
        </div>
    <div className="infocontainer">
        <div className="infobox">
            <h1>Add GitHub link</h1>
            <h3>You can add your GitHub repository link to your profile.</h3>
        </div>
        <div className="infobox">
            <h1>Share your profile</h1>
            <h3>Share your profile with your friends and colleagues.</h3>
        </div>
        <div className="infobox">
            <h1>Open Source</h1>
            <h3>This project is open source and you can contribute to it.</h3>
        </div>
        <div className="infobox">
            <h1>Free to use</h1>
            <h3>This project is free to use and you don't have to pay anything.</h3>
        </div>
    </div>
    </section>
    </>
  );
};

export default Introbox;
