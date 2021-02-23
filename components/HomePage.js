const React = require('react');

export class HomePage extends React.Component {
  constructor() {
    super();
  }
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div className="fullPageContainer">
        <h1>Welcome Friend!</h1>
        <div id="textAndImage">
          <img src="codePicSmall.jpg" id="aboutPhoto" />
          <p className="homePageText">
            Activated charcoal DIY viral authentic pok pok crucifix prism
            intelligentsia sriracha VHS whatever blog flexitarian locavore
            neutra. Keytar snackwave prism, green juice kickstarter heirloom
            etsy. Vape listicle polaroid fingerstache iPhone hot chicken freegan
            artisan etsy live-edge. Skateboard VHS hoodie lyft unicorn, beard
            iPhone tilde microdosing echo park whatever.
          </p>
          <br />
          <p className="homePageText">
            Bushwick helvetica viral yuccie gentrify woke wayfarers put a bird
            on it chia palo santo small batch. Kogi bushwick celiac chartreuse
            beard poutine. Celiac subway tile microdosing, lomo jianbing DIY
            roof party flannel pug church-key pickled. Lumbersexual disrupt
            viral hammock pok pok. Copper mug fingerstache crucifix
            cold-pressed, irony leggings squid hexagon hell of banjo cliche
            cardigan.
          </p>
          <br />
          <p className="homePageText">
            Kombucha beard hexagon tofu meditation messenger bag truffaut photo
            booth chicharrones bespoke tote bag williamsburg wayfarers chia
            etsy. Bitters church-key cornhole street art, lomo kombucha locavore
            kickstarter yuccie flannel stumptown. Tbh blog locavore, trust fund
            truffaut DIY seitan glossier migas listicle vexillologist
            letterpress cray. Biodiesel blog four loko beard poutine venmo
            locavore raw denim humblebrag williamsburg iPhone unicorn next
            level.
          </p>
          <br />
          <p className="homePageText">
            Hexagon cloud bread offal vegan, vinyl everyday carry food truck
            listicle. Cardigan humblebrag ennui schlitz. Lo-fi authentic craft
            beer aesthetic la croix street art fam typewriter yuccie. Hammock
            8-bit master cleanse, enamel pin blog franzen williamsburg taiyaki.
            Pug semiotics kinfolk, irony pop-up butcher tousled glossier meh
            post-ironic seitan tattooed fixie 90's.
          </p>
          <br />
          <p className="homePageText">
            Activated charcoal DIY viral authentic pok pok crucifix prism
            intelligentsia sriracha VHS whatever blog flexitarian locavore
            neutra. Keytar snackwave prism, green juice kickstarter heirloom
            etsy. Vape listicle polaroid fingerstache iPhone hot chicken freegan
            artisan etsy live-edge. Skateboard VHS hoodie lyft unicorn, beard
            iPhone tilde microdosing echo park whatever.
          </p>
          <br />
          <p className="homePageText">
            Bushwick helvetica viral yuccie gentrify woke wayfarers put a bird
            on it chia palo santo small batch. Kogi bushwick celiac chartreuse
            beard poutine. Celiac subway tile microdosing, lomo jianbing DIY
            roof party flannel pug church-key pickled. Lumbersexual disrupt
            viral hammock pok pok. Copper mug fingerstache crucifix
            cold-pressed, irony leggings squid hexagon hell of banjo cliche
            cardigan.
          </p>
          <br />
          <p className="homePageText">
            Kombucha beard hexagon tofu meditation messenger bag truffaut photo
            booth chicharrones bespoke tote bag williamsburg wayfarers chia
            etsy. Bitters church-key cornhole street art, lomo kombucha locavore
            kickstarter yuccie flannel stumptown. Tbh blog locavore, trust fund
            truffaut DIY seitan glossier migas listicle vexillologist
            letterpress cray. Biodiesel blog four loko beard poutine venmo
            locavore raw denim humblebrag williamsburg iPhone unicorn next
            level.
          </p>
          <br />
          <p className="homePageText">
            Hexagon cloud bread offal vegan, vinyl everyday carry food truck
            listicle. Cardigan humblebrag ennui schlitz. Lo-fi authentic craft
            beer aesthetic la croix street art fam typewriter yuccie. Hammock
            8-bit master cleanse, enamel pin blog franzen williamsburg taiyaki.
            Pug semiotics kinfolk, irony pop-up butcher tousled glossier meh
            post-ironic seitan tattooed fixie 90's.
          </p>
        </div>
      </div>
    );
  }
}
