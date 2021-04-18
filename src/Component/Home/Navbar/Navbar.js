import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-primary bg-warning">
            <div class="container-fluid">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse text-primary" id="navbarSupportedContent">
                    <h3>Summit Education Media</h3>
                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0  ">
                        <li class="nav-item">
                            <a class="nav-link ms-5 active" aria-current="page" href="#">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link ms-5" href="/booking">Learner</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link ms-5 " href="/admin/addAdmin">Admin</a>
                        </li>
                        <li class="nav-item">
                            <Link to="/login"><button class="nav-link ms-5" >Log In</button></Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;