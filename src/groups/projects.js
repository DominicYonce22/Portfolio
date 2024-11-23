const iconTypes = {
  web: "globe",
  github: "logo-github",
};

export const projects = [
  {
    name: "Omnifood",
    links: [
      {
        type: "web",
        link: "https://dominicproject2.netlify.app/",
        icon: iconTypes.web,
      },
      {
        type: "github",
        link: "https://github.com/DominicYonce22/Omnifood",
        icon: iconTypes.github,
      },
    ],
    image: "/images/omnifood.png",
    description:
      "Omnifood is a static website demonstrating responsive design using HTML, CSS, and core web technologies for a clean, mobile-friendly user experience.",
  },
  {
    name: "Spotify Clone",
    links: [
      {
        type: "web",
        link: "https://spoticlone-e8f37.web.app/",
        icon: iconTypes.web,
      },
      {
        type: "github",
        link: "https://github.com/DominicYonce22/spotify-clone.git",
        icon: iconTypes.github,
      },
    ],
    image: "/images/spotify.png",
    description:
      "Spotify Clone mimics the music streaming app interface, using React, Vite, Firebase, and Tailwind CSS for music search, browsing, and playback.",
  },
  {
    name: "Netflix Clone",
    links: [
      {
        type: "web",
        link: "https://netflixclone-b2756.web.app/",
        icon: iconTypes.web,
      },
      {
        type: "github",
        link: "https://github.com/DominicYonce22/netflix-react",
        icon: iconTypes.github,
      },
    ],
    image: "/images/netflix.png",
    description:
      "Netflix Clone features a clean interface with Firebase for deployment, dynamic movie listings fetched from the MovieDB API, and Tailwind CSS for styling.",
  },
  {
    name: "Wild Oasis",
    links: [
      {
        type: "web",
        link: "https://dominic-wild-oasis.netlify.app/",
        icon: iconTypes.web,
      },
      {
        type: "github",
        link: "https://github.com/DominicYonce22/wild-oasis",
        icon: iconTypes.github,
      },
    ],
    sampleUser: { email: "mimi@example.com", password: "12345" },
    image: "/images/wild-oasis.png",
    description:
      "Wild Oasis is a cabin booking app with Supabase backend, user authentication, React Query for data fetching, and React Router for navigation.",
  },
  {
    name: "Worldwise",
    links: [
      {
        type: "web",
        link: "https://green-worldwise.netlify.app/",
        icon: iconTypes.web,
      },
      {
        type: "github",
        link: "https://github.com/DominicYonce22/worldwise",
        icon: iconTypes.github,
      },
    ],
    image: "/images/worldwise.png",
    description:
      "Worldwise tracks user travels, displaying visited places on a map with Leaflet, and allows users to share trip details and locations.",
  },
  {
    name: "Fast React Pizza",
    links: [
      {
        type: "web",
        link: "https://yellow-react-pizza.netlify.app/",
        icon: iconTypes.web,
      },
      {
        type: "github",
        link: "https://github.com/DominicYonce22/yellow-react-pizza",
        icon: iconTypes.github,
      },
    ],
    image: "/images/react-pizza.png",
    description:
      "Fast React Pizza is an online pizza ordering app built with React, Redux for state management, and real-time price updates for customizing orders.",
  },
  {
    name: "Candy Paint",
    links: [
      {
        type: "web",
        link: "https://dancing-eclair-10841f.netlify.app/",
        icon: iconTypes.web,
      },
    ],
    githubLink: null, // No GitHub link provided
    image: "/images/candy-paint.png",
    description:
      "Candy Paint is a static homepage for a car paint business, designed with clean white space and typography principles to engage potential customers.",
  },
];
