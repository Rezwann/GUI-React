import React from "react";
import { RWebShare } from "react-web-share";
import { slide as Menu } from "react-burger-menu";
import "/src/styles.css";
import QMUL from "/src/Sidebar/QMUL.png";
import NUS from "/src/Sidebar/NUS.png";
import UD from "/src/Sidebar/UD.png";
import PS from "/src/Sidebar/PS.png";
import MB from "/src/Sidebar/MenuBanner.png";
import DMB from "/src/Sidebar/DarkMenuBanner.png";

export default () => {
    return ( <
        Menu >
        <
        div className = "sidebar" >
        <
        div >
        <
        img src = { MB }
        alt = ""
        className = "menu-banner" > < /img> <
        /div> <
        a className = "menu-item"
        href = "https://www.qmul.ac.uk" >
        Student 's University Website <
        div className = "menu-images" >
        <
        img src = { QMUL }
        alt = ""
        className = "menu-image-size" > < /img> <
        /div> <
        /a>

        <
        a className = "menu-item"
        href = "https://www.nus.org.uk" >
        Other Useful Websites <
        div className = "menu-images" >
        <
        img src = { NUS }
        alt = ""
        className = "menu-image-size" > < /img> <
        /div> <
        div className = "menu-images" >
        <
        a href = "https://www.myunidays.com" >
        <
        img src = { UD }
        alt = ""
        className = "menu-image-size" > < /img> <
        /a> <
        /div> <
        div className = "menu-images" >
        <
        a href = "https://www.amazon.co.uk/gp/student/signup/info" >
        <
        img src = { PS }
        alt = ""
        className = "menu-image-size" > < /img> <
        /a> <
        /div> <
        /a>

        <
        div >
        <
        img src = { DMB }
        alt = ""
        className = "dark-menu-banner" > < /img> <
        /div> <
        a className = "menu-second-half"
        href = "../customisation.html" >
        <
        div className = "tooltip" > { " " } { /* tips for guiding the user if hovering with mouse*/ } <
        span class = "tooltiptext" > Prototype: No options yet. < /span>
        Customisation <
        /div>

        {
            /*Here two functions could be created to open/close customisation options.
             function openCustomisationOptions() {
                        document.getElementById("options").style.display = "block";
                    }

                    function closeCustomisationOptions() {
                        document.getElementById("options").style.display = "none";
                    }
            */
        } <
        /a> <
        div >
        <
        img src = { DMB }
        alt = ""
        className = "dark-menu-banner" > < /img> <
        /div> <
        a className = "menu-second-half"
        href = "mailto:example@gmail.com?body=My opinion of this app is.." >
        Feedback <
        /a> <
        div >
        <
        img src = { DMB }
        alt = ""
        className = "dark-menu-banner" > < /img> <
        /div>

        <
        div className = "menu-second-half" >
        <
        RWebShare data = {
            {
                text: "Check this out.",
                url: "https://www.google.co.uk",
                title: "Check this out."
            }
        } >
        <
        button class = "astext" > Share the app < /button> <
        /RWebShare>{" "} { /* react module for sharing options*/ } <
        /div>

        <
        div >
        <
        img src = { DMB }
        alt = ""
        className = "dark-menu-banner" > < /img> <
        /div> <
        a className = "menu-second-half"
        href = "/" >
        <
        div className = "tooltip" >
        <
        span class = "tooltiptext" >
        Prototype: Privacy Policy unavailable. <
        /span>
        Privacy Policy <
        /div> <
        /a>

        <
        div >
        <
        img src = { DMB }
        alt = ""
        className = "dark-menu-banner" > < /img> <
        /div> <
        a className = "menu-second-half"
        href = "/" >
        <
        div className = "tooltip" >
        <
        span class = "tooltiptext" > Prototype: T & C unavailable. < /span>
        Terms and Condition <
        /div> <
        /a>

        <
        div >
        <
        img src = { DMB }
        alt = ""
        className = "dark-menu-banner" > < /img> <
        /div> <
        a className = "bottom-menu-second-half"
        href = "/" >
        <
        div className = "tooltip" >
        <
        span class = "tooltiptext" >
        This is the first version of this application. <
        /span>
        App Version: 1.0 .0 <
        /div> <
        /a> <
        /div> <
        /Menu>
    );
};