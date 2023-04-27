import React, { useState } from "react";
import Home from "./Home";
import Form from "./Form";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";

function App() {
  const [renderHomePage, setRenderHomePage] = useState(false);

  const renderHome = () => {
    setRenderHomePage(true);
  };

  return (
    <div className="App">
      {renderHomePage ? <Home /> : <Form renderHome={renderHome} />}
    </div>
  );
}

export default App;
