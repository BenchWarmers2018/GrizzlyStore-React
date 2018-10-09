// components/NotFound.js
import React from 'react';
import { Link } from 'react-router-dom';


const NotFound = () =>

        <div id="notfound">
            <div className="notfound">
                <div className="notfound-404">
                    <h1>Oops!</h1>
                    <h2>404 - The Page can't be found</h2>
                    {/*<p className="centered">We are so beary sorry but the page you are looking for does not exist ¯\_(ツ)_/¯*/}
                        {/*<br /></p>*/}
                </div>
                <Link to='/'>Go TO Homepage</Link>
            </div>
    </div>


export default NotFound;