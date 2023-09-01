import React from 'react';
import { MDBCarousel, MDBCarouselItem } from 'mdb-react-ui-kit';

export default function Banner() {
  return (
    <MDBCarousel showIndicators showControls fade>
      <MDBCarouselItem
        className='w-100 d-block custom-carousel-image'
        src='banner8.jpg'
        alt='...'
      >
        <h5 style={{color: "black"}}>No Hidden Cost</h5>
        <p style={{color: "black"}}>customers are not misled by savoury gimmicks, and sneaky surprises.</p>
      </MDBCarouselItem>

      <MDBCarouselItem
        className='w-100 d-block'
        src='banner5.jpg'
        alt='...'
      >
        <h5 style={{color: "black"}}>Dedicated Team</h5>
        <p style={{color: "black"}}>We have a dedicated team in place, composed of highly skilled and motivated individuals who work together to provide exceptional service and deliver results that meet or exceed expectations.</p>
      </MDBCarouselItem>

      <MDBCarouselItem
        className='w-100 d-block'
        src='banner9.jpg'
        alt='...'
      >
      </MDBCarouselItem>
    </MDBCarousel>
  );
}
