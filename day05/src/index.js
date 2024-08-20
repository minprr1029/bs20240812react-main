import ReactDom from "react-dom/client";
import React from "react";
import "./index.css";
import App from "./App";

const container = document.getElementById("root")
const root = ReactDom.createRoot(container);
root.render(<h2>Todo List App</h2>);
root.render(<App />);