import '../App.css';
import React, {useContext} from 'react';
import Section from "./section";
import Stitched from "./Stitiched";
import CaregoriesItems from "./CategoriesItems";
function Categories(props) {
    // const data= useContext(CategoriesContext);
    return (
        <div>
            <Section />
            <Stitched />
            <section className="container">
                <div className="row">
                    <div className="col-12 col-lg-6 col-xl-6 col-md-6">
                            <CaregoriesItems img="http://cdn.shopify.com/s/files/1/2277/5269/files/horizontal_banner_b2c06691-018b-4185-a7cd-9d5cb6f63b8e.jpg?v=1603366352"
                                              title="CHANTELLE CHIFFON"/>
                    </div>
                    <div className="col-12 col-lg-6 col-xl-6 col-md-6">
                        <CaregoriesItems img="http://cdn.shopify.com/s/files/1/2277/5269/files/horizontal_banner_copy_8ae326d2-a271-4938-910a-e597a7ad6aeb.jpg?v=1594964715"
                                         title="FUCHSIA"/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-lg-4 col-xl-4 col-md-">
                        <CaregoriesItems img="http://cdn.shopify.com/s/files/1/2277/5269/files/banner_64e2ec52-f22f-45b6-b2d7-bf9dd5995010.jpg?v=1600933022"
                                         title="UNSTITCHED"/>
                    </div>
                    <div className="col-12 col-lg-4 col-xl-4 col-md-">
                        <CaregoriesItems img="http://cdn.shopify.com/s/files/1/2277/5269/files/banner_52ee2617-1823-42df-b320-0482c3149c24.jpg?v=1601030325"
                                         title="BOTTOMS"/>
                    </div>
                    <div className="col-12 col-lg-4 col-xl-4 col-md-">
                        <CaregoriesItems img="http://cdn.shopify.com/s/files/1/2277/5269/files/ghf.jpg?v=1603279073"
                                         title="PRET"/>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Categories;
