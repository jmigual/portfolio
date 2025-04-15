/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 1000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Joan Marce",
  title: "Hi all, I'm Joan",
  subTitle: emoji(
    "I'm a Software Developer with experience spanning embedded systems, machine learning, and full-stack development. Currently pursuing a PhD in scheduling while working professionally in full-stack development. I'm passionate about contributing to open source and continually expanding my technical expertise through new challenges."
  ),
  resumeLink: "", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/jmigual",
  linkedin: "https://www.linkedin.com/in/jmigual/",
  gmail: "j.marce.igual@gmail.com",
  gitlab: "https://gitlab.com/jmigual",
  // facebook: "https://www.facebook.com/saad.pasta7",
  // medium: "https://medium.com/@saadpasta",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do?",
  subTitle: "I LOVE CODING DONE RIGHT",
  skills: [
    emoji(
      "⚡ Designing and developing high-performance backend services using C# and .NET ecosystem"
    ),
    emoji(
      "⚡ Researching and implementing advanced scheduling algorithms and constraint programming solutions"
    ),
    emoji(
      "⚡ Building robust CI/CD pipelines and deploying scalable applications to cloud environments"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "cpp",
      fontAwesomeClassname: "devicon-cplusplus-plain"
    },
    {
      skillName: "csharp",
      fontAwesomeClassname: "devicon-csharp-plain"
    },
    {
      skillName: "dotnet",
      fontAwesomeClassname: "devicon-dot-net-plain"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "devicon-python-plain"
    },
    {
      skillName: "tensorflow",
      fontAwesomeClassname: "devicon-tensorflow-original"
    },
    {
      skillName: "rust",
      fontAwesomeClassname: "devicon-rust-plain"
    },
    {
      skillName: "Qt",
      fontAwesomeClassname: "devicon-qt-plain"
    },
    {
      skillName: "sql",
      fontAwesomeClassname: "devicon-mysql-plain"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "devicon-react-original"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "devicon-nodejs-plain"
    },
    {
      skillName: "bash",
      fontAwesomeClassname: "devicon-bash-plain"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "devicon-docker-plain"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "TU Delft",
      logo: require("./assets/images/logoTuDelft.svg").default,
      subHeader: "Master of Science in Embedded Systems",
      duration: "September 2017 - April 2019",
      desc: "Specialisation in Software Systems",
      descBullets: [
        "Master's thesis on schedulability of limited-preemptive moldable gang tasks",
        "Paper: Response-time analysis for non-preemptive periodic moldable gang tasks (ECRTS 2022)"
      ]
    },
    {
      schoolName: "Politechnical University of Catalonia (UPC, BarcelonaTech)",
      logo: require("./assets/images/logoUpc.svg").default,
      subHeader:
        "Double bachelor in Computer Science and Industrial Engineering",
      duration: "September 2013 - July 2018",
      desc: "The double bachelor program is an elite program that let me obtain both bachelors in only a span of 5 years.",
      descBullets: [
        "Bachelor's thesis on image Deep Learning for medical data at Pricess Margaret Cancer Centre in Toronto, Canada."
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Scheduling",
      progressPercentage: "100%"
    },
    {
      Stack: "Programming",
      progressPercentage: "90%"
    },
    {
      Stack: "Backend",
      progressPercentage: "80%"
    },
    {
      Stack: "Machine Learning",
      progressPercentage: "70%"
    },
    {
      Stack: "Frontend", //Insert stack or technology you have experience in
      progressPercentage: "60%" //Insert relative proficiency in percentage
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Phd Student",
      company: "TU Eindhoven",
      companylogo: require("./assets/images/logoTueWhite.png"),
      date: "October 2020 - Present",
      desc: "Research on Schedule Adaptive Modular Flexible Manufacturing Systems (SAM-FMS)",
      descBullets: [
        "Research on scheduling of modular flexible manufacturing systems, also known as cyber-physical systems.",
        "Modelling of the system using constraint programming",
        "Implementation of real-time scheduling algorithms in C++ and Rust"
      ]
    },
    {
      role: "Software Developer",
      company: "Clouding.io",
      date: "October 2024 - Present",
      companylogo: require("./assets/images/logoCloudingBlue.svg").default,
      desc: "Full stack development of the management infrastructure of the cloud provider",
      descBullets: [
        "Backend services in .NET Core and .NET Framework in C#",
        "Frontend services in AngularJS and React"
      ]
    },
    {
      role: "Junior Software Developer",
      company: "Google Summer of Code",
      date: "May 2016 - August 2016",
      companylogo: require("./assets/images/logoGsocClean.svg").default,
      desc: "Helped the development of the Mixxx Project",
      descBullets: ["GUI development in C++ and Qt"]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+92-0000000000",
  email_address: "saadpasta70@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
