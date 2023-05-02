import rent from '../images/rentmedesktop.PNG';
import covid from '../images/covid.PNG';
// import space from '../images/space.PNG';
import recipe from '../images/recipe.PNG';
// import pokemon from '../images/pokemons.PNG';
// import budget from '../images/budgetapp.PNG';
// import book from '../images/bookstore.PNG';
// import mapty from '../images/mapty.PNG';
// import unicef from '../images/unicef.PNG';

const Data = [
  {
    image: rent,
    name: 'Pandemic Tracker',
    liveLink: 'https://rent-me-capstone-project.netlify.app/login',
    sourceLink: 'https://github.com/JOHN-lab/house-booking-back-end',
    description: 'The Pandemic Tracker is a MERN stack application using React Globe NPM and API’s to internal and external data to render COVID statistics by country and US States.',
  },
  {
    image: covid,
    name: 'Shelf Indulgence',
    liveLink: 'https://covid19-tracker9.netlify.app/',
    sourceLink: 'https://github.com/JOHN-lab/covid-tracker',
    description: 'A book club community where book enthusiasts can join, login, and search for books via an API and discuss the books they are reading in a real time chat application.',
  },
  {
    image: recipe,
    name: 'Employee Directory',
    liveLink: 'https://powerful-mountain-66036.herokuapp.com/',
    sourceLink: 'https://github.com/JOHN-lab/Recipe-app',
    description: 'A front-end only React application that incorporates React Class Components that use JavaScript methods to map and filter the data to change states dynamically.',
  },
];
export default Data;
