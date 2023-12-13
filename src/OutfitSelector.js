import React from "react";
import C3 from "/src/ColdImages/C3.jpg";
import C4 from "/src/ColdImages/C4.jpg";
import C5 from "/src/ColdImages/C5.jpg";
import C6 from "/src/ColdImages/C6.jpg";
import W1 from "/src/WarmImages/W1.jpg";
import W2 from "/src/WarmImages/W2.jpg";
import W3 from "/src/WarmImages/W3.jpg";
import X7 from "/src/WarmImages/X7.jpg";

/* Here, the idea is to change an image when the app is refreshed */
class Outfit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      outfitElementBG: {
        backgroundRepeat: "no-repeat"
      }
    };
  }

  UNSAFE_componentWillMount() {
    /* creating an array of outfits to set as background image of outfit component/element */
    const outfitArr = [C3, C4, C5, C6, W1, W2, W3, X7];
    const randomArrIndex = Math.floor(Math.random() * outfitArr.length);
    const chosenOutfit = outfitArr[randomArrIndex];
    this.setState({
      outfitElementBG: {
        /* setting background of outfit/clothes element */
        backgroundImage: `url(${chosenOutfit})`
      }
    });
  }

  render() {
    /* changing BG image of existing class */
    return <div style={this.state.outfitElementBG} className="clothes"></div>;
  }
}

export default Outfit;
