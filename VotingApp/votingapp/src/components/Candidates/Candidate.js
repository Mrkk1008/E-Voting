import React from "react";


function Candidate(props) {
  return (
    <>
      {/* <div className="vote-panel">
        <div className="vote-title"><h1>{props.name}</h1></div>
        <div className="vote-info">
          <img src={props.img} alt="" className="vote-image" />
          <div className="vote-desc">{props.desc}</div>
        </div>
        <div className="vote-radio">
          <input type="radio" name="vote1" id="" className="vote-input-radio form-check-input" value={props.name} /> <label style={{ fontWeight: "bolder" }}>Select To Vote</label>
        </div>

      </div> */}
      <div className="middle-row">
        <img className="userfriendly-img" src={props.img} alt="userfriendly-img"></img>
        <h2>{props.name}</h2>
        <p> {props.desc}</p>
          <br/>
        <input type="radio" name="vote" className="vote-input-radio form-check-input" value={props.name} />  <label style={{ fontWeight: "bolder" }}>Select To Vote</label>
      </div>
    </>
  );
}

export default Candidate;

