/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Candidate from "../Candidates/Candidate";
import Axios from "axios";
//import { useHistory } from "react-router-dom";
import "../../style/main.css";

const Homepage = ({ user, setLoginUser }) => {
  //const history = useHistory();

  const addVote = (e) => {
    e.preventDefault();
    // console.log("hii");
    let _party; 
    const inputRadio = Array.from(
      document.querySelectorAll(".vote-input-radio")
    );
    inputRadio.forEach((element) => {
      if (element.checked === true) {
        _party = element.value;
      }
    });
    console.log(_party);
    Axios.post("http://localhost:9002/insert", {
      userId: user._id,
      vote: true,
      party: _party,
    }).then((res) => {
      if(!_party){
        alert(res.data.message);
      }else{
        alert(res.data.message);
        //history.push("/login");
        setLoginUser({});
      }
    });
  };

  // const submit = (e) => {
  //   e.preventDefault();

  // };
  return (
    <>
      <div>
        <ul className="nav">
          <li>
            <img
              src="https://i.ibb.co/9rTQj3m/Logo.jpgg"
              height="60px"
              alt="logo"
            />
          </li>
          <li>
            <h4 style={{marginLeft: "20px"}}>Welcome {user.name}</h4>
          </li>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="#vote">Vote!</a>
          </li>
          <li>
            <a href="/result">Result</a>
          </li>
          <li style={{ float: "right" }}>
            <a href="#" onClick={() => setLoginUser({})} >Logout</a>
          </li>
        </ul>
      </div>
      <div className="top-container">
        <div>
          <img
            className="homepage-img"
            src="https://i.ibb.co/wCqnFqh/e-voting.jpg"
            alt="homepage-img"
          ></img>
          <h2>ELECTIONS</h2>
          <h3>Vote for a better Tomorrow.</h3>
          <p>
            ELECTIONS is an Electronic Voting system which allows electronic
            casting and counting of votes in a secured and user friendly manner.
          </p>
        </div>
      </div>
      <form className="vote-form">
        <div className="middle-container" id="vote">
          <Candidate
            name="BJP"
            user={user.name}
            img="https://i.ibb.co/WPtc9GS/bjp.png"
            desc="The BJP's origin lies in the Bharatiya Jana Sangh, formed in 1951 by Shyama Prasad Mukherjee.[45] After the State of Emergency in 1977, the Jana Sangh merged with several other parties to form the Janata Party; it defeated the incumbent Congress party in the 1977 general election."
          />
          <Candidate
            name="CONGRESS"
            user={user.name}
            img="https://i.ibb.co/7xftZpx/congress.png"
            desc="(INC) is a political party in India with widespread roots. Founded in 1885, it was the first modern nationalist movement to emerge in the British Empire in Asia and Africa. ... There have been six Congress Prime Ministers, the first being Jawaharlal Nehru (1947–1964), and the most recent Manmohan Singh (2004–2014)."/>
          <Candidate
            name="AAP"
            user={user.name}
            img="https://i.ibb.co/5hJBrmt/aap.jpg"
            desc="Aam Aadmi Party (AAP; transl. Common Man's Party) is a political party in India, founded in 2012.Formally launched in November 2012, AAP came into existence following differences between activists Arvind Kejriwal and Anna Hazare regarding whether or not to politicise the popular India Against Corruption movement that had been demanding a Jan Lokpal Bill since 2011."
          />
          <Candidate
            name="NCP"
            user={user.name}
            img="https://i.ibb.co/Zh0x3mb/ncp.jpg"
            desc="The NCP was formed on 25 May 1999, by Sharad Pawar, P. A. Sangma, and Tariq Anwar after they were expelled from the Indian National Congress (INC) on 20 May 1999, for disputing the right of Italian-born Sonia Gandhi to lead the party. ... The party remained part of the Congress led Maharashtra state government until 2014."
          />
          <Candidate
            name="BSP"
            user={user.name}
            img="https://i.ibb.co/ydgtypQ/bsp.png"
            desc="The Bahujan Samaj Party (BSP) is a national level political party in India that was formed to represent Bahujans (literally means  people in majority), referring to Scheduled Castes, Scheduled Tribes, and Other Backward Classes (OBC), along with religious minorities."
          />
          <Candidate
            name="TMC"
            user={user.name}
            img="https://i.ibb.co/9wLQCvS/tmc.jpg"
            desc="AITC or TMC; transl. All India Grassroots Congress) is an Indian political party which is predominantly active in West Bengal. The party is led by Chief Minister of West Bengal Mamata Banerjee, who has led the state since 2011. It is currently the fifth-largest party in the Lok Sabha with 21 seats."
          />
          <div className="submit-vote">
            <button type="submit" className="main-submit" onClick={addVote}>
              SUBMIT
            </button>
          </div>
        </div>
        <div class="bottom-container">
          <p class="copyright">© 2021 E-Voting system.</p>
        </div>
      </form>
    </>
  );
};

export default Homepage;
