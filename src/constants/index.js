import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  basicweather,
  threejs,
  github,
  portfolio,
  healthyapp,
  pizzaapp,
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
    title: "UI UX Engineer",
    icon: figma,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "AI/ML Developer",
    icon: creator,
  },
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Mobile Developer",
    icon: backend,
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
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },

];

const experiences = [
  {
    title: "Secretary- Communication Society",
    company_name: "IEEE Student Branch University of Ruhuna",
    icon: creator,
    iconBg: "#383E56",
    date: "2024 - Present",
    points: [
      "Effectively communicate with branch members, faculty advisors, and IEEE officials.",
      "Gain experience in planning, organizing, and executing events and activities.",
      "Engage with members,work together and win together ",
    ],
  },
  {
    title: "Captain(Women)-Faculty Chess Team",
    company_name: "Faculty of Engineerning,University of Ruhuna",
    icon: creator,
    iconBg: "#E6DEDD",
    date: "2023 - Present",
    points: [
      "Won Third place, inter-faculty Chess championship Women,University of Ruhuna.",
      ]
  },
  {  
    title: "Team Leader,Outgoing Exchange marketing Business to business",
    company_name: "AIESEC in Ruhuna",
    icon: creator,
    iconBg: "#383E56",
    date: "2022 – 2023",
    points: [
      " Best Team Leader, Outgoing Exchange marketing, Business to business 2023,AIESEC in Ruhuna June 2023" ,
      "Design 30+ Flyers",
      "Gain experience in planning, organizing, and executing events and activities.",
    ],
  },
  {
    title: "Team Leader,Incoming Global Talent,Business to Bussiness 2022",
    company_name: "AIESEC in Ruhuna",
    icon: creator,
    iconBg: "#E6DEDD",
    date: "2021 – 2022",
    points: [
      "Discuss with bussiness partners and pitch them",
      "Engage with members,work together ",
      
    ],
  },
  {
    title: "Mentor",
    company_name: "Sri Lanka Unites",
    icon: creator,
    iconBg: "#E6DEDD",
    date: "2022",
    points: [
      "Organized Leadership Programs",
      "Guide the particpants and actively work with them ",
      
    ],
  },
  
  {
    title: "Campus Ambassador Intern",
    company_name: "IMUN",
    icon: creator,
    iconBg: "#E6DEDD",
    date: "July 2021-August 2021",
    points: [
      "Organized Leadership Programs",
      "Guide the particpants and actively work with them ",
      
    ],
  },
  {
    title: "Delegate of Estonia",
    company_name: " IMUN online conference 70.0",
    icon: creator,
    iconBg: "#E6DEDD",
    date: "August 2021",
    points: [
      
    ],
  },
  {
    title: "Teacher",
    company_name: "Holy Cross College Gampaha",
    icon: creator,
    iconBg: "#E6DEDD",
    date: "2020-2019",
    points: [
      "Worked as a voluntary based teacher for Combined Mathematics in Holy Cross College,Gampaha",
    ],
  },
  {
    title: "President",
    company_name: "Aviation Club,Holy Cross College Gampaha",
    icon: creator,
    iconBg: "#E6DEDD",
    date: "2019-2018",
    points: [
      "Participated  and gained practical knowledge of industry from Out Reach Pilot Programme and Organized by Civil Aviation Authority,2018",
      "Participated for Quiz Competition Organized by Air Traffic Control Team,2018",
      "Participated for Quiz Competition Organized by Aviation College,Katunayake",
    ],
  },
  {
    title: "Secretay",
    company_name: "Science Society,Holy Cross College Gampaha",
    icon: creator,
    iconBg: "#E6DEDD",
    date: "2019-2018",
    points: [
      "Won Second Place from Mathematics Quiz Competition Organized by Yasodhara Devi Balika Vidyalaya,Gampaha,2019",
      "Participated for Mathematics Quiz Competition Organized by University of Kelaniya,2018",
      "Organized Annual Science day of Holy Cross College Gampaha 2018",
    ],
  },
  {
    title: "Other Extra Works done in School",
    company_name: "Holy Cross College Gampaha",
    icon: creator,
    iconBg: "#E6DEDD",
    date: "2019-2018",
    points: [
       "Tressurer-Agnes House,Annual Sports Meet 2018",
       "Junior Prefect- 2011,2014-2016",
       "Member - School Dancing Group ,Won third place on zonal dancing competition 2014",
       "Member - School Debate Team"
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Computer Engineering Undegraduate GPA-3.2",
    name: "Faculty of Engineering",
    designation: "University of Ruhuna"
  },
  {
    testimonial:
      "G.C.E. Advanced Level 2A' 1B -2019",
    name: "Holy Cross College",
    designation: "Gampaha",
  },
];

const projects = [
  {
    name: "Basic weather app",
    description:
      "Shows Temparture,humidity and wind and change the icon according to weather",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: basicweather,
    source:github,
    source_code_link: "https://github.com/monilkarajapaksha/BasicWeatherApp.git",
  },
  {
    name: "Portfolio",
    description:
      "Link to this Project",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind css",
        color: "green-text-gradient",
      },
      {
        name: "threejs",
        color: "pink-text-gradient",
      },
    ],
    image: portfolio,
    source:github,
    source_code_link: "https://github.com/monilkarajapaksha/My_Portfolio.git",
  },
  {
    name: "Healthy Mobile App",
    description:
      "Personal health tip Advisor",
    tags: [
      {
        name: "figma",
        color: "blue-text-gradient",
      },
      
    ],
    image: healthyapp,
    source:figma,
    source_code_link: "https://www.figma.com/file/uNtuwfDSolTDjdj0X8V0Ze/HealthyApp?type=design&node-id=260%3A1742&mode=design&t=QfblacC3gXjWC1kI-1",
  },
  {
    name: "Pizza Delivary App",
    description:
      "Desktop Application for pizza store",
    tags: [
      {
        name: "figma",
        color: "blue-text-gradient",
      },
      
    ],
    image: pizzaapp,
    source:figma,
    source_code_link: "https://www.figma.com/file/uNtuwfDSolTDjdj0X8V0Ze/HealthyApp?type=design&node-id=260%3A1742&mode=design&t=QfblacC3gXjWC1kI-1",
  },
  
];

export { services, technologies, experiences, testimonials, projects };
