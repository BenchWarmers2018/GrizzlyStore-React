// components/NotFound.js
import React from 'react';
import { Link } from 'react-router-dom';


const NotFound = () =>
    <div>
            <h1>404 page not found</h1>
        <div>
            <p className="centered">We are so beary sorry but the page you are looking for does not exist ¯\_(ツ)_/¯
                <br /> Lets take you back <Link to='/'>Home</Link></p>
        </div>
    </div>



export default NotFound;