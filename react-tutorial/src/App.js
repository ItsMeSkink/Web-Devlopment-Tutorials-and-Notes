import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import React, {useEffect} from 'react'

// ______________________________________________________________________ DEFAULT________________________________________________________________________________________________

// function App() {
//   // all variables are defined here!
//   // e.g.
//   let number = 14 + 14
//   return (
//     <div className="App">
//       <header className="App-header">
//         <div>{ 13+10 + number}</div>
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>

//       </header>
//     </div>
//   );
// }

//______________________________ PRINTING A STRING AND VARIABLE WITHH INCLUDING OPENING AND CLOSING TAGS.__________________________________________________________________________

// function App() {
//   let string = 'How you doin'
//   return (
//     <>  {/* this has to be used for using JavScript Extension for HTML.  */}
//       <h2>{ string}</h2>
//     <h3>Random String</h3>
//     </> // this has to be used for using JavScript Extension for HTML.
//   )
// }

// _________________________________ SELF CLOSING TAGS _______________________________________________________________________

// function App() {
//   return (
//     <>
//     <input type="text" name="FirstName" id="Name" placeholder="FirstName" className="FirstName" />
//     <input type="text" name="LastName" id="Name" placeholder="LastName" className="LastName" />
//     {/* a "/" (slash) has to be written in case of self closing tags like input, br, hr etc. */}
//       </>
//   )
// }

import Header from "./Components/Header"; // we don't have to use curly brackets to import JSX Function from another file.
import Content from "./Components/Content";
import CreateComment from "./Components/CreateComment";
import About from "./Components/About";

// here we are just creating an addComment function (but we can also add it into the "CreateComment" file also)
// this is just a function called in "CreateComment" file but defined here.
function addComment(commentsarray, singlecomment, setcommentsarray) {
  console.log("testing for addComment by function defined in 'App.js' file");

  setcommentsarray([...commentsarray, singlecomment]);

  // this uses the setComments function to modify the existing array which stores all the comments.
  // we duplicate the whole comments array first and just add the single comment which is the read from the modified single comment useState (while typing)

  // localStorage.setItem("comments", JSON.stringify(commentsarray));
}

function App() {
  let initComments;
  if (localStorage.getItem("comments") === null) {
    // this will initialize an empty array if the localStorage has no array named 'comments' present.
    initComments = [];
    localStorage.setItem("comments", initComments);
  } else {
    initComments = JSON.parse(localStorage.getItem("comments"));
  }

  return (
    <>
      <Router>
        <Header key="Header1" />{" "}
        {/* This is how the header has been included in the file */}
        <Switch>
          <Route
            exact
            path="/"
            render={() => {
              return <CreateComment addComment={addComment} />;
            }}
          >
            <Content key="Content1" />
          </Route>

          <Route
            exact
            path="/articles"
            render={() => {
              return <CreateComment addComment={addComment} />;
            }}
          >
            <Content key="Content1" />
          </Route>

          <Route exact path="/about">
            <About />
          </Route>
        </Switch>
      </Router>

      {/* 
      Router = Everything,
      Switch = Components that have to be rendered on different paths
      Route = Individual Components that would render on the specific path mentioned in their tags.
      under "Route" tag would be the Component that has been imported.

      THIS IS USED IN SINGLE PAGE APPLICATIONS WHERE WE NEED FAST RELOAD TIME AND NO NEED OF RELOAD AND ONLY WANT TO CHANGE A SPECIFIC PART OF THE WEBSITE
      */}
    </>
  );
}

export default App;
