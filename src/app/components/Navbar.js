"use client"; 

import Link from "next/link";

const Navbar = () => {
    return (
        <div className="container-fluid main_menu">
            <div className="row">
                <div className="col-md-10 col-12 mx-auto">
                    <nav className="navbar ">
                        <Link className="navbar-brand" href="/">
                            <i className="far fa-snowflake"></i> Weather <i className="far fa-snowflake"></i>
                        </Link>
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-toggle="collapse"
                            data-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item active">
                                    <Link className="nav-link" href="/">
                                        Home <span className="sr-only">(current)</span>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" href="/weather">
                                        Weather
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" href="/about">
                                        About
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
