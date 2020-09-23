import FrontEndSkillImage from '../assets/images/front-end-pic.png';
import BackEndSkillImage from '../assets/images/back-end-pic.jpg';
import MobileDevImage from '../assets/images/mobile-dev-pic.jpeg';
import WebTestingImage from '../assets/images/web-testing.jpg';

const frontEndSkills = [
  {
    id: 1,
    skills: 'HTML, Css, Sass, Bootstrap, Javascript, jQuery',
  },

  {
    id: 2,
    skills:
      'TypScript, React, Next.js, Redux, Material Ui, Saga, Thunk, Formik',
  },

  {
    id: 3,
    skills: 'Vue, Vuex, Quasar Framework, Next.js',
  },

  {
    id: 4,
    skills: 'Webpack, Babel, Git, Figma, SVG, Charts',
  },

  {
    id: 5,
    skills: 'Firebase, Apollo Client, Ajax , Xhr',
  },

  {
    id: 6,
    skills: 'Css animation, keyframes, Browser Testing',
  },
];

const backEndSkills = [
  {
    id: 1,
    skills: 'Php (core), Laravel, ',
  },
  {
    id: 2,
    skills: 'Node.js, Express.js, Nest.js, Scrapping',
  },
  {
    id: 3,
    skills: 'Docker, Kubernetes, GCD, AWS, Digital Ocean',
  },
  {
    id: 4,
    skills: 'MongoDB, MySQl, Firestore, ',
  },
  {
    id: 5,
    skills: "GraphQL server, Apollo Server, Restful Api's ",
  },
  {
    id: 6,
    skills: 'Django, Flask ',
  },
];

const mobileDevelopmentSkills = [
  {
    id: 1,
    skills: 'Android( Java, Kotlin)',
  },
  {
    id: 2,
    skills: 'IOS ( React Native)',
  },
  {
    id: 3,
    skills: 'React Native',
  },
  {
    id: 4,
    skills: 'Firebase and aws integration with Mobile Development',
  },
  {
    id: 5,
    skills: 'Testing',
  },
];

const testingSkillsData = [
  {
    id: 1,
    skills: 'Jest Testing',
  },
  {
    id: 2,
    skills: 'Enzyme Testing',
  },
  {
    id: 3,
    skills: 'Unit Testing',
  },
];

export const skillsPageData = [
  {
    id: 1,
    heading: 'Top Front End Skills',
    imageSrc: FrontEndSkillImage,
    data: frontEndSkills,
  },
  {
    id: 2,
    heading: 'Top Back End Skills',
    imageSrc: BackEndSkillImage,
    data: backEndSkills,
  },

  {
    id: 3,
    heading: 'Mobile Development Skills',
    imageSrc: MobileDevImage,
    data: mobileDevelopmentSkills,
  },

  {
    id: 4,
    heading: 'Testing Skills',
    imageSrc: WebTestingImage,
    data: testingSkillsData,
  },
];
