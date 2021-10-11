import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h2>Danyal  Hyder</h2>
        <p><a href="mailto:hyderdanyal@gmail.com">hyderdanyal@gmail.com</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Hi, I&apos;m Danyal. I like building things.
        I am a <a href="http://mu.ac.in/">Mumbai University</a> graduate in Computer Engineering,
        Application Developer at <a href="https://www.ibm.com/us-en/">IBM</a>. Before IBM I was
        self-nurturing and getting hands-on experience in <a href="https://www.javascript.com/">JavaScript</a>
        , <a href="https://www.python.org/">Python</a>
        , and <a href="https://www.oracle.com/java/technologies/">Java</a>.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Danyal Hyder .</p>
    </section>
  </section>
);

export default SideBar;
