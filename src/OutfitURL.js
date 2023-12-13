import React, { useState } from "react";
import "/src/styles.css";

/* Here, similar to how an outfit image is selected in OutfitSelector,
we have used an Arr of URLs to give users a variety of websites to visit */
/* In useState, after generating a URL, it is set and used as href inside a
react component called ProductBar in our index.js */

const GenerateOutfitURL = () => {
  const [RandomOutfitWebsite, setRandomOutfitWebsite] = useState();

  useState(() => {
    function getRandomOutfitWebsite() {
      /* array of URLs */
      /* The website we enter need to allow external frames or give developers
      permission to use their website within another app, in this case one URL allows
      this, however, any number of URLs can be added.
       */
      var urlArr = [
        "https://www.asos.com/"
        /*"https://www.boohoo.com/",
        "https://www.debenhams.com/",
        "https://www.johnlewis.com/",
        "https://www.marksandspencer.com/"*/
      ];
      const RandomIDX = Math.floor(Math.random() * urlArr.length);
      const newUrl = urlArr[RandomIDX];
      return newUrl;
    }
    setRandomOutfitWebsite(getRandomOutfitWebsite());
  }, []);

  return (
    <a href={RandomOutfitWebsite}>
      <div className="item">
        <p className="item_text">See Similar Items</p>
      </div>
    </a>
  );
};

export default GenerateOutfitURL;
