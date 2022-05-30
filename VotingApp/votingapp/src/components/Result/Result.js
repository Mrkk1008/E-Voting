import { Component } from "react";
import Axios from "axios";
import "../../style/main.css";

export default class Result extends Component {
  state = {
    counts: 0,
  };

  componentDidMount() {
    Axios.get("http://localhost:9002/read/bjp").then((response) => {
      const bjpVotes = response.data;
      //console.log(response.data);
      this.setState({ bjpVotes });
    });

    Axios.get("http://localhost:9002/read/aap").then((response) => {
      const aapVotes = response.data;
      // console.log(bjpVotes)
      this.setState({ aapVotes });
    });

    Axios.get("http://localhost:9002/read/ncp").then((response) => {
      const ncpVotes = response.data;
      // console.log(bjpVotes)
      this.setState({ ncpVotes });
    });

    Axios.get("http://localhost:9002/read/congress").then((response) => {
      const congressVotes = response.data;
      // console.log(bjpVotes)
      this.setState({ congressVotes });
    });

    Axios.get("http://localhost:9002/read/tmc").then((response) => {
      const tmcVotes = response.data;
      // console.log(bjpVotes)
      this.setState({ tmcVotes });
    });

    Axios.get("http://localhost:9002/read/bsp").then((response) => {
      const bspVotes = response.data;
      // console.log(bjpVotes)
      this.setState({ bspVotes });
    });
    
  }

  render() {
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
              <a href="/">Home</a>
            </li>
          </ul>
        </div>
        <div className="container" style={{position: "absolute", left: "50%" , transform: "translateX(-50%)"}}>
          <h1 style={{margin: "1rem", padding:"0"}}>Result</h1>
          <table style={{ margin: "2rem 0", padding: "0" }}>
            <tr>
              <th>PARTY</th>
              <th>VOTES</th>
              <th>Percentage</th>
            </tr>
            <tr>
              <td>BJP</td>
              <td>{this.state.bjpVotes}</td>
              <td>
                {(this.state.bjpVotes * 100 / (this.state.bjpVotes +
                  this.state.aapVotes +
                  this.state.ncpVotes +
                  this.state.congressVotes +
                  this.state.tmcVotes +
                  this.state.bspVotes)).toPrecision(4)}%
              </td>
            </tr>
            <tr>
              <td>AAP</td>
              <td>{this.state.aapVotes}</td>
              <td>
                {(this.state.aapVotes * 100 /
                  (this.state.bjpVotes +
                    this.state.aapVotes +
                    this.state.ncpVotes +
                    this.state.congressVotes +
                    this.state.tmcVotes +
                    this.state.bspVotes)).toPrecision(4)}%
              </td>
            </tr>
            <tr>
              <td>NCP</td>
              <td>{this.state.ncpVotes}</td>
              <td>
                {(this.state.ncpVotes *100 /
                  (this.state.bjpVotes +
                    this.state.aapVotes +
                    this.state.ncpVotes +
                    this.state.congressVotes +
                    this.state.tmcVotes +
                    this.state.bspVotes)).toPrecision(4)}%
              </td>
            </tr>
            <tr>
              <td>CONG</td>
              <td>{this.state.congressVotes}</td>
              <td>
                {(this.state.congressVotes * 100 /
                  (this.state.bjpVotes +
                    this.state.aapVotes +
                    this.state.ncpVotes +
                    this.state.congressVotes +
                    this.state.tmcVotes +
                    this.state.bspVotes)).toPrecision(4)}%
              </td>
            </tr>
            <tr>
              <td>BSP</td>
              <td>{this.state.bspVotes}</td>
              <td>
                {(this.state.bspVotes * 100 /
                  (this.state.bjpVotes +
                    this.state.aapVotes +
                    this.state.ncpVotes +
                    this.state.congressVotes +
                    this.state.tmcVotes +
                    this.state.bspVotes)).toPrecision(4)}%
              </td>
            </tr>
            <tr>
              <td>TMC</td>
              <td>{this.state.tmcVotes}</td>
              <td>
                {(this.state.tmcVotes * 100 /
                  (this.state.bjpVotes +
                    this.state.aapVotes +
                    this.state.ncpVotes +
                    this.state.congressVotes +
                    this.state.tmcVotes +
                    this.state.bspVotes)).toPrecision(4)}%
              </td>
            </tr>
          </table>
          <br/>
          <h1>Total Votes</h1>
          <h2>
            {this.state.bjpVotes +
              this.state.aapVotes +
              this.state.ncpVotes +
              this.state.congressVotes +
              this.state.tmcVotes +
              this.state.bspVotes}
          </h2>
        </div>
        <div style={{ marginTop: "42%" }}>
          <footer className="">
            <p style={{ textAlign: "center", backgroundColor: "#66bfbf", padding:"10px 0 5px" }}>Copyright &copy; E-Voting</p>
          </footer>
        </div>
      </>
    );
  }
}
