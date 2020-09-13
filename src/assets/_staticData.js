export const projectList = [
  {
    id: "5830aa79-ed9a-4dd6-94ed-e99e700067a4",
    linkto: "pangea",
    name: "Pangea",
    githubUrl: "",
    desc: "Internet service provider network discovery and inventory system",
    stack: [
      "Python",
      "Flask (API)",
      "Multiprocessing",
      "MongoDB",
      "PostgreSQL (v1)",
    ],
    detail: {
      Description:
        "Pangea is a name of my project created for an internet service provider company - Vodafone. Its main purpose, among others, was to create a network inventory system as errorless as possible (meaning “clean” data with no errors). It meant to build a tool capable to provide IP network discovery for more than 800.000 host IP addresses in a meaningful time in a multi-vendor (router/switches manufacturers or mediagateways) environment. In less then five hours (thanks to asynchronous multiprocessing) it targeted, identified, and gathered device’s meta data from whole network. It could have captured unsupported devices as well and save only partial dataset for further processing. Biggest issue was data evaluation and parsing. Network discovery was a key feature, which was crucial for further automation development.",
      img1: {
        name: "pangea-discovery.jpg",
        alt: "Pangea discovery scheme",
      },
      Session:
        "Each network discovery was managed as a session with its own unique UUIDv4 and OS PID. Thanks to the design, users could use Pangea simultaneously for host IP or whole subnets as required. For example to scan new IP range or re-scan old for changes.",
      Integration:
        "In time, Pangea was connected to several internal systems, databases and APIs. This allowed us to identify inconsistencies, which was an important step for data management and automation (service deployment, script-driven-troubleshooting, device monitoring, configuration changes or backups). It could also handle other network equipment as Media gateways and it was prepared for LTE modems implementation. In fact, it was designed to communicate with every device supporting SNMP or SSH.",
      Stack:
        "Dev took place on CentOS with Python 3.7. As a database I used PostgreSQL which was replaced with MongoDB later due to its flexibility. Important libraries were Flask, multiprocessing and Paramiko.",
      "What I've learned":
        'It was a challenging project not in coding eventually, but in its complexity, design and data flow. My goal was to create a fully automated solution, extensible in time and basically "manufacturer universal." I worked a lot with data evaulation, parsing and correction in very various environment. Several modules were created as well (for example to communicate with devices over different protocols, with identical outputs or synchronize third party systems). I would say I\'ve learned a lot working on this. Especially to cut tasks (problems) into pieces and make complex, universal solution by solving them separately. What I would have done differently is to plan better. Use some tools for process or design maps.',
    },
  },
  {
    id: "c801d5e2-f13a-404a-93b3-39065c5709ad",
    linkto: "luskf",
    name: "Lusk Frontend",
    githubUrl: "https://github.com/deef29/luskr",
    desc: "Frontend for drugs management system",
    stack: ["React", "Redux + RTK", "Axios", "Material UI"],
    detail: {
      Description:
        "LUSK is an anagram for SUKL - The State institute for drug control of Czech Republic. Besides that, LUSK is a frontend React/Redux application used as an interface to communicate with its backend, of course. The key frontend feature is to provide access to SUKL forms management. Required by law, drug companies have to report how they operate with registered drugs, report its origin et cetera.",
      Components:
        "Most components in this project are focused to present and manipulate data collections according to SUKL policy. Forms, tables or card lists.",
      img1: {
        name: "luskr-workplaces.jpg",
        alt: "LUSK workplaces list",
      },
      Features:
        "This project is still in a development phase and in its very early version. I would like to deliver the most convenient way to manipulate those data sets, search, data validation etc. I would like to develop fully functional drug inventory system, drug registry search, user management, certification management, multi-language solution etc.",

      "What I’ve learned":
        "Well, Material UI is nice and easy to use if you need functional application components.State management is pretty nice and useful concept and I should have larned about RTK before I used pure Redux all around. The biggest issue for me was how to structure project files and to understand reducers.",
    },
  },
  {
    id: "395199fd-9a34-4b2e-9fe5-3eedfeff69db",
    linkto: "luskb",
    name: "Lusk Backend",
    githubUrl: "https://github.com/deef29/luskb",
    desc: "Backend for drugs management system",
    stack: ["NodeJS", "Express", "Axios", "MongoDB", "@hapi/joi"],
    detail: {
      Description:
        "LUSK backend is a NodeJS/Express application to manage reports for the State institute for drug control of Czech Republic. It communicates directly with institute’s API using Axios and provides data for the frontend React application.",
      "Proxy API":
        "It serves as a proxy API for the drug institute. It formats/parses datasets exactly according to the drug institute’s documentation. There are few “not well handled” situations with official API and this proxy API corrects them, so a Frontend application doesn’t have to. For example, there is now way to fetch reports for a whole year from official API, so I used Promises.all() to fetch and format data and provide them as whole. This proxy API handles security certifications as well.",
      "Parsing and validation":
        "Backend uses @hapi/joi library for data validation. There is a strict policy in data flow. Application is ready to process uploaded companies datasets, parse them and validate them against SUKL requirements. If there is any inconsistency, the segment is marked and returned to Frontend (user) for correction. This allows multiple data inputs and inter-connection with other companie’s systems.",
      "Step-by-step":
        "There is a lot of work on this project ahead. For now, I am trying to understand how the user works with the current software in the company. What bothers them, and what can be done automatically. The goal is to have a fast, modern solution to handle tasks required by law, quick errors edit/correction, efficient drug database search, deadlines watchdog or insights.",
      "What I’ve learned":
        "Honestly, I’d say using Python for data manipulation might be easier than JS, but I’ve done it in JS anyway just to learn. I used Express and Axios as they make things easier done. Multer is nice especially considering file uploads and I really, really like hapi/joi for data validation. A headache part of the project (so far) was to understand async operations in JS / Promises.",
    },
  },
  {
    id: "db4e5819-1180-4641-9d2a-73af7b8ff458",
    linkto: "dfcom",
    name: "danielfajt.com",
    githubUrl: "https://github.com/deef29/danielfajt.com",
    desc: "My simple personal portfolio webpage",
    stack: ["React", "CSS3", "MobX"],
    detail: {
      description:
        "My personal website created primarily to introduce myself and to briefly present my work. ",
      "What I've learned":
        "Layouts and simple responsive design. I wanted to know, why I should use SASS over the pure CSS3. And I have. I’ll implement MobX as well.",
    },
  },
];

