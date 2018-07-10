import React from 'react';
import ReactDom from 'react-dom'

// Create new component. This component should create some html
const App = function(){
    return <div>Hi</div>;
}

// Take component's html and put it on the DOM
ReactDOM.render(App);