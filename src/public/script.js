// import { Component, h, render } from 'preact'

// const html = window.htm.bind(h)

// const App = function () {
//   return html`<p> Hello </p>`
// }

// render(html`<${App} />`, document.body);

// import * as ReactDOM from 'react-dom';
// import * as React from 'react';
import {createElement} from 'react';
// import 'react';
import 'react-dom';

function App() {
  return React.createElement('p', null, 'hello world');
}

ReactDOM.render(React.createElement(App, null), document.getElementById('root'));

// console.log(React)