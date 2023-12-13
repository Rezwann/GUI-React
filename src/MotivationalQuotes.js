import React, { useState, useEffect, useRef } from "react";
import "./styles.css";

const MotiMessage = () => {
  /* message as part of motivation/quotes section */
  const [MotiMessage, setMotiMessage] = useState("");
  /* useRef used because we choose when to render quote */
  const textRef = useRef();

  const getMotiMessage = () => {
    fetch("https://type.fit/api/quotes")
      .then((result) =>
        result.json()
      ) /* obtaining messages in correct format */
      .then((info) => {
        let randomNum = Math.floor(Math.random() * info.length);
        setMotiMessage(info[randomNum]); /* randomly setting message */
      });
  };

  useEffect(() => {
    /* having a new message each refresh of app */
    getMotiMessage();
  }, []);

  return (
    <div className="Quote">
      <div className="btnContainer">
        <button onClick={getMotiMessage} className="btn">
          ⭯
        </button>{" "}
        {/* refresh button to replace current message */}
      </div>
      <h2 className="QuotesTitle">Motivation</h2>
      <p className="QuotesText" ref={textRef}>
        {MotiMessage.text} - <b>{MotiMessage.author}</b>{" "}
        {/* including author's name as well as text */}
      </p>
    </div>
  );
};

export default MotiMessage;
