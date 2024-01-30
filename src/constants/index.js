import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    html,
    css,
    reactjs,
    tailwind,
    nodejs,
    mongodb,
    git,
    threejs,
    WorkoutAppHomePage,
    FFHomePage,
    FantasyFHomePage,
    GeneralAssemblyLogo,
    ApolloMarketing,
    theIto,
    seatLogo,
    linkedInLogo,
    rubyOnRails
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Software Engineering Bootcamp",
      icon: web,
    },
    {
      title: "React Developer",
      icon: mobile,
    },
    {
      title: "Ruby On Rails Developer",
      icon: backend,
    },
    {
      title: "MERN Stack",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "Ruby On Rails",
      icon: rubyOnRails,
    },
    {
      name: "GitHub",
      icon: git,
    },
  ];
  
  const experiences = [
    {
      title: "Software Engineering Immersive Course",
      company_name: "General Assembly",
      icon: GeneralAssemblyLogo,
      iconBg: "#383E56",
      date: "March 2023 - June 2023",
      points: [
        "A 70 hour per week, 3 month intense bootcamp which served as a brilliant kickstart to my coding career.", 
        " I learned the MERN Stack, with additional time spent learning Ruby on Rails.",
        "See Projects above for more details."
      ],
    },
    {
      title: "Founder",
      company_name: "Apollo Marketing Agency",
      icon: ApolloMarketing,
      iconBg: "#E6DEDD",
      date: "April 2021 - October 2022",
      points: [
        "Built and led a marketing agency, winning 6 clients and employing a small contracted team to deliver high-impact marketing strategies for fitness clientele.",
        "Utilised analytical and problem-solving skills to identify and meet client needs.",
        "Streamlined operations by developing efficient systems and processes, demonstrating aptitude for automation and continuous improvement."
      ],
    },
    {
      title: "Digital Marketing Manager",
      company_name: "The Innovation Technology Office",
      icon: theIto,
      iconBg: "#E6DEDD",
      date: "March 2020 to March 2021",
      points: [
"Identifying client requirements and developing the most suited marketing solutions",
        "Carried out cold calling and networking events for front end pipeline growth.",
        "Liaising between departments to ensure successful delivery of campaigns."
      ],
    },
    {
      title: "New and Used Car Sales Executive",
      company_name: "Bristol Street Motors SEAT",
      icon: seatLogo,
      iconBg: "#E6DEDD",
      date: "September 2018 to November 2019",
      points: [
"Prospected customers through email, telephone, or when they walked onto the forecourt.",
        "Organised my sales pipeline, delivering award winning customer service (being acknowledged by the CEO for this)",
        "I developed my sales acumen, organisation, pressure handling and problem-solving abilities."
      ],
    },
  ];
  

  const projects = [
    {
      name: "Workout App",
      description:
        "Workout App allowing users to create, schedule, track, modify and analyse their gym performance. Currently undergoing conversion from React/Rails to React Native/Express.js",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "rails",
          color: "green-text-gradient",
        },
        {
          name: "postgreSQL",
          color: "pink-text-gradient",
        },
      ],
      image: WorkoutAppHomePage,
      source_code_link: "https://github.com/jayteebee/workout-app-fe",
      deployed_link: "https://workout-app-fe-five.vercel.app/"
    },
    {
      name: "Fantasy Finance",
      description:
        "Capstone bootcamp project: Risk-free paper trading platform to assist beginner and advanced traders in refining their strategies. ",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "rails",
          color: "green-text-gradient",
        },
        {
          name: "bootstrap",
          color: "pink-text-gradient",
        },
      ],
      image: FantasyFHomePage,
      source_code_link: "https://github.com/jayteebee/fantasyFinance/blob/main/README.md",
      deployed_link: "https://fantasy-finance-front-end.vercel.app/"

    },
    {
      name: "Football Friends",
      description:
        "An app for football fans to connect based on their preferred teams and players. Built as part of a team. Practising pair programming, daily stand-ups, and merge conflict resolution. I was also designated the code owner on GIT.",
      tags: [
        {
          name: "express",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "node.js",
          color: "pink-text-gradient",
        },
      ],
      image: FFHomePage,
      source_code_link: "https://github.com/jayteebee/Football-Friends/blob/JB-Dev/completeREADME.md",
      deployed_link: "https://football-friends.vercel.app/"

    },
  ];

  const contactMe = [
    {
      name: "linkedIn",
      link: "https://www.linkedin.com/in/jethroblock/",
      icon: linkedInLogo
    },
    {
      name: "GitHub",
      link: "https://github.com/jayteebee",
      icon: git
    },
  ]
  
  export { services, technologies, experiences, projects, contactMe };