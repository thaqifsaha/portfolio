import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Thaqif",
  lastName: "Saharuddin",
  name: `Thaqif Saharuddin`,
  role: "Software Engineer",
  avatar: "/images/thaqif.png",
  email: "thaqif237@gmail.com",
  location: "Asia/Kuala_Lumpur", // IANA time zone — used for the live clock
  locationLabel: "Selangor, Malaysia", // human-readable location shown in the UI
  languages: ["Malay (native)", "English"],
  locale: "en",
};

const newsletter: Newsletter = {
  display: false, // disabled: no Aveiro audience set up
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>My weekly newsletter about creativity and engineering</>,
};

const social: Social = [
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/thaqifsaha",
    essential: true,
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/thaqif-saharuddin",
    essential: true,
  },
  {
    name: "Credly",
    icon: "credly",
    link: "https://www.credly.com/users/thaqif-saharuddin",
    essential: true,
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/api/og/generate?title=Thaqif%20Saharuddin%27s%20Portfolio",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio of ${person.name}, a ${person.role} focused on IoT, embedded systems, networking and full-stack development.`,
  headline: <>Building where software meets hardware</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">APMS</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Featured case study
        </Text>
      </Row>
    ),
    href: "/work/aviation-performance-monitoring-system",
  },
  subline: (
    <>
      I'm {person.firstName}, a {person.role.toLowerCase()} who likes building where software
      meets hardware — IoT, embedded systems and networking. <br /> Always keen to learn new
      technologies, and happiest with hands-on, physical work.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.locationLabel ?? person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false, // TODO: add a real scheduling link (e.g. Cal.com) if you want this section
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        {person.firstName} is a software engineer who likes building where software meets
        hardware — IoT, embedded systems and networking — always keen to learn new technologies,
        and happiest with hands-on, physical work.
      </>
    ),
  },
  work: {
    display: true,
    title: "Work Experience",
    experiences: [
      {
        company: "TUSAS Malaysia Sdn Bhd",
        logo: "/images/experience/tusas/tusas-logo.jpg",
        timeframe: "Jul 2026 – Present",
        role: "Software Design Trainee & Full-Stack Developer (Intern)",
        achievements: [
          <>
            Currently contributing as a Software Design Trainee and Full-Stack Developer intern,
            working across the design and development lifecycle.
          </>,
          <>TODO: add specific achievements once confirmed (kept general for confidentiality).</>,
        ],
        images: [],
      },
      {
        company: "DMG MORI Malaysia Sdn Bhd",
        logo: "/images/experience/DMG/dmg-logo.png",
        timeframe: "Aug 2024 – Sep 2024",
        role: "Assistant Engineer",
        achievements: [
          <>
            Supported the installation and commissioning of DMG MORI 5-axis machining centers
            (DMU 210, DMU 125) and the relocation of a DMC 95 monoBLOCK, for customers including
            Ultimate Manufacturing Solutions Malaysia (UMS) and Jabil Kulim.
          </>,
        ],
        images: [],
      },
      {
        company: "Sigma Rectrix Systems (M) Sdn Bhd",
        logo: "/images/experience/sigma/sigma-logo.png",
        timeframe: "Mar 2022 – Jul 2022",
        role: "IT Technician",
        achievements: [
          <>
            Installed and configured IT equipment across MKN and RELA Malaysia offices in Perak,
            Penang, Kedah and Perlis.
          </>,
          <>
            Carried out preventive maintenance as the team leader for Hospital Kuala Lumpur (HKL) and Jabatan
            Perkhidmatan Veterinar Malaysia (JPVM).
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true,
    title: "Studies",
    institutions: [
      {
        name: "Universiti Tun Hussein Onn Malaysia (UTHM)",
        logo: "/images/education/uthm-logo.png",
        description: <>Bachelor of Computer Science (Software Engineering) with Honours — CGPA 3.64.</>,
      },
      {
        name: "Politeknik Muadzam Shah (PMS)",
        logo: "/images/education/pms-logo.png",
        description: <>Diploma in Information Technology (Digital Technology) — CGPA 3.69.</>,
      },
    ],
  },
  specialties: {
    display: true,
    title: "Specialties",
    items: [
      { name: "Python", image: "/images/skills/language/python/python.svg" },
      { name: "Java", image: "/images/skills/language/java/java.svg" },
      { name: "PHP", image: "/images/skills/language/php/php.svg" },
      { name: "C++", image: "/images/skills/language/cpp/cpp.svg" },
      { name: "C", image: "/images/skills/language/c/c.svg" },
      { name: "JavaScript", image: "/images/skills/language/javascript/javascript.svg" },
      { name: "HTML", image: "/images/skills/language/html/html.svg" },
      { name: "CSS", image: "/images/skills/language/css/css.svg" },
      { name: "Laravel", image: "/images/skills/laravel.png" },
      { name: "Django", image: "/images/skills/django.png" },
      { name: "Node-RED", image: "/images/skills/node-red.png" },
      { name: "Arduino IDE", image: "/images/skills/arduino-ide.png" },
      { name: "Linux (Ubuntu)", image: "/images/skills/linux.png" },
      { name: "Docker", image: "/images/skills/docker.png" },
      { name: "Cloudflare", image: "/images/skills/cloudflare.png" },
      { name: "Wireshark", image: "/images/skills/wireshark.jpg" },
      { name: "Packet Tracer", image: "/images/skills/packet-tracer.png" },
      { name: "MySQL", image: "/images/skills/mysql.png" },
      { name: "PostgreSQL", image: "/images/skills/postgresql.png" },
      { name: "Figma", image: "/images/skills/figma.png" },
      { name: "Selenium IDE", image: "/images/skills/selenium.png" },
    ],
  },
  certifications: {
    display: true,
    title: "Certifications",
    description: <>Verified credentials on Credly.</>,
    link: "https://www.credly.com/users/thaqif-saharuddin",
    linkLabel: "View on Credly",
    items: [
      "CCNA: Introduction to Networks",
      "Machine Learning using SAS Viya",
      "Data Literacy in Practice",
      "Data Literacy Essentials",
    ],
  },
  outside: {
    display: true,
    title: "Outside work",
    description: (
      <>
        When I'm not building software, I'm probably under a car — fixing them, learning how
        they work, or just photographing them. Fair warning: bring up cars around me, especially
        anything that goes brappp, and I will absolutely geek out.
      </>
    ),
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Software, IoT and infrastructure projects by ${person.name}`,
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // TODO: add car photos here when you're ready to enable this page, e.g.:
  // { src: "/images/gallery/your-photo.jpg", alt: "description", orientation: "horizontal" }
  images: [],
};

export { person, social, newsletter, home, about, blog, work, gallery };
