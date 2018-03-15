import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

// david - importing scss
import "../styles/normalize.scss"
import "../styles/main.scss"


// david - importing the components
import Header from '../components/Header/index.js';
import SignUp from '../components/SignUp/index.js';
import Footer from '../components/Footer/index.js';

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="The Android Apps Project"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <Header />
    <div>
      {children()}
    </div>
    <SignUp />
    <Footer />
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func,
};

export default TemplateWrapper;
