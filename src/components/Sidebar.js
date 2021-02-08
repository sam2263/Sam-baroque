import React from 'react';

function Sidebar(){
    return(
        <div className="container-fluid position-absolute pt-5 pl-5 ml-5">
            <div className="row">
                <div className="col">

                    <section className="mb-4" filter="size">

                        <a
                            className="text-muted p-0 text-decoration-none"
                            data-toggle="collapse"
                            href="#collapseExample"
                            aria-expanded="false"
                            aria-controls="collapseExample"
                        >
                            <h6 className="font-weight-bold mb-3">Size</h6>
                        </a>
                        <div className="collapse pt-3" id="collapseExample">
                            <div className="form-check pl-0 mb-3">
                                <input
                                    size="42"
                                    type="checkbox"
                                    className="filter-option form-check-input filled-in"
                                    id="42"
                                />
                                <label
                                    className="form-check-label small text-uppercase card-link-secondary"
                                    htmlFor="42"
                                >S</label
                                >
                            </div>
                            <div className="form-check pl-0 mb-3">
                                <input
                                    size="44"
                                    type="checkbox"
                                    className="filter-option form-check-input filled-in"
                                    id="44"
                                />
                                <label
                                    className="form-check-label small text-uppercase card-link-secondary"
                                    htmlFor="44"
                                >M</label
                                >
                            </div>
                            <div className="form-check pl-0 mb-3">
                                <input
                                    size="46"
                                    type="checkbox"
                                    className="filter-option form-check-input filled-in"
                                    id="46"
                                />
                                <label
                                    className="form-check-label small text-uppercase card-link-secondary"
                                    htmlFor="46"
                                >L</label
                                >
                            </div>
                            <div className="form-check pl-0 mb-3">
                                <input
                                    size="50"
                                    type="checkbox"
                                    className="filter-option form-check-input filled-in"
                                    id="50"
                                />
                                <label
                                    className="form-check-label small text-uppercase card-link-secondary"
                                    htmlFor="50"
                                >XL</label
                                >
                            </div>
                        </div>
                    </section>


                    <section className="mb-4" filter="size">

                        <a
                            className="text-muted p-0 text-decoration-none"
                            data-toggle="collapse"
                            href="#collapseExampl"
                            aria-expanded="false"
                            aria-controls="collapseExample"
                        >
                            <h6 className="font-weight-bold mb-3">PIECE</h6>
                        </a>
                        <div className="collapse pt-3" id="collapseExampl">
                            <div className="form-check pl-0 mb-3">
                                <input
                                    size="42"
                                    type="checkbox"
                                    className="filter-option form-check-input filled-in"
                                    id=" thre_piece"
                                />
                                <label
                                    className="form-check-label small text-uppercase card-link-secondary"
                                    htmlFor=" thre_piece">3 Piece</label>
                            </div>
                        </div>
                    </section>
                    <section className="mb-4" filter="size">

                        <a
                            className="text-muted p-0 text-decoration-none"
                            data-toggle="collapse"
                            href="#collapseExamp"
                            aria-expanded="false"
                            aria-controls="collapseExample"
                        >
                            <h6 className="font-weight-bold mb-3">FABRIC TYPE</h6>
                        </a>
                        <div className="collapse pt-3" id="collapseExamp">
                            <div className="form-check pl-0 mb-3">
                                <input
                                    size="42"
                                    type="checkbox"
                                    className="filter-option form-check-input filled-in"
                                    id="fabric_type"
                                />
                                <label
                                    className="form-check-label small text-uppercase card-link-secondary"
                                    htmlFor="fabric_type"
                                >Chiffon</label
                                >
                            </div>
                        </div>
                    </section>


                    <section className="mb-4" filter="size">

                        <a
                            className="text-muted p-0 text-decoration-none"
                            data-toggle="collapse"
                            href="#collapseExa"
                            aria-expanded="false"
                            aria-controls="collapseExample"
                        >
                            <h6 className="font-weight-bold mb-3">PRICE</h6>
                        </a>
                        <div className="collapse pt-3" id="collapseExa">
                            <div className="form-check pl-0 mb-3">
                                <input
                                    size="42"
                                    type="checkbox"
                                    className="filter-option form-check-input filled-in"
                                    id="80_99"
                                />
                                <label
                                    className="form-check-label small text-uppercase card-link-secondary"
                                    htmlFor="80_99"
                                >Rs 80000 - Rs 9999</label
                                >
                            </div>
                            <div className="form-check pl-0 mb-3">
                                <input
                                    size="44"
                                    type="checkbox"
                                    className="filter-option form-check-input filled-in"
                                    id="10-11"
                                />
                                <label
                                    className="form-check-label small text-uppercase card-link-secondary"
                                    htmlFor="10-11"
                                >Rs 10000 - Rs 11999</label
                                >
                            </div>
                            <div className="form-check pl-0 mb-3">
                                <input
                                    size="46"
                                    type="checkbox"
                                    className="filter-option form-check-input filled-in"
                                    id="12-a"
                                />
                                <label
                                    className="form-check-label small text-uppercase card-link-secondary"
                                    htmlFor="12-a"
                                >Rs 12000 - Above</label
                                >
                            </div>
                        </div>
                    </section>


                </div>
            </div>
        </div>
    )
}

export default Sidebar;