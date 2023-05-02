import Passion from './Passion';
import Skills from './Skills';
import photoMe from '../images/myphoto.jpg';
import '../styles/WhoMe.css';

const WhoMe = () => (
  <>
    <section className="information">
      <div className="left-side--div">
        <div className="horizontal--line-black" />
        <p className="number-text--about">01</p>
        <p className="question">WHO I AM</p>
      </div>
      <div className="right-side--div">
        <h2 className="heading-secondary">JOHN SMITH</h2>
        <summary className="small-summary">
          An experienced technical professional with a certificate in
          Full Stack Web Development and a passion for application development,
          I am interested in joining an organization where I can combine
          my knowledge and experience to create innovative products and solve real-world challenges.
        </summary>
        {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
        <img className="my-photo" src={photoMe} alt="photo for me" />
      </div>

    </section>
    <Passion />
    <Skills />
  </>
);

export default WhoMe;