export const aboutMe = [
  "I used to work as network engineer for more than 10 years. Then, I had an opportunity to help with a problem with data inconsistencies between ISP (Internet service provider) network and internal systems/databases. So ~3 years ago, I started a project to develop network automation and discovery tool using Python, Flask, multiprocessing, PostgreSQL and MongoDB. I found I do like programming, data manipulation and solving problems (a little bit more, than networks). I am learning ever since.",

  "It was my first project. Its job was to find and collect information from network devices (scan ~800k host IP addresses), identify them, compare those data with company’s internal systems, create reports of inconsistencies and as a result, maintain “self” updated database. As it grown, it was connected to more internal systems, for example, we could enhance customer delivery process (automate device deployment, setup monitoring tool and so on).",

  "Next steps were to fully automate service delivery, configuration, develop auto-troubleshooting module and many other, however I have recently moved to San Diego to support my wife’s work here as a scientist at UCSD. Unfortunately, working remotely was not an option, so I had to quit.",

  "Currently, I am looking for a job here as a junior programmer. Meanwhile, I’ve started to learn MERN stack and I am working (for free) for another company in Czech republic trying to develop front-end (React) and back-end (Node) application to process, validate and upload monthly reports (required by law) to State institute for Drug Control. It’s my learning project for now with just a little chance it may grow from “data parsing” to “drug inventory” system for pharmaceutical companies.",

  "I should also mention that I'm eligible to work in the US and I don’t need any health insurance.",
];
