import axios from "axios";
import React, { useEffect, useState } from "react";

export default function App() {
  let [firstName, setFirstName] = useState("");
  let [lastName, setLastName] = useState("");
  let [allNames, setAllNames] = useState([]);

  useEffect(() => {
    axios.get("http://localhost/data").then((res) => {
      console.log(res.data)
      setAllNames(res.data)
    });
  }, [])

  // we have to use the "useEffect" to prevent the numerous repetitions of "axios.get". In this, it would only run when something is changed or the application is run 


  function submit(e) {
    e.preventDefault();
    console.log(firstName, lastName);

    var fullName = { firstName: firstName, lastName: lastName };

    axios.post("http://localhost/", fullName).then((res) => { });

    setAllNames([...allNames, fullName]);
   

    for (let item of allNames) {
      console.log(item);
    }
    setFirstName("");
    setLastName("");
  }

  return (
    <div>
      {allNames.map((names, index) => {
          return <div>{names.firstName + " " + names.lastName} </div>;
        })}
      <form onSubmit={submit}>
        <input
          type="text"
          name="firstName"
          id="firstName"
          onChange={(e) => {
            setFirstName(e.target.value);
          }}
          value={firstName}
        />
        <input
          type="text"
          name="lastName"
          id="lastName"
          value={lastName}
          onChange={(e) => {
            setLastName(e.target.value);
          }}
        />
        <button>SUBMIT</button>
      </form>
    </div>
  );
}
