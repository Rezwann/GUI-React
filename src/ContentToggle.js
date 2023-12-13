import React, { useRef, useLayoutEffect, useState } from "react";

/* here, the aim is to determine the 
exact collapse/content toggle or 'disappearing' of 
weather forecast table content, this includes
the transition length/effect */

function ContentToggle({
  children /* actual forecast content */,
  instant /* showing depending on transition time set */,
  lazy /* choosing what should remain even after closing content */,
  onComplete /* used when closing and opening our toggle */,
  open,
  transitionDuration = "150ms",
  transitionTimingFunction = "ease-out"
}) {
  const transition = `height ${transitionDuration} ${transitionTimingFunction}`;
  const [renderForecast, setrenderForecast] = useState(lazy ? open : true);
  const ref = useRef();
  const FirstForecastDisplay = useRef(true);

  /* requestAnimationFrame is used for browser animation repaint */
  function viewForecast() {
    const node = ref.current;
    requestAnimationFrame(() => {
      node.style.height = node.scrollHeight + "px";
    });
  }

  /* we make sure content is hidden when forecast option
  is not selected by the user */
  function closeForecast() {
    const node = ref.current;
    requestAnimationFrame(() => {
      node.style.height = node.offsetHeight + "px";
      node.style.overflow = "hidden";
      requestAnimationFrame(() => {
        node.style.height = 0;
      });
    });
  }

  /* used for making sure 
  forecast is shown only when toggle is used */
  useLayoutEffect(() => {
    if (lazy) {
      if (open) {
        if (renderForecast) {
          viewForecast();
        } else {
          setrenderForecast(true);
        }
      } else {
        closeForecast();
      }
    } else {
      if (open) {
        viewForecast();
      } else {
        closeForecast();
      }
    }
  });

  useLayoutEffect(() => {
    const node = ref.current;
    function handleComplete() {
      node.style.overflow = open ? "initial" : "hidden";
      if (open) {
        node.style.height = "auto";
      }
      if (!open && lazy) {
        setrenderForecast(false);
      }
      if (onComplete) {
        onComplete();
      }
    }
    function handleTransitionEnd(event) {
      if (event.target === node && event.propertyName === "height") {
        handleComplete();
      }
    }
    if (instant || FirstForecastDisplay.current) {
      handleComplete();
      FirstForecastDisplay.current = false;
    }
    node.addEventListener("Transitionend", handleTransitionEnd);
    return () => {
      node.removeEventListener("Transitionend", handleTransitionEnd);
    };
  });

  useLayoutEffect(() => {
    if (open) {
      viewForecast();
    }
  }, [renderForecast]);

  return (
    <div
      ref={ref}
      style={{
        transition:
          instant || FirstForecastDisplay.current ? undefined : transition
      }}
    >
      {renderForecast ? children : null}
    </div>
  );
}

export default ContentToggle;
