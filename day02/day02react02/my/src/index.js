import React from 'react'
import reactDom from 'react-dom/client'
import App from './App';

const App = () =>{
  return(<h1>Hello React world</h1>);
}

const container = document.getElementById('root');
const root = ReactDom.createRoot(container);
root.render(<App />);