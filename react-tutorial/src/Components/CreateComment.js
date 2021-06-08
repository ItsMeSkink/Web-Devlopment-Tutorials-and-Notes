import React, { useState, useEffect } from "react";

export default function CreateComment(props) {
  const [comments, setComments] = useState(
    JSON.parse(localStorage.getItem("comments"))
  ); // this is the variable array for all the array. combined. when we press enter or submit the comment, this changes
  let [comment, setComment] = useState(""); // this is a variable for the single comment. when we are writting a comment we are modifying this (using "setComment").
  // "Nice One Dude",
  // "You still may wanna reconsider the pencil one cause it needs a lot of electrical energy even to suck up a small amount of lead particles",
  // "The Arcade Center design wouldnt be much complicated but it would only produce a small amount of energy which is barely useful for led lights. We need more energy and wider application for this to actually be successful.",

  function postComment(e) {
    e.preventDefault();

    // props.addComment(comments, setComments);
    // here it is carrying out a particular function (the operations are defined in the recieving file which is "App.js" in this case.)

    // setComments([...comments, comment]);
    
    props.addComment(comments, comment, setComments); // same as "setComments([...comments, comment])". just defined in "App.js" file, otherwise same

    setComment("")
    // after the enter button has been pushed (form submitted) the comment value would be modified to blank.
  }

  useEffect(() => {
    localStorage.setItem("comments", JSON.stringify(comments));
  }, [comments]);
  // the useEffect hook is responsible for carrying out a function in case the second argument (which is [comments] in this instance) changes.
  // in this the localStorage would be modified only when the comments array is modified in any way.
  // if we don't use this, the value that we enter in the input box, would stored the next time the value is entered. It is like function - 1. We have to call the function one more time to call the last function. this was because the modification and the storage ran simeltaneosly and the variable that has to be stored read nothing (it read the next time).
  // in this it is run synchronously when means that first modification would occur and then only the storage would be updated.

  return (
    <div id="commentsection">
      <ol>
        {comments.map((comment, index) => {
          return <li>{comment}</li>;
        })}
      </ol>

      <form action="#" onSubmit={postComment}>
        <input
          type="text"
          name="CommentContent"
          id="CommentContent"
          value={comment}
          // this will send the variable so that using that defination, a set of operations can be called.
          onChange={(e) => {
            setComment(e.target.value);
            // this will allow the change in the input bar. // this modifies the single comment useState()
          }}
        />
        <button className="material-icons">comment</button>
      </form>
    </div>
  );
}
