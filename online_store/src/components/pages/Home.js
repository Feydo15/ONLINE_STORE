import React from "react";

import Filters from '../Filters';


export function Home() {

    return (
      <div className="home">
      <h1>Home</h1>
    <div className="App">
      <section id="home">
        <div className="main">
          <h1 className="heading">
            F T C.co <br />
            <h3>Giving You The Best In Everything.!!</h3>
            Fashion & Clothing Store
          </h1>
          <button
            className="btn"
          >
            LOG IN
          </button>
        </div>
      </section>
      <section id="newline">
          <h1 className="heading" style={{ "background-color": "blue" }}>New Line</h1>
          <div className="productContainer">
      </div>
        </section>
        <section>
        <h1 className="heading" style={{ "background-color": "blue" }}>Browser</h1>
       <Filters />
       <div className="productContainer">
     </div>
        </section>
      <section id="contact">
        <h1 className="heading">CONTACT</h1>
        <form action="" className="form">
          <input
            type="text"
            name="name"
            className="input"
            placeholder="Enter Your Name"
          />
          <input
            type="email"
            name="email"
            className="input"
            placeholder="Enter Your Email"
          />
          <textarea
            name="msg"
            id="msg"
            cols="30"
            rows="10"
            placeholder="Enter Your Message"
          ></textarea>
          <input type="submit" value="send" id="send" />
        </form>
      </section>
    </div>
  </div>
);
};
