import { AiOutlineTwitter, AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { FaAngellist } from 'react-icons/fa';
import '../styles/SocialLinks.css';

const SocialLinks = () => (
  <div className="footer social-links--site">
    <a className="anchor-link" href="https://twitter.com/Rem79940127">
      <AiOutlineTwitter className="social-icon--footer" />
    </a>
    <a className="anchor-link" href="https://github.com/JOHN-lab">
      <AiFillGithub className="social-icon--footer" />
    </a>
    <a className="anchor-link" href="https://www.linkedin.com/in/johnsmith/">
      <AiFillLinkedin className="social-icon--footer" />
    </a>
    <a className="anchor-link" href="https://angel.co/u/john-smith">
      <FaAngellist className="social-icon--footer" />
    </a>
  </div>
);

export default SocialLinks;
