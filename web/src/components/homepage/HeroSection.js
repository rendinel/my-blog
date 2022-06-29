import React from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import { HeroSectionStyles } from '../../styles/homePage/HeroSectionStyles';
import Button from '../buttons/Button';
import ParagraphText from '../typography/ParagraphText';

const HeroSection = () => (
  <HeroSectionStyles>
    <div className="container">
      <div className="hero__wrapper">
        <div className="left">
          <h1 className="hero__heading">Explore the world with Technology</h1>
          <ParagraphText className="hero__text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum
            dolor sit amet consectetur adipisicing elit
          </ParagraphText>
          <Button to="/blogs" tag={Link} className="hero__button">
            Explore Blogs
          </Button>
        </div>
        <div className="right">
          <StaticImage
            className="hero__image"
            src="../../images/demo.jpg"
            alt="vr guy"
            placeholder="blurred"
            objectPosition="50% 30%"
          />
        </div>
      </div>
    </div>
  </HeroSectionStyles>
);

export default HeroSection;
