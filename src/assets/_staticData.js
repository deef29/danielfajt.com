export const projectList = [
  {
    id: "5830aa79-ed9a-4dd6-94ed-e99e700067a4",
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
        "Pangea is a name of my project created for an internet service provider company - Vodafone. Its main purpose, among others, was to create a network inventory system as errorless as possible (meaning “clean” data with no errors). It meant to build a tool capable to provide IP network discovery for more than 800.000 host IP addresses in a meaningful time in a multi-vendor (router/switches manufacturers or mediagateways) environment. In less then five hours (thanks to asynchronous multiprocessing) it targeted, identified, and gathered device’s meta data from whole network. It could have captured unsupported devices as well and save only partial dataset for further processing. Biggest issue was data evaluation and parsing. Network discovery was a id feature, which was crucial for further automation development.",
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
    name: "Lusk Frontend",
    githubUrl: "https://github.com/deef29/luskr",
    desc: "Drugs management system",
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
    name: "Lusk Backed",
    desc: "Internet service provider network discovery and inventory system",
    stack: [
      "Python",
      "Flask (API)",
      "Multiprocessing",
      "MongoDB",
      "PostgreSQL (v1)",
    ],
    detail: {
      description: "This is Lusk BACKEND project",
    },
  },
  {
    id: "db4e5819-1180-4641-9d2a-73af7b8ff458",
    name: "danielfajt.com",
    desc: "Internet service provider network discovery and inventory system",
    stack: [
      "Python",
      "Flask (API)",
      "Multiprocessing",
      "MongoDB",
      "PostgreSQL (v1)",
    ],
    detail: {
      description: "This is this project",
    },
  },
];
