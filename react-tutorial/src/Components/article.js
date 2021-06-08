// THIS FILE IS LIKE A TEMPLATE OR A SCHEMA // THIS FILE IS LIKE A TEMPLATE OR A SCHEMA
// THIS FILE IS LIKE A TEMPLATE OR A SCHEMA // THIS FILE IS LIKE A TEMPLATE OR A SCHEMA
// THIS FILE IS LIKE A TEMPLATE OR A SCHEMA // THIS FILE IS LIKE A TEMPLATE OR A SCHEMA
// THIS FILE IS LIKE A TEMPLATE OR A SCHEMA // THIS FILE IS LIKE A TEMPLATE OR A SCHEMA
// THIS FILE IS LIKE A TEMPLATE OR A SCHEMA // THIS FILE IS LIKE A TEMPLATE OR A SCHEMA

import React from "react";
import PropTypes from "prop-types";

export function ArticleMajor(props) {
  // here the "props" is a storage variable which stores all the variable defined in the recieving file. it is defined in the tag itself.
  return (
    <div id={props.id} className="article major" key = "articlemajor">
      <span id="title-content_spotify">
        <h4>{props.title}</h4>
        {/* here the props.title is a variable which is defined in the receiveing file. */}
        <span id="content-spotify">
          <p>{props.content}</p>
          <img
            src="https://logodownload.org/wp-content/uploads/2020/03/listen-on-spotify-1.png"
            alt="spotify"
          />
        </span>
      </span>

      <img id="thumbnail" src={props.thumbnail} alt="" />
      <div className="quarter"></div>
    </div>
  );
}

export function ArticleMinor(props) {
  // here the "props" is a storage variable which stores all the variable defined in the recieving file. it is defined in the tag itself.
  return (
    <div id={props.id} className="article minor" key = "articleminor">
      <span id="title-content_spotify">
        <h4>{props.title}</h4>
        {/* here the props.title is a variable which is defined in the receiveing file. */}
        <span id="content-spotify">
          <p>{props.content}</p>
          {props.showSpotify ? (
            <img
              src="https://logodownload.org/wp-content/uploads/2020/03/listen-on-spotify-1.png"
              alt="spotify"
            />
          ) : (
            "Coming Soon..."
          )}
          {/* here the the content inside {} will be shown if the boolean value for the variable "showSpotify" is true. and the string after : is for alternate. 

                    "?" is for if(true/false) => show/not_show
                    
                    In short for the element which we have to give an option to show or not has to be specified under the curly brackets and an alternate has to be give.  */}
        </span>
      </span>

      <img id="thumbnail" src={props.thumbnail} alt="thumbnail" />
      <div className="quarter"></div>
    </div>
  );
}

export function ArticleMinorArray(props) {
  // here the "props" is a storage variable which stores all the variable defined in the recieving file. it is defined in the tag itself.

  return (
    <div
      id={props.id}
      className="article minor"
      key={props.id}
      onClick={function () {
        props.onNavigate(props.articles);
        // here we have defined what will occur when the onClick function has been called. from the recieving end, we have defined what will occur when any constructor function "onNavigate" has been called.

        // this will fill the 'article' variable for the NavigateTo function in the "content.js" file.
      }}
    >
      <span id="title-content_spotify">
        <h4>{props.articles.title}</h4>
        {/* here the props.title is a variable which is defined in the receiveing file. */}
        <span id="content-spotify">
          <p>{props.articles.content}</p>
          {props.showSpotify ? (
            <img
              src="https://logodownload.org/wp-content/uploads/2020/03/listen-on-spotify-1.png"
              alt="spotify"
            />
          ) : (
            "Coming Soon..."
          )}
          {/* here the the content inside {} will be shown if the boolean value for the variable "showSpotify" is true. and the string after : is for alternate. 

                    "?" is for if(true/false) => show/not_show
                    
                    In short for the element which we have to give an option to show or not has to be specified under the curly brackets and an alternate has to be give.  */}
        </span>
      </span>

      <img id="thumbnail" src={props.articles.thumbnail} alt="thumbnail" />

      <div className="quarter"></div>
    </div>
  );
}

ArticleMinor.defaultProps = {
  showSpotify: true,
  // these are default values of variables. The value under the defaultProps would be defined if it is not defined in the item itself.
};
ArticleMinorArray.defaultProps = {
  showSpotify: true,
};

ArticleMinor.propTypes = {
  title: PropTypes.string, // although we have defaultly rendered title as a string, this is like the schema for react objects.
  // in this even if we would pass a number, it would still be rendered but an error would be given that you have to pass a string not a number.
  // this is useful for debugging.
  content: PropTypes.string.isRequired, // the isRequired protocol is passed to obligate the users to enter this value.
  thumbnail: PropTypes.string.isRequired,
  showSpotify: PropTypes.bool,
};
