import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import creditcard from "../images/cardpayment.svg";
import "./ball.css";
import NavBar from '../components/NavBar';

function Ball() {
  return (
    <div>
      <div className="container">
        <div className="radio-wrapper">
          <input className="input" name="btn" id="value-1" type="radio" />
          <div className="btn">
            <span aria-hidden="">_</span>Cyber
            <span className="btn__glitch" aria-hidden="">_Cyber🦾</span>
            <label className="number">r1</label>
          </div>
        </div>
        <div className="radio-wrapper">
          <input className="input" name="btn" id="value-2" checked={true} type="radio" />
          <div className="btn">
            _Radio<span aria-hidden="">_</span>
            <span className="btn__glitch" aria-hidden="">_R_a_d_i_o_</span>
            <label className="number">r2</label>
          </div>
        </div>
        <div className="radio-wrapper">
          <input className="input" name="btn" id="value-3" type="radio" />
          <div className="btn">
            Buttons<span aria-hidden=""></span>
            <span className="btn__glitch" aria-hidden="">Buttons_</span>
            <label className="number">r3</label>
          </div>
        </div>
      </div>

      <div className="bar">
        <div className="ball"></div>
      </div>
    </div>
  );
}

export default Ball;
