import '../App.css';
import React from 'react';
import {Link} from "react-router-dom";

function Header2(){
  return (
    <div>
        <header className="container-fluid pt-3 mr-5 ">

            <nav className="navbar navbar-expand-lg navbar-light margin">
                <Link to="/">
                    <img src="http://cdn.shopify.com/s/files/1/2277/5269/t/35/assets/baroque_logo-01.svg?v=3325848057508312822" className="img-fluid hh" />
                </Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse margin" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link" to="sale">SALE</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <Link className="nav-link" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    COLLECTION
                                </Link>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <Link className="dropdown-item" to="chantelle">CHANTELLE</Link>
                                    <Link className="dropdown-item" to="fuchsia">FUCHSIA</Link>
                                    <Link className="dropdown-item" to="swiss">SWISS</Link>
                                    <Link className="dropdown-item" to="lawn">LAWN</Link>
                                </div>
                            </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="velvet">VELVET</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="unstitched">UNSTITCHED</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="pret">PRET</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="bottoms">BOTTOMS</Link>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <Link className="nav-link" to="shawls" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            SHAWLS
                                        </Link>
                                        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                            <Link className="dropdown-item" to="shawl addons">SHAWL ADDONS</Link>

                                        </div>
                                    </li>
                        </ul>
                    </div>
                    <div>
                        <img src="http://cdn.shopify.com/s/files/1/2277/5269/t/35/assets/search.png?v=2598788294220288612" className="img-fulid" />
                            <select className="bad">
                                <option>PKR</option>
                                <option>EUR</option>
                                <option>USD</option>
                                <option>GBP</option>
                                <option>CAD</option>
                            </select>
                            <img src="http://cdn.shopify.com/s/files/1/2277/5269/t/35/assets/account.png?v=7317479392246297238" className="img-fluid" />
                                <img src="http://cdn.shopify.com/s/files/1/2277/5269/t/35/assets/custom-cart-logo.png?v=8505433968402341402" className="img-fluid" /><span>0</span>
                    </div>

                </nav>

        </header>
        <hr className="bg-dark" />
    </div>
  );
}

export default Header2;
