import React, {Component} from 'react';

class profile extends Component {
    render() {
        return (
            <div className="page-wrapper">
                <div className="page-breadcrumb">
                    <div className="row align-items-center">
                        <div className="col-5">
                            <h4 className="page-title">Profile Page</h4>
                            <div className="d-flex align-items-center">
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><a href="#">Home</a></li>
                                        <li className="breadcrumb-item active" aria-current="page">Library</li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                        <div className="col-7">
                            <div className="text-right upgrade-btn">
                                <a href="https://wrappixel.com/templates/xtremeadmin/"
                                   className="btn btn-danger text-white" target="_blank">Upgrade to Pro</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-4 col-xlg-3 col-md-5">
                            <div className="card">
                                <div className="card-body">
                                    <center class="m-t-30"><img src="../../assets/images/users/5.jpg"
                                                                className="rounded-circle" width="150"/>
                                        <h4 className="card-title m-t-10">Hanna Gover</h4>
                                        <h6 className="card-subtitle">Accoubts Manager Amix corp</h6>
                                        <div className="row text-center justify-content-md-center">
                                            <div className="col-4"><a href="javascript:void(0)" className="link"><i
                                                className="icon-people"></i> <font class="font-medium">254</font></a>
                                            </div>
                                            <div className="col-4"><a href="javascript:void(0)" className="link"><i
                                                className="icon-picture"></i> <font class="font-medium">54</font></a>
                                            </div>
                                        </div>
                                    </center>
                                </div>
                                <div>
                                    <hr/>
                                </div>
                                <div className="card-body">
                                    <small className="text-muted">Email address</small>
                                    <h6>hannagover@gmail.com</h6>
                                    <small className="text-muted p-t-30 db">Phone</small>
                                    <h6>+91 654 784 547</h6>
                                    <small className="text-muted p-t-30 db">Address</small>
                                    <h6>71 Pilgrim Avenue Chevy Chase, MD 20815</h6>
                                    <small className="text-muted p-t-30 db">Social Profile</small>
                                    <br/>
                                    <button className="btn btn-circle btn-secondary"><i
                                        className="fab fa-facebook-f"></i></button>
                                    <button className="btn btn-circle btn-secondary"><i className="fab fa-twitter"></i>
                                    </button>
                                    <button className="btn btn-circle btn-secondary"><i className="fab fa-youtube"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8 col-xlg-9 col-md-7">
                            <div className="card">
                                <div className="card-body">
                                    <form className="form-horizontal form-material">
                                        <div className="form-group">
                                            <label className="col-md-12">Full Name</label>
                                            <div className="col-md-12">
                                                <input type="text" placeholder="Johnathan Doe"
                                                       className="form-control form-control-line"/>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="example-email" className="col-md-12">Email</label>
                                            <div className="col-md-12">
                                                <input type="email" placeholder="johnathan@admin.com"
                                                       className="form-control form-control-line" name="example-email"
                                                       id="example-email"/>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label className="col-md-12">Password</label>
                                            <div className="col-md-12">
                                                <input type="password" value="password"
                                                       className="form-control form-control-line"/>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label className="col-md-12">Phone No</label>
                                            <div className="col-md-12">
                                                <input type="text" placeholder="123 456 7890"
                                                       className="form-control form-control-line"/>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label className="col-md-12">Message</label>
                                            <div className="col-md-12">
                                                <textarea rows="5"
                                                          className="form-control form-control-line"></textarea>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label className="col-sm-12">Select Country</label>
                                            <div className="col-sm-12">
                                                <select className="form-control form-control-line">
                                                    <option>London</option>
                                                    <option>India</option>
                                                    <option>Usa</option>
                                                    <option>Canada</option>
                                                    <option>Thailand</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <div className="col-sm-12">
                                                <button className="btn btn-success">Update Profile</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        );
    }
}

export default profile;