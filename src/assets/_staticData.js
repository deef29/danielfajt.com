export const projectList = [
  {
    key: 1,
    name: "Pangea",
    desc: "Internet service provider network discovery and inventory system",
    stack: [
      "Python",
      "Flask (API)",
      "Multiprocessing",
      "MongoDB",
      "PostgreSQL (v1)",
    ],
  },
  {
    key: 2,
    name: "Lusk frontend",
    desc: "Internet service provider network discovery and inventory system",
    stack: [
      "Python",
      "Flask (API)",
      "Multiprocessing",
      "MongoDB",
      "PostgreSQL (v1)",
    ],
  },
  {
    key: 3,
    name: "Lusk backed",
    desc: "Internet service provider network discovery and inventory system",
    stack: [
      "Python",
      "Flask (API)",
      "Multiprocessing",
      "MongoDB",
      "PostgreSQL (v1)",
    ],
  },
  {
    key: 4,
    name: "danielfajt.com",
    desc: "Internet service provider network discovery and inventory system",
    stack: [
      "Python",
      "Flask (API)",
      "Multiprocessing",
      "MongoDB",
      "PostgreSQL (v1)",
    ],
  },
];

export const descriptionPangea = {
  p1:
    "Pangea is a name of my project created for an internet service provider company - Vodafone. Its main purpose, among others, was to create a network inventory system as errorless as possible (meaning “clean” data with no errors). It meant to build a tool capable to provide IP network discovery for more than 800.000 host IP addresses in a meaningful time in a multi-vendor (router/switches manufacturers or mediagateways) environment. In less then five hours (thanks to asynchronous multiprocessing) it targeted, identified, and gathered device’s meta data from whole network. It could have captured unsupported devices as well and save only partial dataset for further processing. Biggest issue was data evaluation and parsing. Network discovery was a key feature, which was necessary for further development.",
  p2:
    "Discovery was controlled via API or CLI. Each network scan was managed as a session with its own unique UUIDv4.Thanks to this design, users could use the discovery simultaneously.",
  p3:
    "In time, Pangea was connected to several internal systems, databases and APIs. This allowed us to identify inconsistencies, which was an important step for data management and automation (service deployment, script-driven-troubleshooting, device monitoring, configuration changes or backups). It could also handle other network equipment as Media gateways and it was prepared for LTE modems implementation.",
  p4:
    "It was build in Python 3.7 with Flask and multiprocessing library. To ensure data persistency I used MongoDB (which was a replacement for PostgreSQL used in the early stage).",
  p5:
    "It was a challenging project eventually not in coding but dealing with complexity, design and data flow. My goal was to create fully automated solution, extensible in time and basically with no vendor dependency.",
};
