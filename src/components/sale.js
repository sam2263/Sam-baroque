import '../App.css';
import React from 'react';
import Sidebar from "./Sidebar";
import Saleitems from "./SaleItems";

function Sale(props) {
    return (
        <div>
        <Sidebar />

        {/*    Sale*/}
            <section className="container">
                <div className="row">
                    <div className="col-12 col-lg-4 col-xl-4 col-md-">
                        <Saleitems image="http://cdn.shopify.com/s/files/1/2277/5269/products/2F6A7423_600x_crop_center.jpg?v=1603540854"
                                   title="EVER NIGHT"
                                   price="1,190.00"
                        />
                    </div>
                    <div className="col-12 col-lg-4 col-xl-4 col-md-">
                        <Saleitems image="http://cdn.shopify.com/s/files/1/2277/5269/products/jhhb_600x_crop_center.jpg?v=1599718426"
                                   title="SPRING BLING"
                                   price="7,490.00"
                        />
                    </div>
                    <div className="col-12 col-lg-4 col-xl-4 col-md-4">
                        <Saleitems image="http://cdn.shopify.com/s/files/1/2277/5269/products/2F6A7312_600x_crop_center.jpg?v=1603540647"
                                   title="TANGY PINK"
                                   price="1,390.00"
                        />
                    </div>
                </div>
            {/*    Row 2*/}
                <div className="row">
                    <div className="col-12 col-lg-4 col-xl-4 col-md-">
                        <Saleitems image="http://cdn.shopify.com/s/files/1/2277/5269/products/luty_600x_crop_center.jpg?v=1600930970"
                                   title="CRYSTAL CROWN"
                                   price="8,950.00"
                        />
                    </div>
                    <div className="col-12 col-lg-4 col-xl-4 col-md-">
                        <Saleitems image="http://cdn.shopify.com/s/files/1/2277/5269/products/jiuu_600x_crop_center.jpg?v=1599548850"
                                   title="BUTTER GLOW"
                                   price="7,490.00"
                        />
                    </div>
                    <div className="col-12 col-lg-4 col-xl-4 col-md-4">
                        <Saleitems image="http://cdn.shopify.com/s/files/1/2277/5269/products/gdx_600x_crop_center.jpg?v=1603270152"
                                   title="FOREST GREEN"
                                   price="7,490.00"
                        />
                    </div>
                </div>
            {/*    Row 3*/}
                <div className="row">
                    <div className="col-12 col-lg-4 col-xl-4 col-md-">
                        <Saleitems image="http://cdn.shopify.com/s/files/1/2277/5269/products/g_600x_crop_center.jpg?v=1597923532"
                                   title="WONDER DREAM"
                                   price="7,490.00"
                        />
                    </div>
                    <div className="col-12 col-lg-4 col-xl-4 col-md-">
                        <Saleitems image="http://cdn.shopify.com/s/files/1/2277/5269/products/mgb_600x_crop_center.jpg?v=1597473781"
                                   title="AVINER"
                                   price="5,840.00"
                        />
                    </div>
                    <div className="col-12 col-lg-4 col-xl-4 col-md-4">
                        <Saleitems image="http://cdn.shopify.com/s/files/1/2277/5269/products/8i8i_600x_crop_center.jpg?v=1597486953"
                                   title="CHARMGALE"
                                   price="7,490.00"
                        />
                    </div>
                </div>
            {/*    Row 4*/}
                <div className="row">
                    <div className="col-12 col-lg-4 col-xl-4 col-md-">
                        <Saleitems image="http://cdn.shopify.com/s/files/1/2277/5269/products/tyrr_600x_crop_center.jpg?v=1597485126"
                                   title="FLUTTER SHY"
                                   price="3,490.00"
                        />
                    </div>
                    <div className="col-12 col-lg-4 col-xl-4 col-md-">
                        <Saleitems image="http://cdn.shopify.com/s/files/1/2277/5269/products/gyhdf_600x_crop_center.jpg?v=1597925345"
                                   title="BLUE NILE"
                                   price="6,490.00"
                        />
                    </div>
                    <div className="col-12 col-lg-4 col-xl-4 col-md-4">
                        <Saleitems image="http://cdn.shopify.com/s/files/1/2277/5269/products/grr45_600x_crop_center.jpg?v=1597485150"
                                   title="MEADOW BEAM"
                                   price="4,390.00"
                        />
                    </div>
                </div>

            </section>
        </div>
    );
}

export default Sale;
