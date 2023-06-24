import React from 'react';
import Footer from './Footer';
import Credit from './Credit';
import '../styles/about.css';

function About(props) {
  return (
    <div className="page-wrapper">
      <div className="about-wrapper">
        <p>
          I'm baby single-origin coffee small batch forage sustainable,
          scenester ethical gastropub hammock marfa fashion axe bicycle rights
          PBR&B vice gentrify man braid. Cray blog DSA chillwave migas.
          Slow-carb artisan YOLO bespoke vaporware, typewriter iPhone vape bruh
          chillwave etsy leggings. Yr snackwave enamel pin raw denim cliche
          mukbang. Food truck raclette chicharrones mlkshk. Bushwick meh
          vexillologist, iceland artisan organic deep v roof party master
          cleanse mukbang food truck you probably haven't heard of them
          skateboard. Brunch kitsch meh, cold-pressed lyft trust fund irony
          neutra.
          <br />
          Cornhole ramps church-key sustainable truffaut, wolf lomo vibecession
          authentic locavore farm-to-table kitsch williamsburg fam. Affogato
          direct trade biodiesel, wayfarers hell of forage pickled tumeric
          shaman. Swag selfies YOLO, iPhone butcher JOMO gastropub lumbersexual
          man braid bushwick. Pork belly health goth unicorn big mood, bodega
          boys chillwave hammock vaporware 3 wolf moon tofu shaman umami migas.
          Yes plz lyft 3 wolf moon tacos fixie authentic, neutral milk hotel
          austin glossier hammock franzen fam jianbing Brooklyn.
        </p>
      </div>
      <Footer />
      <Credit />
    </div>
  );
}

export default About;
