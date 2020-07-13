
// import syntax in typescript: https://stackoverflow.com/questions/46748593/react-and-reactdom-undefined-but-installed
// import * as ReactDOM from 'react-dom';
// import * as React from "react";


// to use this style: [ "esModuleInterop": true ] into tsconfig.json
import ReactDOM from "react-dom";
import React from "react";

import './index.scss';

const AppView = () => {
    return ( <h1>testing!</h1> )
}

ReactDOM.render(<AppView />, document.getElementById("app"));