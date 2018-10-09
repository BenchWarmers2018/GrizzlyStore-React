import React, {Component} from 'react';
import Background from "../../images/images_essence/bg-img/breadcumb.jpg";

class Banner extends Component {
    render() {
        return (
            <div className="breadcumb_area bg-img" style={{backgroundImage: "url(" + Background + ")"}}>
                <div className="container h-100">
                    <div className="row h-100 align-items-center">
                        <div className="col-12">
                            <div className="page-title text-center">
                                <h2>{this.props.data}</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Banner;