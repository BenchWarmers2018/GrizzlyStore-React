import React, {Component} from 'react';
import Loader from "react-loader-spinner";

class Spinner extends Component {
    render() {
        return (
            <div className="spinner-holder">
                <Loader
                    type="Bars"
                    color="#00BFFF"
                    height="150"
                    width="150"
                />
            </div>
        );
    }
}

export default Spinner;