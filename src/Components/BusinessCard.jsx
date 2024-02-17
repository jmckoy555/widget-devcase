import React, {useState} from 'react';
import PropTypes from 'prop-types';
import { BsInfoCircle } from 'react-icons/bs'; 
import { FaMapMarkerAlt } from 'react-icons/fa'; 
import { FaFire } from 'react-icons/fa'; 
import { FaCheck } from "react-icons/fa";
import { FaAngleDown } from 'react-icons/fa'; 
import { CgWebsite } from "react-icons/cg";


const BusinessCard = ({ business }) => {

 const [accordionOpen, setAccordionOpen] = useState(false);

  // Calculate the number of filled stars based on the review score
  const filledStars = Math.floor(business.review_score);
  const remainingStars = 5 - filledStars;

  // Create an array to render filled and empty stars
  const stars = [...Array(filledStars)].map((_, index) => (
    <span key={index} className="star">&#9733;</span>
  ));
  const emptyStars = [...Array(remainingStars)].map((_, index) => (
    <span key={index + filledStars} className="star">&#9734;</span>
  ));

  return (
    <div className="business-card">
      <div className="business-info">
        <img className="business-logo" src={`https://d126ytvel6227q.cloudfront.net/logos/${business.slug}.jpg`} alt={business.name} />
        <button className="custom-button">Get Quote</button> 
      </div>
      <div className="business-details">
        <div>
          <h2 className="business-name">{business.name}</h2>
          <div className="star-rating">
            {stars}
            {emptyStars}
            <span className="rating">{business.review_score}/5</span>
            <span className="info-icon">
              <BsInfoCircle />
              <div className="tooltip">
                <p></p>
              </div>
            </span>
            <div className='address-container'>
              <p className="business-address">{business.address}</p>
            </div>
          </div>
          <div className='icons-con'>
          {business.distance <= 5 && (
                <div className='np-icons'>
                  <FaMapMarkerAlt />  <span className="icon-text">Nearby</span>
                </div>
            )}
            {business.review_count >= 100 && (
              <div className='np-icons'>
              <FaFire/>  <span className="icon-text">Popular</span>
            </div>
            )}
          </div>
        </div>
      </div>
    <div className="services-offered">
    <h3 className="services-title">Services Offered</h3> 
        <div className="services-content">
        {business.services.slice(0, 5).map((service, index) => (
          <p key={index}> 
          <FaCheck className="check-mark" />
          {service}
          </p>
        ))}
        </div>
      </div>
      <div className="customer-experience">
        <h3 className="experience-title">Experiences</h3>
        <div className="experience-content">
          <div className="experience-text-box">
          <p className="experience-text">
            “We could not be happier with our HVAC system. Lorem ipsum dolor sit amet consectetur. Dictum
                fusce dignissim non in magna id. Elementum enim leo aliquam gravida phasellus eget nulla.”
            <br /> 
            <span className="author-name">- Shane D.</span>
            </p>
          </div>
        </div>
      </div>
      <div className={`see-more ${accordionOpen ? 'open' : ''}`}>
  <button className="see-custom-button" onClick={() => setAccordionOpen(!accordionOpen)}>
    See More <FaAngleDown className="arrow-down" />
  </button>
  <div className="accordion-content">
  <div className="info-square">
  <CgWebsite />
    <a href={business.website} target="_blank" rel="noopener noreferrer" className='info-site'>
        Visit our website! 
      </a>
  </div>
</div>
</div>

    </div>
  );
};

BusinessCard.propTypes = {
  business: PropTypes.object.isRequired,
};

export default BusinessCard;


