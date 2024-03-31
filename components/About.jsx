import Footer from './Footer';
import Credit from './Credit';
import '../styles/about.css';

export default function About() {
  return (
    <div className="page-wrapper">
      <div id="about-wrapper">
        <img
          src="https://i.imgur.com/sGZ0D2k.jpg"
          referrerpolicy="no-referrer"
          id="about-image"
          alt="Augustus Periwinkle Profile Picture"
        />
        <div className="text-wrapper">
          <p>
            Augustus Periwinkle's music is like a scrumptious smorgasborg, or a
            fresh fruit smoothie, or a bountiful wildflower bouquet; made up of
            a vibrant variety of flavors and colors, one thing is certain:
            you're going to have a lot of fun.
            <br />
            <br />
            Based in New York City, Augustus Periwinkle had spent most of his
            life touring around the world as a drummer in various bands and
            groups. Now Augustus is completing his metamorphosis into singer,
            songwriter, and producer. The result is a surprising and joyful mix
            of pop, funk, indie rock, r&b, and anything else that sparks the
            imagination.
          </p>
        </div>
      </div>
      <Footer />
      <Credit />
    </div>
  );
}
