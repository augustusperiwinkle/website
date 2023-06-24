import React from 'react';
import Footer from './Footer';
import Credit from './Credit';
import '../styles/about.css';

function About(props) {
  return (
    <div className="page-wrapper">
      <div className="about-wrapper">
        <p>
          Augustus Periwinkle's music is like a scrumptious smorgasborg, or a
          fresh fruit smoothie, or a bountiful wildflower bouquet; made up of a
          vibrant variety of flavors and colors, one thing is certain: you're
          going to have a lot of fun.
          <br />
          <br />
          Based in New York City, Augustus Periwinkle had spent most of his life
          touring around the world as a drummer in various bands and groups. Now
          Augustus is completing his metamorphosis into singer, songwriter, and
          producer. The result is a surprising and joyful mix of pop, funk,
          indie rock, r&b, and anything else that sparks the imagination.
        </p>
      </div>
      <Footer />
      <Credit />
    </div>
  );
}

export default About;
