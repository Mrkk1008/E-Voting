import React, { useState, useEffect } from "react";
//import {Redirect } from "react-router-dom";
import Axios from "axios";
import "./adminCss.css";
import { AdminNavBar } from "./AdminNavBav";

function Admin(props) {
  const [newUserName, setnewUserName] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [newAadhaarNo, setNewAadhaarNo] = useState(0);
  //const [password, setPasword] = useState(0);
  //const history = useHistory();

  const [userList, setUserList] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:9002/readUser").then((response) => {
      setUserList(response.data);
    });
  }, []);

  const updateData = (id) => {
    Axios.put("http://localhost:9002/updateUser", {
      id: id,
      newUserName: newUserName,
      newEmail: newEmail,
      newAadhaarNo: newAadhaarNo,
    }).then((res) => {
      window.location.reload();
    });
  };


  const deleteData = (id) => {
    Axios.delete(`http://localhost:9002/delete/${id}`).then((res) => {
      console.log(res.data);
      window.location.reload();
    });;
  };

  return (
    <>
    <AdminNavBar/>
      <div
        className="container"
        style={{
          position: "absolute",
          left: "50%",
          transform: "translateX(-50%)",
        }}
      >
        <h1 style={{ margin: "1rem", padding: "0" }}>Users</h1>
        {userList.map((val, key) => {
          return (
            <table style={{ margin: "2rem 0", padding: "0" }}>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Aadhaarno</th>
                <th>Delete</th>
                <th>Update</th>
              </tr>
              <tr>
                <td>
                  {val.name}
                  <input
                    type="text"
                    placeholder="Enter New Name if you want to change"
                    onChange={(event) => {
                      setnewUserName(event.target.value);
                    }}
                  />
                </td>
                <td>
                  {val.email}
                  <input
                    type="email"
                    placeholder="Enter New Email if you want to change"
                    onChange={(event) => {
                      setNewEmail(event.target.value);
                    }}
                  />
                </td>
                <td>
                  {val.aadhaarNo}
                  <input
                    type="text"
                    placeholder="Enter New AadhaarNo if you want to change"
                    onChange={(event) => {
                      setNewAadhaarNo(event.target.value);
                    }}
                  />
                </td>
              
                <td>
                  <button onClick={() => deleteData(val._id)}>Delete</button>
                </td>
                <td>
                  <button onClick={() => updateData(val._id)}>Update</button>
                </td>
              </tr>
            </table>
          );
        })}
      </div>
    </>
  );
}

export default Admin;
