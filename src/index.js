import React from "react";
import ReactDOM from "react-dom";
import Heading from "./Heading";
import List from "./List";

const loremPicsum = "https://picsum.photos/200";
var name = "World";
var seven = "7";
var ten = "10";

ReactDOM.render(
  <div>
    <Heading />
    <List />
  </div>,
  document.getElementById("root")
);

// ReactDOM.render(
//   <div>
//     <h1>Hello Worl! </h1>
//     <ul>
//       <li>Hello</li>
//       <li>Worl</li>
//     </ul>
//   </div>,
//   document.getElementById("root")
// );

// ReactDOM.render(
//   <div>
//     <h1 className="heading" contentEditable="false">
//       Hello {name}!{" "}
//     </h1>
//     <p>{`${seven},${ten} this is string con${ten}cat, but an ugly way to do it`}</p>
//   </div>,
//   document.getElementById("root")
// );

// ReactDOM.render(
//   <div>
//     <img src={loremPicsum} />
//     <img src={loremPicsum + "?grayscale"} />
//   </div>,
//   document.getElementById("root")
// );

// const customStyle = {
//   color: "red",
//   fontSize: "20px",
//   border: "1px solid black"
// };

// ReactDOM.render(
//   <div>
//     <h1 style={customStyle}>Hello Worl! </h1>
//   </div>,
//   document.getElementById("root")
// );
