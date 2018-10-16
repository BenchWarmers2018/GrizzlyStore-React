import React, {Component} from 'react';
import Loader from "react-loader-spinner";

class Spinner extends Component {
    render() {
        return (
            <div className="spinner-holder">
                <Loader
                    type="Hearts"
                    color="pink"
                    height="150"
                    width="150"
                />
            </div>
        );
    }
}

export default Spinner;