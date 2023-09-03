import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faGem, faHome, faEnvelope, faPhone, faPrint, faGlasses } from '@fortawesome/free-solid-svg-icons';
import './footer.css';

export default function Footer() {
  return (
    <div className="footer-wrapper">
      <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
          <div className='me-5 d-none d-lg-block'>
            <span>Get connected with us on social networks:</span>
          </div>
          <div>
            <a href='' className='me-4 text-reset'>
              <FontAwesomeIcon icon={faFacebookF} size="2x"/>
            </a>
            <a href='' className='me-4 text-reset'>
              <FontAwesomeIcon icon={faInstagram} size="2x"/>
            </a>
          </div>
        </section>
        <section className=''>
          <MDBContainer className='text-center text-md-start mt-5'>
            <MDBRow className='mt-3'>
              <MDBCol md='3' lg='4' xl='3' className='mx-auto mb-4'>
                <h6 className='text-uppercase fw-bold mb-4'>
                  <FontAwesomeIcon color='secondary' icon={faGlasses} className='me-3' />
                  Eyeland
                </h6>
                <p>
                We believe in calling a spade a spade, and ensure that our customers are not misled by savoury gimmicks, and sneaky surprises.
                </p>
              </MDBCol>
              <MDBCol md='2' lg='2' xl='2' className='mx-auto mb-4'>
                <h6 className='text-uppercase fw-bold mb-4'>Products & Services</h6>
                <p>
                  <a href='#!' className='text-reset'>
                    Spectacles
                  </a>
                </p>
                <p>
                  <a href='#!' className='text-reset'>
                    Sunglasses
                  </a>
                </p>
                <p>
                  <a href='#!' className='text-reset'>
                    Contact Lenses
                  </a>
                </p>
                <p>
                  <a href='#!' className='text-reset'>
                    Services
                  </a>
                </p>
              </MDBCol>



              <MDBCol md='4' lg='3' xl='3' className='mx-auto mb-md-0 mb-4'>
                <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
                <p>
                  <FontAwesomeIcon color='secondary' icon={faHome} className='me-2' />
                  Padmapukur, Kulpi Road, Opp. Senco Gold, Baruipur, Kolkata - 700 144, West Bengal.
                </p>
                <p>
                  <FontAwesomeIcon color='secondary' icon={faEnvelope} className='me-3' />
                  eyelandindia@gmail.com
                </p>
                <p>
                  <FontAwesomeIcon color='secondary' icon={faPhone} className='me-3' /> 033-24230008 
                </p>
                <p>
                  <FontAwesomeIcon color='secondary' icon={faPrint} className='me-3' /> + 91 89611 11181
                </p>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </section>

        <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
          © 2023 Copyright : 
          <a className='text-reset fw-bold' href=''>
             Benazir
          </a>
        </div>
      </MDBFooter>
    </div>
  );
}
