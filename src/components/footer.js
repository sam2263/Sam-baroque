import '../App.css';
import React from 'react';

function Footer() {
    return (
        <div>
            <section className="pt-5 container">
                <h3 className="text-center fff"><b>SIGN UP FOR OUR NEWSLETTER</b></h3>
                <div className="input-group mb-3 pt-5">
                    <input type="email" className="form-control in"aria-label="Recipient's username" aria-describedby="button-addon2"/>
                        <div className="input-group-append">
                            <button className="btn btn-outline-secondary bg-dark" type="button" id="button-addon2">Subscribe</button>
                        </div>
                </div>
                <div className="row pt-5">
                    <div className="col-12 col-md-4 col-lg-4 col-xl-4">
                        <h3 className="fth">ABOUT US</h3>
                        <li className="ft">History</li>
                        <li className="ft">Careers</li>
                        <li className="ft">LookBook</li>
                    </div>
                    <div className="col-12 col-md-4 col-lg-4 col-xl-4">
                        <h3 className="fth">SHOP WITH US</h3>
                        <li className="ft">Privicy Policy</li>
                        <li className="ft">Terms and Conditions</li>
                    </div>
                    <div className="col-12 col-md-4 col-lg-4 col-xl-4">
                        <h3 className="fth">COUSTOMER SERVICE</h3>
                        <li className="ft">Contact Us</li>
                        <li className="ft">Delivery</li>
                        <li className="ft">Returns</li>
                        <li className="ft">FAQ</li>
                    </div>

                </div>
                <div className="text-center">
                    <img src="http://cdn.shopify.com/s/files/1/2277/5269/t/35/assets/visa-icon.svg?v=808579592377062436" className="img-fluid imgl"/>
                        <img src="http://cdn.shopify.com/s/files/1/2277/5269/t/35/assets/mastercard-icon.svg?v=13912401171445626558" className="img-fluid imgl"/>
                            <img src="http://cdn.shopify.com/s/files/1/2277/5269/t/35/assets/ssl.png?v=13384401467341871361" className="img-fluid imgl ww" />
                </div>
            </section>
        </div>
    );
}

export default Footer;
