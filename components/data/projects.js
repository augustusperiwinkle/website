const projects = [
  {
    title: 'Viditia',
    localSlug: 'viditia',
    team: ['group', 'Team of four developers'],
    imageURLs: [
      'viditia0.jpg',
      'viditia1.jpg',
      'viditia2.jpg',
      'viditia3.jpg',
      'viditia4.jpg',
      'viditia5.jpg',
      'viditia6.jpg',
    ],
    projectLink: 'https://viditia-cf976.web.app/',
    teaser:
      'A web application where users can participate, visualize and interact with data from polls in a fun and clever way.',
    subTitle:
      'Viditia is a web application where users can participate, visualize and interact with data from polls in a fun and clever way.',
    technologies: [
      'react',
      'redux',
      'd3',
      'mui',
      'firebase',
      'node',
      'webpack',
      'babel',
    ],
    videoURL: 'https://www.youtube.com/embed/zXWWoYZqnwo',
    description:
      'Viditia was built off of industry standard technologies: D3.js, Firebase, React, Redux, Material UI, Node, Express, HTML5 & CSS. Firebase allowed for reliable implementation of OAuth and back-end services. Our NoSQL Firebase data base schema design was the backbone of Viditia, and crucial to get right. Our team went through several iterations of the design before we landed on the final production version. Once our schema was finalized, we were able to implement realtime voting/ updates to all of our D3 visualizations. D3 also allowed us to create highly customizable graphs in a wide range of styles.',
    description2: null,
  },
  {
    title: 'Grace Chopper',
    localSlug: 'gracechopper',
    team: ['group', 'Team of four developers'],
    imageURLs: [
      'gracechopper0.jpg',
      'gracechopper1.jpg',
      'gracechopper2.jpg',
      'gracechopper3.jpg',
      'gracechopper4.jpg',
      'gracechopper5.jpg',
    ],
    projectLink: 'https://gracechopper.herokuapp.com/',
    teaser:
      'An eCommerce store featuring guest & user accounts, OAuth, admin privileges, product filters and more.',
    subTitle:
      'Grace Chopper is An eCommerce store featuring guest & user accounts, OAuth, admin privileges, product filters and more.',
    technologies: [
      'react',
      'redux',
      'reactrouter',
      'node',
      'postgresql',
      'sequelize',
      'webpack',
      'babel',
    ],
    videoURL: 'https://www.youtube.com/embed/7SPtPSlAM6A',
    description: `In the market for a fictitious motorcycle? Grace Chopper makes shopping easy by incorporating many of today's most popular features. Product, customer, and order information is stored in our SQL database via Node, PostgreSQL and Sequelize. User sessions persist through express-session, while guest sessions utilize local storage for persistence. Want user features like past order history and autofill on checkout, but don't feel like making an account? Just log in with Google via Passport.js OAuth.`,
    description2:
      'With the additions of product filters for customers, and admin privileges for easy site maintenance, Grace Chopper is just a simple stripe integration (and a couple dozen real life motorcycles) away from making actual sales.',
  },
  {
    title: 'Window',
    localSlug: 'window',
    team: ['solo', 'Sole developer'],
    imageURLs: [
      'window0.jpg',
      'window1.jpg',
      'window2.jpg',
      'window3.jpg',
      'window4.jpg',
      'window5.jpg',
    ],
    projectLink: 'https://github.com/dereklouis/window',
    teaser:
      'A chrome extension that visually renders the current weather conditions in your city.',
    subTitle:
      'Window is a chrome extension that animates the current weather conditions in your city. No words, no numbers, your own virtual window to the outside world.',
    technologies: ['chrome-extension', 'axios'],
    videoURL: 'https://www.youtube.com/embed/V3NOdydimPk',
    description:
      'Using only one dependency (Axios), Window transforms a GET request to OpenWeatherMap API, into a visual rendering. Launch window, and pick your city. Boston, Chicago, Los Angeles, or New York City will render matching skylines, however, any city can be launched with a generic skyline. Once you luanch your city, Window takes the UNIX time for sunrise, sunset, and the moment the code executes, to position the sun on one of 130 possible locations along a progress arc. Once, the sun position has been determined, all other major weather conditions such as day/night, clouds, rain and snow are set.',
    description2:
      'City selections on Window will persist between sessions thanks to local storage. Want to watch the sunset through your virtual window? Just leave Window open, and it will update once every 60 seconds.',
  },
  {
    title: 'D3.js Tutorial',
    localSlug: null,
    team: ['solo', 'Sole developer'],
    imageURLs: ['medium0.jpg'],
    projectLink:
      'https://thedereklouis.medium.com/add-an-interactive-chart-to-your-react-app-using-d3-v6-6c79f14a05f5',
    teaser:
      'A Medium article with an accompanying code demo, written to walk you through your first D3 chart',
    subTitle: null,
    technologies: ['react', 'd3'],
    videoURL: null,
    description: null,
    description2: null,
  },
];

export default projects;
