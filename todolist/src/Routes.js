import React from "React";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import form from './Form';
function Routes () {
    return(

        <Router>
            <Route path="/Form" element = {<Form/>} />
        </Router>
    )
}

export default Routes;