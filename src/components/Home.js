import React, { useState } from "react";
import "../App.css";

function Home() {
  const [name, setName] = useState("apple");

  const handler = () => {
    console.log("Ouchie mommie");
    setName("Greg");
  };
  return (
    <html>
      <head>
        <h1>This is the head</h1>
      </head>
      <body>
        <div className="navbar">
          <h1>This is my navbar</h1>
        </div>
        <div>
          <h2>this is the actual meat and bones</h2>
          <button
            onClick={() => {
              console.log(name);
            }}
          >
            {" "}
            I am a meanie
          </button>
          <button onClick={handler}>name changer</button>
        </div>
      </body>
    </html>
  );
}

export default Home;
