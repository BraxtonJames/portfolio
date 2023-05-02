// import html from '../images/skills/html.svg';
import tailwind from '../images/skills/tailwindcss.svg';
import js from '../images/skills/js.svg';
import react from '../images/skills/react.svg';
import sass from '../images/skills/sass.svg';
import html from '../images/skills/html1.png';
import css from '../images/skills/css1.png';
import ruby from '../images/skills/ruby1.png';
import postgres from '../images/skills/postgres.png';
import rails from '../images/skills/rails.png';
import jest from '../images/skills/jest.png';
import '../styles/Skills.css';

// const skillList = ['HTML5'];

// const skillDisp = () => {
//   skillList.map((item) => {
//     return (
//       <div className="skill-percent">
//         <img className="skill-icon" src={html} alt="html icon" />
//         <div className="percent-frame">
//           <div className="top-precent">
//             <p className="skill-paragraph">
//               {item}
//               <span className="span-years">1 YEAR</span>
//             </p>
//             {/* <span className="percent">90%</span> */}
//           </div>
//           <div className="line-skills--percent">
//             {' '}
//             <span className="progress-line" />
//           </div>
//         </div>
//       </div>
//     );
//   });
// };

const Skills = () => (
  <>
    <div className="left-side--skills">
      <div className="horizontal--line-black" />
      <p className="number-text--about">03</p>
      <p className="question">SKILL SET</p>
    </div>
    <section className="skills">
      <div className="skills-left--side">

        <div className="skill-percent">
          <img className="skill-icon" src={html} alt="html icon" />
          <div className="percent-frame">
            <div className="top-precent">
              <p className="skill-paragraph">
                HTML5
                <span className="span-years">1 YEAR</span>
              </p>
              {/* <span className="percent">90%</span> */}
            </div>
            <div className="line-skills--percent">
              {' '}
              <span className="progress-line" />
            </div>
          </div>
        </div>

        <div className="skill-percent">
          <img className="skill-icon" src={css} alt="html icon" />
          <div className="percent-frame">
            <div className="top-precent">
              <p className="skill-paragraph">
                CSS3
                <span className="span-years">1 YEAR</span>
              </p>
              {/* <span className="percent">90%</span> */}
            </div>
            <div className="line-skills--percent">
              {' '}
              <span className="progress-line" />
            </div>
          </div>
        </div>

        <div className="skill-percent">
          <img className="skill-icon" src={js} alt="html icon" />
          <div className="percent-frame">
            <div className="top-precent">
              <p className="skill-paragraph">
                JAVASCRIPT
                <span className="span-years">1 YEAR</span>
              </p>
              {/* <span className="percent">90%</span> */}
            </div>
            <div className="line-skills--percent">
              {' '}
              <span className="progress-line" />
            </div>
          </div>
        </div>

        <div className="skill-percent">
          <img className="skill-icon" src={react} alt="html icon" />
          <div className="percent-frame">
            <div className="top-precent">
              <p className="skill-paragraph">
                REACT
                <span className="span-years">1 YEAR</span>
              </p>
              {/* <span className="percent">90%</span> */}
            </div>
            <div className="line-skills--percent">
              {' '}
              <span className="progress-line" />
            </div>
          </div>
        </div>

        <div className="skill-percent">
          <img className="skill-icon" src={tailwind} alt="html icon" />
          <div className="percent-frame">
            <div className="top-precent">
              <p className="skill-paragraph">
                Bootstrap
                <span className="span-years">1 YEAR</span>
              </p>
              {/* <span className="percent">90%</span> */}
            </div>
            <div className="line-skills--percent">
              {' '}
              <span className="progress-line" />
            </div>
          </div>
        </div>

      </div>

      <div className="skills-left--side">

        <div className="skill-percent">
          <img className="skill-icon" src={ruby} alt="html icon" />
          <div className="percent-frame">
            <div className="top-precent">
              <p className="skill-paragraph">
                Node
                <span className="span-years">1 YEAR</span>
              </p>
              {/* <span className="percent">90%</span> */}
            </div>
            <div className="line-skills--percent">
              {' '}
              <span className="progress-line" />
            </div>
          </div>
        </div>

        <div className="skill-percent">
          <img className="skill-icon" src={rails} alt="html icon" />
          <div className="percent-frame">
            <div className="top-precent">
              <p className="skill-paragraph">
                Express
                <span className="span-years">1 YEAR</span>
              </p>
              {/* <span className="percent">90%</span> */}
            </div>
            <div className="line-skills--percent">
              {' '}
              <span className="progress-line" />
            </div>
          </div>
        </div>

        <div className="skill-percent">
          <img className="skill-icon" src={postgres} alt="html icon" />
          <div className="percent-frame">
            <div className="top-precent">
              <p className="skill-paragraph">
                MongoDB
                <span className="span-years">1 YEAR</span>
              </p>
              {/* <span className="percent">90%</span> */}
            </div>
            <div className="line-skills--percent">
              {' '}
              <span className="progress-line" />
            </div>
          </div>
        </div>

        <div className="skill-percent">
          <img className="skill-icon" src={jest} alt="html icon" />
          <div className="percent-frame">
            <div className="top-precent">
              <p className="skill-paragraph">
                Git
                <span className="span-years">1 YEAR</span>
              </p>
              {/* <span className="percent">90%</span> */}
            </div>
            <div className="line-skills--percent">
              {' '}
              <span className="progress-line" />
            </div>
          </div>
        </div>

        <div className="skill-percent">
          <img className="skill-icon" src={sass} alt="html icon" />
          <div className="percent-frame">
            <div className="top-precent">
              <p className="skill-paragraph">
                GitHub
                <span className="span-years">1 YEAR</span>
              </p>
              {/* <span className="percent">90%</span> */}
            </div>
            <div className="line-skills--percent">
              {' '}
              <span className="progress-line" />
            </div>
          </div>
        </div>

      </div>

    </section>
    <div className="footer">
      <a className="mail" href="smithjohn@gmail.com">smithjohn@gmail.com</a>
    </div>
  </>
);

export default Skills;
