// Has styles properties to be used thoughout the project
// This will help to easily have consistent styles throughout

// Select fonts from https://fonts.google.com/

// Paste the following block in the component file to load fonts

/*
  WebFont.load({
  google: {
    families: [header2.fontFamily, header3.fontFamily]
  }
});
*/
// let backImg = require('./assets/images/winter-wall-10.jpg');

const header1 = {
  color: 'pink',
  font: 'Consolas',
  fontSize: '55px'
};

const header2 = {
  padding: '0 10px',
  color: '#ffffff',
  fontSize: '40px',
  textAlign: 'center',
  fontFamily: 'Poppins',
  fontWeight: 700
};

const paragraph = {
  padding: '11px',
  fontSize: 23,
  lineHeight: 1.3,

  fontFamily: 'Open Sans'
};

const { innerWidth: screenWidth, innerHeight: screenHeight } = window;

const section = {
  minHeight: screenHeight, // i.e. 80% of screen height
  // backgroundImage: `url(${backImg})`,
  backgroundSize: 'cover'
};

const about = {
  width: '90%',
  margin: 'auto',
  height: '100%',
  minHeight: screenHeight / 2,
  display: 'block',
  textAlign: 'center',
  textAlign: 'justify',
  textJustify: 'inter-character'
};

const header3 = {
  color: 'pink',
  fontSize: '29px',
  fontFamily: 'Mansalva'
};

const orgs = {
  paddingTop: screenHeight / 4,
  width: '90%',
  display: 'block',
  margin: 'auto'
};

const colours = {
  stack: {
    JavaScript: '#263238',
    TypeScript: '#3E2723',
    python: '#1A237E'
  }
};

const OrgProjCard = {
  //backgroundColor: '#ECEFF1',
  //backgroundColor: #E8F5E9
  //backgroundColor: '#B9F6CA',
  //backgroundColor: '#69F0AE',
  //backgroundColor: '#00E676',
  //backgroundImage: 'linear-gradient( #69F0AE, #94f1bc)',
  //color: '#DD2C00',
  //borderBottom: '2px solid #4681fe'
};
module.exports = {
  header1,
  header2,
  header3,
  paragraph,
  section,
  screenHeight,
  screenWidth,
  about,
  orgs,
  OrgProjCard,
  colours
};
