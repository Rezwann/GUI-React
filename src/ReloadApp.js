/* Mainly used to make testing easier (constantly refreshing) 
but could be implemented into the app and kept
for the beneift of users */
import React from "react";

function RefreshApp() {
  function reload() {
    window.location.reload(false);
  }

  return (
    <div>
      <button className="ReloadButton" onClick={reload}>
        Reload Application
      </button>
    </div>
  );
}

export default RefreshApp;
