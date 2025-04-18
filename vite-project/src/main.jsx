import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { jsx as _jsx } from "react/jsx-runtime.js";

function Myapp() {
  return (
    <div>
      <h1>custom app</h1>
    </div>
  );
}

const anotherUser = "chai aur react";

const reactElement = React.createElement(
  "a",
  { href: "https://google.com", target: "_blank" },
  "click to visit google",
  anotherUser
);

createRoot(document.getElementById("root")).render(
  //  <App/>
  reactElement
);
