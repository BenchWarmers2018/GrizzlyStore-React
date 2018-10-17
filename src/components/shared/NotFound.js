// components/NotFound.js
import React from 'react';
import { Link } from 'react-router-dom';


const NotFound = () =>

    <div id="notfound">
        <div className="notfound">
            <div className="not-found404">

            </div>
            <Link to='/'>Return To Homepage</Link>
        </div>
    </div>


export default NotFound;