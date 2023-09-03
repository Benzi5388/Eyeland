import React from 'react';
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardImage,
} from 'mdb-react-ui-kit';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus, faHeart } from '@fortawesome/free-solid-svg-icons';
import './cards.css';

export default function Cards() {
    return (
        <div className="container">
            <div className="card-container">
                <div className="row">
                    <div className="col-md-4 mb-4">
                        <MDBCard className="card">
                            <MDBCardImage
                                src="item1.jpg"
                                fluid
                                alt="Ray-Ban Aviator"
                                style={{ maxHeight: '300px', width: 'auto' }}
                            />
                            <MDBCardBody>
                                <div className="d-flex justify-content-between align-items-center">
                                    <div>
                                        <MDBCardTitle>Ray-Ban Aviator</MDBCardTitle>
                                    </div>
                                    <div className="price-container">
                                        <span className="price-label "> &#8377;1456</span>
                                    </div>
                                </div>
                                <MDBCardText>
                                    The classic Ray-Ban Aviator is an iconic choice, known for its timeless design and versatile appeal. Its teardrop shape and metal frame offer a blend of style and function, making it a favorite among fashion enthusiasts and pilots alike.
                                </MDBCardText>
                                <div className="d-flex justify-content-between align-items-center">
                                    <button className="btn btn-dark">
                                        <FontAwesomeIcon icon={faCartPlus} className="text-white" />&nbsp;
                                        Add to Cart
                                    </button>
                                    <button className="btn btn-danger">
                                        <FontAwesomeIcon icon={faHeart} className="text-white" />
                                    </button>
                                </div>
                            </MDBCardBody>
                        </MDBCard>
                    </div>
                    <div className="col-md-4 mb-4">
                        <MDBCard className="card">
                            <MDBCardImage
                                src="item2.jpg"
                                fluid
                                alt="Oakley Holbrook"
                                style={{ maxHeight: '300px', width: 'auto' }}
                            />
                            <MDBCardBody>
                                <MDBCardTitle>Oakley Holbrook</MDBCardTitle>
                                <MDBCardText>
                                    The Oakley Holbrook combines a modern look with high-performance features. With its bold square frame and innovative lens technology, these sunglasses offer enhanced clarity and protection for those who lead an active lifestyle.
                                </MDBCardText>
                                <div className="d-flex justify-content-between align-items-center">
                                    <button className="btn btn-dark">
                                        <FontAwesomeIcon icon={faCartPlus} className="text-white" />&nbsp;
                                        Add to Cart
                                    </button>
                                    <button className="btn btn-danger">
                                        <FontAwesomeIcon icon={faHeart} className="text-white" />
                                    </button>
                                </div>
                            </MDBCardBody>
                        </MDBCard>
                    </div>

                    <div className="col-md-4 mb-4">
                        <MDBCard className="card">
                            <MDBCardImage
                                src="item4.jpg"
                                fluid
                                alt="Gucci GG Logo"
                                style={{ maxHeight: '300px', width: 'auto' }}
                            />
                            <MDBCardBody>
                                <MDBCardTitle>Gucci GG Logo</MDBCardTitle>
                                <MDBCardText>
                                    Exuding luxury, the Gucci GG Logo Square Sunglasses feature the brand's signature logo on the temples. These square-shaped sunglasses effortlessly merge fashion and elegance, making a statement while shielding your eyes from the sun's rays.
                                </MDBCardText>
                                <div className="d-flex justify-content-between align-items-center">
                                    <button className="btn btn-dark">
                                        <FontAwesomeIcon icon={faCartPlus} className="text-white" />&nbsp;
                                        Add to Cart
                                    </button>
                                    <button className="btn btn-danger">
                                        <FontAwesomeIcon icon={faHeart} className="text-white" />
                                    </button>
                                </div>
                            </MDBCardBody>
                        </MDBCard>
                    </div>
                </div>
            </div>
        </div>
    );
}
